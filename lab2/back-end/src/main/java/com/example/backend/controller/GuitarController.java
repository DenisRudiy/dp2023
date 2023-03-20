package com.example.backend.controller;


import com.example.backend.entity.GuitarEntity;
import com.example.backend.repository.GuitarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/back-end/api/guitar_entity")
public class GuitarController {

    @Autowired
    GuitarRepository guitarRepository;

    @GetMapping("/retrieve")
    public List<GuitarEntity> getEntities(){
        return guitarRepository.findAll();
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public GuitarEntity postEntity(@RequestBody GuitarEntity guitarEntity){
        return guitarRepository.save(guitarEntity);
    }

}
