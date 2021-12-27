import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

function Subject({match}){
    const code = useSelector(state => state.subject_code);
    const [subjects, setsubjects] = useState([])

    useEffect(() => {
        const url = `http://127.0.0.1:8000/app/getResource/${code}/`;
        axios.get(url)
        .then(res => {
            console.log(res.data);
            setsubjects(res.data);
        })
    }, [])

    return (
        <div className="container-fluid">
            {subjects.map(subject => {
                return (
                    <div key={subject.id}>
                    <h1>{subject.name}</h1>
                    {/* <iframe src={"/backend"+subject.file} frameBorder={0}></iframe> */}
                    <p>{subject.file}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Subject;