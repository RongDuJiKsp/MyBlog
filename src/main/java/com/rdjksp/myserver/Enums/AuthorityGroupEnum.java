package com.rdjksp.myserver.Enums;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
public enum AuthorityGroupEnum {
    Root("Root"),
    Administrator("Administrator"),
    User("User"),
    Visitor("Visitor"),
    VipUser("VipUser"),
    None("None");
    private String value;
}
