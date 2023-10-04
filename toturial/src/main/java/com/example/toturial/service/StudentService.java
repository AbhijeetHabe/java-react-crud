package com.example.toturial.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.toturial.entity.Student;
import com.example.toturial.respository.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	StudentRepository studentRepo;

	public Student findStudent(int id) {
		Optional<Student> student = studentRepo.findById(id);
		return student.get();
	}
	
	public Iterable<Student> allStudent() {
		return studentRepo.findAll();
	}
	
	public boolean updateStudent(int id, Student student) {
		Student std = findStudent(id);
		std.setCourse(student.getCourse());
		std.setName(student.getName());
		std.setRoll_no(student.getRoll_no());
		
		if (studentRepo.save(std) == null) {
			return false;
		}
		return true;
	}
	
	public boolean insertStudent(Student student) {
		if (studentRepo.save(student) == null) {
			return false;
		}
		return true;
	}
	
	public void deleteStudent(int id) {
		studentRepo.deleteById(id);
	}
}
