import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import FunctionsAndEvents from "./pages/FunctionsAndEvents/FunctionsAndEvents";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/menu",
        name: "Menu",
        component: Menu
    },
    {
        path: "/functions-and-events",
        name: "Functions & Events",
        component: FunctionsAndEvents
    }
];

export default routes;
