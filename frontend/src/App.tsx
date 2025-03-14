
// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";



// App
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                {routes.map(({ path, component: Component }, index) => (
                    <Route
                        key={index}
                        path={path}
                        element={<Component />}
                    />
                ))}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
