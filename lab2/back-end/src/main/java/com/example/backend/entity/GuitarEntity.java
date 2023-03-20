package com.example.backend.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="guitars")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GuitarEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;

	public String name;
	public String description;
	public String category;
	public String inventoryStatus;
	public String photo;
	public int price;
	public int rate;

}
