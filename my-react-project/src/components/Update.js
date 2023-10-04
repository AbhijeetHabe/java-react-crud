import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import api from '../api/axiosConfig'
import { Link } from 'react-router-dom';

export default function Update() {
    const [name, setName] = useState("");
    const [student_id, setStudent_id] = useState(0);
    const [course, setCourse] = useState("");
    const [roll_no, setRoll_no] = useState(0);

    useEffect(() => {
        setStudent_id(localStorage.getItem('student_id'))
        setName(localStorage.getItem('name'));
        setCourse(localStorage.getItem('course'));
        setRoll_no(localStorage.getItem('roll_no'))
    }, []);

    const updateStudent = () => {
        api.put("api/v1/updateStudent?id=" + student_id, {
            student_id: student_id,
            name: name,
            course: course,
            roll_no: roll_no
        })
        alert("Student Updated!!");
    }

    return (
        <div>
            <Form>
                <Form.Field>
                    <label>Student ID</label>
                    <input value={student_id} onChange={(e) => { setStudent_id(e.target.value) }} placeholder='Student ID' />
                </Form.Field>
                <Form.Field>
                    <label>Name</label>
                    <input value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Name' />
                </Form.Field>
                <Form.Field>
                    <label>Roll No</label>
                    <input value={roll_no} onChange={(e) => { setRoll_no(e.target.value) }} placeholder='roll_no' />
                </Form.Field>
                <Form.Field>
                    <label>Course</label>
                    <input value={course} onChange={(e) => { setCourse(e.target.value) }} placeholder='Course' />
                </Form.Field>
                <Link to='/'>
                    <Button onClick={updateStudent} type='submit'>Update</Button>
                </Link>
            </Form>
        </div>
    )
}