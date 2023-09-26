package com.rdjksp.myserver.Entitys;

import com.rdjksp.myserver.Enums.AuthorityGroupEnum;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "user_data")
public class User {
    @Id
    @GeneratedValue
    private long id;
    @Column(name = "user_name")
    private String userName;
    @Column(name = "nick_name")
    private String userNickName;
    @Column(name = "group_name")
    private String GroupName;
    private AuthorityGroupEnum authorityGroupEnum;
    private String password;
    private String sex;
    private int eco;
    private int point;
}
