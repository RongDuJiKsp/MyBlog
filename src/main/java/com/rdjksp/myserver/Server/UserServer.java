package com.rdjksp.myserver.Server;

import com.rdjksp.myserver.Dao.UserRepository;
import com.rdjksp.myserver.Entitys.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Getter
@NoArgsConstructor

public class UserServer {
    @Autowired
    private UserRepository userRepository;

    @Bean
    public UserServer getUserServer() {
        return new UserServer();
    }

    public boolean createNewUser(User user) {
        if (userRepository.findUserByUserNickName(user.getUserNickName()) != null) return false;
        userRepository.save(user);
        return true;
    }

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

}
