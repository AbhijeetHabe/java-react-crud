package com.example.toturial.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.toturial.entity.Student;
import com.example.toturial.service.StudentService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/v1")
@RestController
public class StudentController {

	@Autowired
	StudentService studentService;
	
	@GetMapping("/allStudent")
	public ResponseEntity<Iterable<Student>> getAllStudent() {
		return new ResponseEntity<>(studentService.allStudent(), HttpStatus.OK);
	}
	
	@PostMapping("/addStudent")
	public ResponseEntity<Student> addStudent(@RequestBody Student student) {
		Student st = new Student();
		st.setCourse(student.getCourse());
		st.setName(student.getName());
		st.setRoll_no(student.getRoll_no());
		st.setStudent_id(student.getStudent_id());
		if (studentService.insertStudent(st)) {
			return new ResponseEntity<> (st, HttpStatus.CREATED);
		}
		return new ResponseEntity<> (null, HttpStatus.BAD_REQUEST);
	}
	
	@PutMapping("/updateStudent")
	public ResponseEntity<Student> updateStudent(@RequestParam int id, @RequestBody Student student) {
		if (studentService.updateStudent(id, student)) {
			return new ResponseEntity<> (student, HttpStatus.CREATED);
		}
		return new ResponseEntity<> (null, HttpStatus.BAD_REQUEST);
	}
	
	@DeleteMapping("/deleteStudent")
	public ResponseEntity<Student> deleteStudent(@RequestParam int id) {
		studentService.deleteStudent(id);
		return new ResponseEntity<> (null, HttpStatus.OK);
	}
}
