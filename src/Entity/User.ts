class User {
    userNickName: string;
    userName: string;
    GroupName: string;
    password: string;
    sex: string;
    eco: number;
    point: number;

    constructor(userNickName: string, userName: string, GroupName: string, password: string, sex: string) {
        this.userNickName = userNickName;
        this.userName = userName;
        this.GroupName = GroupName;
        this.password = password;
        this.sex = sex;
        this.eco = 0;
        this.point = 0;
    }
}

export default User;