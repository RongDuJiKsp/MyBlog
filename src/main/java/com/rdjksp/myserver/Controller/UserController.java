package com.rdjksp.myserver.Controller;

import com.alibaba.fastjson2.JSON;
import com.alibaba.fastjson2.JSONObject;
import com.rdjksp.myserver.Entitys.User;
import com.rdjksp.myserver.Server.UserServer;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/user")
@Slf4j
public class UserController {
    @Autowired
    private UserServer userServer;

    @PostMapping
    public String createUser(@RequestBody String json) {
        User user = JSON.parseObject(json, User.class);
        if(userServer.createNewUser(user)) return  "OK";
        return "ID existed";
    }

    @GetMapping
    public List<User> getAllUser() {
        return userServer.getAllUser();
    }

}
