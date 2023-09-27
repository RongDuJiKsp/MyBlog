import HomeRouter from "./Routers/HomeRouter";
import {useRoutes} from "react-router-dom";


const Main = () => {
    //全局变量
    return useRoutes([
        {
            path: "/*",
            element: <HomeRouter/>
        }
    ])
}
export default Main;