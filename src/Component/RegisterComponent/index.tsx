import {useForm} from "antd/es/form/Form";
import {App, Button, Form, Select} from "antd";
import Input from "antd/es/input/Input";
import {useState} from "react";
import AuthorityGroupEnum from "../../Enums/AuthorityGroupEnum";
import AxiosManager from "../../GobalOps/AxiosManager";
import User from "../../Entitys/User";
import ProjectConfig from "../../ProjectConfig";
import StatusCodeEnum from "../../Enums/StatusCodeEnum";
import ObjHandle from "../../GobalOps/ObjHandle";

const RegisterComponent = () => {
    const app = App.useApp();
    const [form] = useForm();

    const [authority, setAuthority] = useState(AuthorityGroupEnum.User);
    const Submit = (): void => {
        let user = new User(form.getFieldValue("userNickName"), form.getFieldValue("userName"), authority, form.getFieldValue("password"), form.getFieldValue("sex"));
        AxiosManager.post(ProjectConfig.backendUrl + "/api/user", user, {}).then(r => {
            if (r.data === StatusCodeEnum.Success) app.message.success("Register OK").then();
            else app.message.error(r.data).then();
        }, e => {
            app.message.error(e.toString()).then();
        });
    }
    return (<Form form={form} onFinish={Submit}>
        <Form.Item label="请输入用户昵称" name="userNickName"
                   rules={[{
                       required: true,
                       message: "请输入用户昵称"
                   }, {
                       pattern: /^\w{3,20}$/,
                       message: "用户昵称称由3-20个字母，数字，下划线组成"
                   }]}
        ><Input/></Form.Item>
        <Form.Item label="请在此设定密码" name="password" rules={[{
            required: true,
            message: "请输入用户密码"
        }, {
            pattern: /^\w{6,20}$/,
            message: "用户密码称由6-20个字母，数字，下划线组成"
        }]}><Input/></Form.Item>
        <Form.Item label="请输入用户名称" name="userName" rules={[{
            required: true,
            message: "请输入用户名称"
        }]}><Input/></Form.Item>
        <Form.Item label="自定义用户性别" name="sex" rules={[{
            required: true,
            message: "请输入性别"
        }]}><Input/></Form.Item>
        <Form.Item label="用户权限组"><Select
            options={ObjHandle.popLastAndReturnThis(Object.keys(AuthorityGroupEnum).map(r => {
                return {label: r, value: r}
            }))} defaultValue={authority} onChange={(e) => {
            setAuthority(e);
        }}/></Form.Item>
        <Form.Item><Button type={"primary"} htmlType={"submit"}>Submit</Button></Form.Item>
    </Form>)
}
export default RegisterComponent;