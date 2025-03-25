
// Hooks
import { useEffect } from "react";

// Routing
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

// Components
import Header from "./components/Global/Header/Header";
import Footer from "./components/Global/Footer/Footer";

// Utils
import { hiddenObserver } from "./utils/hiddenObserver.js";


// App
function App() {

    useEffect(() => {
        hiddenObserver();
    }, []);

    return (
        <BrowserRouter basename="/the-bakers-wife/">
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
        </BrowserRouter>
    );
}

export default App;
