import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Items } from "./Items";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Мокируем данные API
const mockData = {
  results: Array.from({ length: 20 }, (_, i) => ({
    id: i,
    name: `Item ${i + 1}`,
  })),
};

// Функция запроса, имитирующая API
const mockQuery = async () => mockData;

// Функция рендеринга элемента списка
const renderItem = (item: { id: number; name: string }) => (
  <div key={item.id} data-testid="item">
    {item.name}
  </div>
);

// Оборачиваем компонент в QueryClientProvider
const renderWithProvider = () => {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <Items query={mockQuery} renderItem={renderItem} />
    </QueryClientProvider>
  );
};

describe("Items component", () => {
  it("renders Load More button if there are more items to show", async () => {
    renderWithProvider();

    // Проверяем, что кнопка отображается
    expect(await screen.findByText("Load More")).toBeInTheDocument();
  });

  it("clicking Load More button loads more items", async () => {
    renderWithProvider();

    // Изначально должно быть 8 элементов
    expect(await screen.findAllByTestId("item")).toHaveLength(8);

    // Кликаем по кнопке
    fireEvent.click(screen.getByText("Load More"));

    // Должно стать 16 элементов
    expect(await screen.findAllByTestId("item")).toHaveLength(16);
  });

  it("Load More button disappears when all items are loaded", async () => {
    renderWithProvider();

    // Кликаем, пока все элементы не загрузятся
    for (let i = 0; i < 2; i++) {
      fireEvent.click(await screen.findByText("Load More"));
    }

    // Проверяем, что 20 элементов отображаются
    expect(await screen.findAllByTestId("item")).toHaveLength(20);

    // Кнопка "Load More" должна исчезнуть
    expect(screen.queryByText("Load More")).toBeNull();
  });
});
