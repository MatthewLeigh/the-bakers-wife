
// Routing
import { Link } from "react-router-dom";
import routes from "../routes";



// Header
const Header = () => {
    return (
        <nav>
            <ul>
                {routes.map(({ path, name }, index) => (
                    <li key={index}>
                        <Link to={path}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Header;
