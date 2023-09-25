package com.rdjksp.myserver.Dao;

import com.rdjksp.myserver.Entitys.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    public User findUserByUserNickName(String string);
}
