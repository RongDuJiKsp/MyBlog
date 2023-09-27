import {useRoutes} from "react-router-dom";
import LoginComponent from "../Component/LoginComponent";
import RegisterComponent from "../Component/RegisterComponent";

const HomeRouter = () => {
    return useRoutes([
        {
            path: "/login",
            element: <LoginComponent/>
        }, {
            path: "/register",
            element: <RegisterComponent/>
        }, {
            path: "/",
            element: <div>$)$ NOT FOUNd</div>
        }
    ]);
}
export default HomeRouter;