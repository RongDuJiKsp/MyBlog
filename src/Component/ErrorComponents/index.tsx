import {useParams} from "react-router-dom";
import ParamsEnum from "../../Enums/ParamsEnum";
import PageErrorCodeEnum from "../../Enums/PageErrorCodeEnum";
import Index from "./NotFoundComponent";

const ErrorComponents = () => {
    const params = useParams();
    switch (params[ParamsEnum.PageErrorCode]) {
        case PageErrorCodeEnum.NotFound:
            return <Index/>
    }
    return <Index/>
}
export default ErrorComponents;