package com.rdjksp.myserver.Dao;

import com.rdjksp.myserver.Entitys.Commit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommitRepository extends JpaRepository<Commit,Long> {

}
