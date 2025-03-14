
// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";

// Components
import Header from "./components/Header";

// App Layout
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
        </Router>
    );
}

export default App;
