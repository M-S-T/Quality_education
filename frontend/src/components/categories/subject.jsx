import axios from 'axios';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

function Subject({match}){
    const code = useSelector(state => state.subject_code);

    useEffect(() => {
        axios.get();
        console.log(code);
    }, [])

    return (
        <h1>
            This is subject area
        </h1>
    )
}

export default Subject;