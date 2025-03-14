
// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Global Styles
import GlobalStyles from "./globalStyles";

// App Layout
function App() {
    return (
        <Router>
            <GlobalStyles />

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
