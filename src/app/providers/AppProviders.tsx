import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProvidersProps } from "../lib/types";

export const AppProviders: React.FC<ProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
