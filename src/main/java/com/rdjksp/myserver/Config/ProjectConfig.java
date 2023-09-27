package com.rdjksp.myserver.Config;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ProjectConfig {
    tokenUrl("");
    private String value;
}
