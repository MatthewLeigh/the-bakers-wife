import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import FunctionsAndEvents from "./pages/FunctionsAndEvents";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/menu", name: "Menu", component: Menu },
    { path: "/functions-and-events", name: "Functions & Events", component: FunctionsAndEvents }
];

export default routes;
