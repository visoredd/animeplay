import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GoTop from "components/GoTop";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 3000,
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <div className="h-full bg-[#181818]">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Main />
          <GoTop />
          <Footer />
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
