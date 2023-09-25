package com.rdjksp.myserver.Server;

import com.rdjksp.myserver.Dao.CommitRepository;
import com.rdjksp.myserver.Entitys.Commit;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.List;

@Service
@Getter
@NoArgsConstructor
@Slf4j
public class CommitServer {
    @Autowired
    private CommitRepository commitRepository;

    @Bean
    public CommitServer getCommitServer() {
        return new CommitServer();
    }

    public List<Commit> getAllCommit() {
        return commitRepository.findAll();
    }

    public void addCommit(Commit commit) {
        commit.setDateString(new Date().toGMTString());
        log.info(commit.toString());
        commitRepository.save(commit);
    }
}
