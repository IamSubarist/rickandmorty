import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

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
