package com.example.backend.repository;

import com.example.backend.entity.GuitarEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "guitars", path = "guitars")
public interface GuitarRepository extends JpaRepository<GuitarEntity, Long> {

}
