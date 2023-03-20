package com.example.backend.repository;

import com.example.backend.entity.GuitarEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GuitarRepository extends JpaRepository<GuitarEntity, Long> {

}
