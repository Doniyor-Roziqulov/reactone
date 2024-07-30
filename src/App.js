import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Service from "./components/service/Service";
import About from "./components/about/About";
import Market from "./components/market/Market";
import Says from "./components/says/Says";
import Blog from "./components/blog/Blog";
import Forget from "./components/forget/Forget";

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Service />
            <About />
            <Market />
            <Says />
            <Blog />
            <Forget />
        </div>
    );
}

export default App;
