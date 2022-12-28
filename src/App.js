import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	const queryClient = new QueryClient();
	return (
		<div className='h-full bg-[#181818]'>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<Header />
					<Main />
					<Footer />
				</QueryClientProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
