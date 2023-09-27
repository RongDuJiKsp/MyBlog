import AuthorityGroupEnum from "../Enums/AuthorityGroupEnum";
import {useState} from "react";
import StatusCodeEnum from "../Enums/StatusCodeEnum";

type loginStatus = {
    userNickName: string,
    userGroup: AuthorityGroupEnum,
    token: string
}
const useLogin = () => {
    const [userStatus, setUserstatus] = useState<loginStatus>({
        userNickName: "",
        userGroup: AuthorityGroupEnum.None,
        token: "",
    });
    const login = (status: loginStatus): string | StatusCodeEnum => {
        if (userStatus.userGroup !== AuthorityGroupEnum.None) return "A user has in login";
        setUserstatus(status);
        return StatusCodeEnum.Success;
    }
    const logout = (token: string): string | StatusCodeEnum => {
        if (userStatus.userGroup === AuthorityGroupEnum.None) return "None user has in login";
        if (token !== userStatus.token) return StatusCodeEnum.TokenError;
        setUserstatus({
            userNickName: "",
            userGroup: AuthorityGroupEnum.None,
            token: "",
        });
        return StatusCodeEnum.Success;
    }
    return {
        userStatus: userStatus,
        login: login,
        logout: logout
    }
}
export default useLogin;