package com.rdjksp.myserver.Controller;

import com.rdjksp.myserver.Entitys.Commit;
import com.rdjksp.myserver.Server.CommitServer;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.util.List;


@Controller
@ResponseBody
@CrossOrigin("*")
@RequestMapping("/api/commits")
@Slf4j
public class CommitController {
    @Autowired
    private CommitServer commitServer;

    @GetMapping
    public List<Commit> getAll() {
        return commitServer.getAllCommit();
    }

    @PostMapping
    public void addCommit(@RequestBody Commit commit) throws UnsupportedEncodingException {
        commitServer.addCommit(commit);
    }

}
