import React, { useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react'
import api from '../api/axiosConfig'
import { Link } from 'react-router-dom';

export default function Read() {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        api.get("api/v1/allStudent").then((response) => {
            setApiData(response.data);
        })
    }, []);

    const setData = (data) => {
        let { student_id, name, course, roll_no } = data;
        localStorage.setItem('student_id', student_id);
        localStorage.setItem('name', name);
        localStorage.setItem('course', course);
        localStorage.setItem('roll_no', roll_no)
    }

    const onDelete = (id) => {
        api.delete("api/v1/deleteStudent?id=" + id).then(() => {
            getData();
        })
        alert("Student Deleted!!");
    }

    const getData = () => {
        api.get("api/v1/allStudent").then((response) => {
            setApiData(response.data);
        })
    }

    return (
        <div>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Student ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Course</Table.HeaderCell>
                        <Table.HeaderCell>Roll No</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {apiData.map((student) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{student.student_id}</Table.Cell>
                                <Table.Cell>{student.name}</Table.Cell>
                                <Table.Cell>{student.course}</Table.Cell>
                                <Table.Cell>{student.roll_no}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell>
                                        <Button onClick={() => setData(student)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(student.student_id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            <Link to='/create'>
                <Button>Create</Button>
            </Link>
        </div>
    )
}