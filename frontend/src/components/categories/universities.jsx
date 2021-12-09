import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../navbarComponent';
import { COLLEGES } from '../../static/data';

class Universities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded_colleges: [],
            current_index: 0,
            load_count: 50,
            college_names : [],
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        // Loading 50 Images at a time
        let curr = []
        for (let i = 0; i < this.state.load_count; i++) {
            curr.push(COLLEGES[i + this.state.load_count * this.state.current_index])
        }

        this.setState(prev => ({
            loaded_colleges: [...prev.loaded_colleges, curr],
        }))

        this.setState(prev => ({
            current_index: prev.current_index + 1
        }))
    }


    handleChange = e => {
        console.log(e.target.value);

        const s_value = e.target.value;
        const s_colleges = [];

        // todo : optimise the search algorithm using binary search

        this.setState({
            college_names : s_colleges
        })
    }


    render() {
        return (
            <>
                <Navbar />
                <div className="container-fluid my-3">
                    <div className="row mx-2 my-3">
                        <div className="col-12 col-md-6 order-2 mb-2">
                            <form className="d-flex">
                                <input list="college_list" class="form-control" id="college_search" placeholder={"Search colleges"} onChange={this.handleChange}/>
                                <datalist id="college_list">
                                    {this.state.college_names.map((c, i) => {
                                        return(
                                            <option value={c} key={i}>{c}</option>
                                        )
                                    })}
                                </datalist>
                                <input type="submit" value="Search" className="btn btn-success" />
                            </form>
                        </div>
                        <div className="col-12 col-md-6 order-1">
                            <h4>List of all colleges</h4>
                        </div>
                    </div>
                    <div className="row mx-2 my-5">
                        <RenderUniv colleges={this.state.loaded_colleges} />
                    </div>
                </div>
            </>
        );
    }
}

const RenderUniv = props => {
    return (
        props.colleges.map((college_list, index) => {
            return (
                college_list.map((college, i) => {
                    return (
                        <div class="card col-12 col-sm-6 col-md-3 bg-success text-white" key={index * college_list.length + i}>
                            <div class="card-body">
                                <p class="card-title text-bolder"><span>{college["S. No."]}. </span>{college["University Name"]}</p>
                                <p class="card-subtitle text-bold">{college["College Name"]}</p>
                                <p>{college["College Type"]}</p>
                                <p>{college["State Name"]}</p>
                                <p>{college["District Name"]}</p>
                            </div>
                        </div>
                    )
                })
            )
        })

        // COLLEGES.map((college, index) => {
        //     return (

        //     )
        // })
    )
}

Universities.propTypes = {
    loaded_colleges: PropTypes.array,
    current_index: PropTypes.number,
    load_count: PropTypes.number,
    college_names : PropTypes.array,
};

export default Universities;