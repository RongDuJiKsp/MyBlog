package com.rdjksp.myserver.Config;

import org.hibernate.dialect.MariaDBDialect;

public class DBConfig extends MariaDBDialect {
    @Override
    public String getTableTypeString() {
        return  "DEFAULT CHARSET=utf8";
    }
}
