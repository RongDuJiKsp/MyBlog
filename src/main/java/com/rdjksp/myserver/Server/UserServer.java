package com.rdjksp.myserver.Server;

import com.rdjksp.myserver.Dao.UserRepository;
import com.rdjksp.myserver.Entitys.User;
import com.rdjksp.myserver.Enums.AuthorityGroupEnum;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Getter
@NoArgsConstructor
@Slf4j
public class UserServer {
    @Autowired
    private UserRepository userRepository;

    @Bean
    public UserServer getUserServer() {
        return new UserServer();
    }

    public boolean createNewUser(User user) {
        if (userRepository.findUserByUserNickName(user.getUserNickName()) != null) return false;
        log.info(user.toString());
        user.setAuthorityGroupEnum(AuthorityGroupEnum.valueOf(user.getGroupName()));
        userRepository.save(user);
        return true;
    }

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

}
