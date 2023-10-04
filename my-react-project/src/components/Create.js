import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import api from '../api/axiosConfig'
import { Link } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState("");
    const [student_id, setStudent_id] = useState(0);
    const [course, setCourse] = useState("");
    const [roll_no, setRoll_no] = useState(0);

    const submitStudent = () => {
        api.post("api/v1/addStudent", {
            student_id: student_id,
            name: name,
            course: course,
            roll_no: roll_no
        })
        alert("Student Created!!")
    }

    return (
        <Form>
            <Form.Field>
                <label>Student ID</label>
                <input onChange={(e) => { setStudent_id(e.target.value) }} placeholder='Student ID' />
            </Form.Field>
            <Form.Field>
                <label>Name</label>
                <input onChange={(e) => { setName(e.target.value) }} placeholder='Name' />
            </Form.Field>
            <Form.Field>
                <label>Roll No</label>
                <input onChange={(e) => { setRoll_no(e.target.value) }} placeholder='roll_no' />
            </Form.Field>
            <Form.Field>
                <label>Course</label>
                <input onChange={(e) => { setCourse(e.target.value) }} placeholder='Course' />
            </Form.Field>
            <Link to='/'>
                <Button onClick={submitStudent} type='submit'>Submit</Button>
            </Link>
        </Form>
    )
}

export default Create;