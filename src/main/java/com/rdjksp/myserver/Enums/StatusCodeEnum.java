package com.rdjksp.myserver.Enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum StatusCodeEnum {
    Success("OK"),
    SystemError("SystemError"),
    TokenError("TokenError");
    private String value;
}
