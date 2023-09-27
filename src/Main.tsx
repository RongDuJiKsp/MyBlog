import {useRoutes} from "react-router-dom";
import HomePageComponents from "./Component/HomePageComponents";


const Main = () => {
    //全局变量
    return useRoutes([
        {
            path: "/",
            element: <HomePageComponents/>
        }
    ])
}
export default Main;