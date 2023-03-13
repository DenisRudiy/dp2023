package com.example.backend.controller;

import com.example.backend.entity.GuitarEntity;
import com.example.backend.repositroy.GuitarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class IndexController {

    @Autowired
    private GuitarRepository guitarRepository;

    @GetMapping("/")
    public String getIndexPage(Model model) {
        List<GuitarEntity> guitarList = guitarRepository.findAll();
        model.addAttribute("guitarList", guitarList);

        return "index";
    }

}
