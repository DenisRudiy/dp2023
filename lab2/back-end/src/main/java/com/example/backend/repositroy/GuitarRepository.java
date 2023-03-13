package com.example.backend.repositroy;

import com.example.backend.entity.GuitarEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GuitarRepository extends JpaRepository<GuitarEntity, String> {

}
