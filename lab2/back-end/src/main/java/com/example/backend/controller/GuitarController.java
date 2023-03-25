package com.example.backend.controller;


import com.example.backend.entity.GuitarEntity;
import com.example.backend.repository.GuitarRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/guitars")
@Slf4j
public class GuitarController {

    @Autowired
    GuitarRepository guitarRepository;

    @GetMapping("/retrieve")
    public List<GuitarEntity> getEntities(){
        List<GuitarEntity> list;
        log.info("[GUITAR CONTROLLER] Before GET");
        list = guitarRepository.findAll();
        log.info("[GUITAR CONTROLLER] After GET Found {} things", list.size());
        return guitarRepository.findAll();
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public GuitarEntity postEntity(@RequestBody GuitarEntity guitarEntity){
        log.info("[GUITAR CONTROLLER] After POST Found new guitar {} ", guitarEntity);
        return guitarRepository.save(guitarEntity);
    }

    @PutMapping("/update/{id}")
    public GuitarEntity putEntity(@PathVariable long id, @RequestBody GuitarEntity newEntity){
        GuitarEntity updatedEntity = guitarRepository.findById(id)
                .orElseThrow(()-> new ResourceAccessException("Not found guitarEntity with id: "+id));
        updatedEntity.setName(newEntity.getName());
        updatedEntity.setDescription(newEntity.getDescription());
        updatedEntity.setCategory(newEntity.getCategory());
        updatedEntity.setInventoryStatus(newEntity.getInventoryStatus());
        updatedEntity.setPhoto(newEntity.getPhoto());
        updatedEntity.setPrice(newEntity.getPrice());
        updatedEntity.setRate(newEntity.getRate());
        log.info("[GUITAR CONTROLLER] After PUT Found updated guitar {} ", updatedEntity);
        return guitarRepository.save(updatedEntity);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEntity(@PathVariable long id){
        GuitarEntity deletedEntity = guitarRepository.findById(id)
                .orElseThrow(()-> new ResourceAccessException("Not found guitarEntity with id: "+id));
        log.info("[GUITAR CONTROLLER] After DELETE Found deleted guitar {} ", deletedEntity);
        guitarRepository.deleteById(id);
    }

}
