import axios from "axios";

const AxiosManager = {
    post: (url, dataObj, extraObj) => {
        if(dataObj===undefined) dataObj={};
        if(extraObj===undefined) extraObj={};
        return new Promise((resolve, reject) => {
            axios({
                headers: {"Content-Type": "application/json;charset=utf8"},
                data: dataObj,
                url: url,
                method: "post",
                ...extraObj
            }).then(r => {
                resolve(r);
            }, e => {
                reject(e);
            });
        })
    },
    get: (url, dataObj, extraObj) => {
        if(dataObj===undefined) dataObj={};
        if(extraObj===undefined) extraObj={};
        return new Promise((resolve, reject) => {
            axios({
                data: dataObj,
                url: url,
                method: "get",
                ...extraObj
            }).then(r => {
                resolve(r);
            }, e => {
                reject(e);
            });
        })
    }
}
export default AxiosManager
