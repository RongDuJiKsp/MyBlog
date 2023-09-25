package com.rdjksp.myserver.Controller;

import com.rdjksp.myserver.Entitys.User;
import com.rdjksp.myserver.Server.UserServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserServer userServer;
    @PostMapping
    public  String createUser(@RequestBody User user){
        if(userServer.createNewUser(user)) return  "OK";
        else  return "Id existed";
    }
    @GetMapping
    public List<User> getAllUser(){
        return  userServer.getAllUser();
    }

}
