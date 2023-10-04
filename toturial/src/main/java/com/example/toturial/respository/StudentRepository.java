package com.example.toturial.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.toturial.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

}
