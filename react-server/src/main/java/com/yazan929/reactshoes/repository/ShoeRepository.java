package com.yazan929.reactshoes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yazan929.reactshoes.modal.Shoe;

@Repository
public interface ShoeRepository extends JpaRepository<Shoe, Long>{

}