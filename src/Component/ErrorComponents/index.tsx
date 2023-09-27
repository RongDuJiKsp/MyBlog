import {useParams} from "react-router-dom";
import ParamsEnum from "../../Enums/ParamsEnum";
import PageErrorCodeEnum from "../../Enums/PageErrorCodeEnum";
import NotFoundComponent from "./NotFoundComponent";

const ErrorComponents = () => {
    const params = useParams();
    switch (params[ParamsEnum.PageErrorCode]) {
        case PageErrorCodeEnum.NotFound:
            return <NotFoundComponent/>
    }
    return <NotFoundComponent/>
}
export default ErrorComponents;