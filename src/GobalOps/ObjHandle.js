const ObjHandle = {
    popLastAndReturnThis: function (Obj) {
        if (Obj.pop === undefined) return null;
        Obj.pop();
        return Obj;
    }
}
export default ObjHandle;