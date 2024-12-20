import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Посмотреть архитектуру frontend приложений - FSD.
/* 
  Попробовать передалать на структуру:

  pages
    character-page
      character-page.tsx

  entities
    characers
      model
        characters-request.ts
      lib
        types.ts
        constants.ts

  views
    character-view
      character-view.tsx (будет содержать полностью собранную страницу с запросами и компонентами)

  widgets
  
  shared
    ui
      input
        ui
          input.tsx
        lib
          constants.ts
        modle
      select
    config
      query-config
    assets
      image
*/

// Посмотреть конфигурацию, добавить при необходимости.
const queryClient = new QueryClient();

/*
  Можно выносить провайдеры в отдельный файл.

  export const RequestProvider = (children) => {

  <QueryClientProvider>
    {children}
  </QueryClientProvider>

  }
*/

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-3/5 mx-auto flex flex-col justify-center">
        <Header />
        <Content />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
