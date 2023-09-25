package com.rdjksp.myserver.Enums;


public enum AuthorityGroupEnum {
    Root("Root"),
    Administrator("Administrator"),
    User("User"),
    Visitor("Visitor"),
    VipUser("VipUser");
    private String value;

    AuthorityGroupEnum(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
