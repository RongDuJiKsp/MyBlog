package com.rdjksp.myserver.Converter;

import com.rdjksp.myserver.Enums.AuthorityGroupEnum;
import jakarta.persistence.AttributeConverter;


public class AuthorityGroupConverter implements AttributeConverter<AuthorityGroupEnum, String> {

    @Override
    public String convertToDatabaseColumn(AuthorityGroupEnum authorityGroupEnum) {
        if (authorityGroupEnum == null) return null;
        return authorityGroupEnum.getValue();
    }

    @Override
    public AuthorityGroupEnum convertToEntityAttribute(String dbData) {
        if (dbData == null) return null;
        for (AuthorityGroupEnum authorityGroupEnum : AuthorityGroupEnum.values()) {
            if(authorityGroupEnum.getValue().equals(dbData)) return  authorityGroupEnum;
        }
        return  null;
    }
}
