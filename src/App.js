import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Reviews from "./components/reviews/Reviews";
import Dashboard from "./components/dashboard/Dashboard";
import Blog from "./components/blog/Blog";
import About from "./components/about/About";
import NotFound from "./components/not-found/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/blogs" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
