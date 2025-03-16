
// Hooks
import { useEffect } from "react";

// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";

// Components
import Header from "./components/Global/Header/Header";
import Footer from "./components/Global/Footer/Footer";

// Utils
import { hiddenObserver } from "./utils/hiddenObserver.js";
import { shiftSidewaysObserver } from "./utils/shiftSidewaysObserver.js";


// App
function App() {

    useEffect(() => {
        hiddenObserver();
        shiftSidewaysObserver();

    }, []);

    return (
        <Router>
                <Header />
                <main>
                    <Routes>
                        {routes.map(({ path, component: Component }, index) => (
                            <Route
                                key={index}
                                path={path}
                                element={<Component />}
                            />
                        ))}
                    </Routes>
                </main>
                <Footer />
        </Router>
    );
}

export default App;
