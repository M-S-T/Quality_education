import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbarComponent';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';

function Subjects() {
    const [subjects, setSubjects] = useState([]);
    const dispatch = useDispatch();
    const action = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        const url = "http://127.0.0.1:8000/app/getSubjects/";

        axios.get(url)
            .then(res => {
                setSubjects(res.data.subjects);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-3">
                    <div className='col-12 col-md-6 offset-md-6 d-flex'>
                        <input type="text" list='college-list' className="form-control" id="subject" placeholder="Enter subject" style={{flex : 3}} />
                        <datalist id='college-list'>
                            {subjects.map(subject => <option key={subject.id} value={subject.name} />)}
                        </datalist>
                        <input type="button" value="Search" className='btn btn-success' style={{flex : 1}} />
                    </div>
                </div>
                <div className="row g-3 mt-3">
                    {
                        subjects.map((subject, index) => {
                            return (
                                <Link to={`/subject/${subject.code}`} className="card text-white col-12 col-sm-6 col-md-4 col-lg-3" key={subject.id}
                                    style={{background : "#f3950d", textDecoration:"none" }}
                                    onClick={() => action.updateCode(subject.code)}>
                                    <div className="card-header">{index + 1}</div>
                                    <div className="card-body">
                                        <h6 className="card-title">{subject.name}</h6>
                                        <p className="card-text">CODE : {subject.code}</p>
                                    </div>
                                </Link>
                            )
                        }
                        )}
                </div>
            </div>
        </>
    )
}

export default Subjects;