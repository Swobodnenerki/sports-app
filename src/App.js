import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewsDetailsPage from "./pages/NewsDetailsPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/news" element={<NewsDetailsPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));