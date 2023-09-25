package com.rdjksp.myserver;

import com.rdjksp.myserver.Entitys.Commit;
import com.rdjksp.myserver.Entitys.User;
import org.springframework.context.annotation.Bean;

public class EntitysBean {
    @Bean
    public Commit getCommit() {
        return new Commit();
    }
    @Bean
    public User getUser(){
        return  new User();
    }
}
