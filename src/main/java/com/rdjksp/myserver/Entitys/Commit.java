package com.rdjksp.myserver.Entitys;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "commits")
public class Commit {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    long id;
    @Column(name="commit_text")
    private String commitText;
    @Column(name="commit_date")
    private String dateString;
    @Column(name = "commit_username")
    private  String userName;
}
