import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppProviders = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
