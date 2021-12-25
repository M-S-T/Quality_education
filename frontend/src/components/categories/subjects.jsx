import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Subjects() {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const url = "http://127.0.0.1:8000/app/getSubjects/";

        axios.get(url)
            .then(res => {
                console.log(res.data.subjects);
                setSubjects(res.data.subjects);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container">
            <div className="row mt-5">
        {
        subjects.map((subject, index) => {
            return (
                <div className="card text-white bg-primary mb-3 col-12 col-sm-6 col-md-4 col-lg-3" key={subject.id}>
                    <div className="card-header">{index}</div>
                    <div className="card-body">
                        <h5 className="card-title">{subject.name}</h5>
                        <p className="card-text">CODE:{subject.code}</p>
                    </div>
                </div>
            )
        }
        )}
        </div>
        </div>
        )
}

export default Subjects;