const ObjHandle = {
    popLastAndReturnThis: function (Obj: any) {
        if (Obj.pop === undefined) return null;
        Obj.pop();
        return Obj;
    }
}
export default ObjHandle;