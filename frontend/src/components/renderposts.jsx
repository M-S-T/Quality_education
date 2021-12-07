import React, { Component } from 'react';
import PropTypes from 'prop-types';
import itachi from "../static/images/itachi.jpg";

class RenderPosts extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-8 border">
                        <Section heading={"Most Popular"} id={"mp"} />
                        <Section heading={"Recommended"} id={"rec"} />
                        <Section heading={"Newest"} id={"newest"} />
                    </div>
                    <div className="col-12 col-md-4">
                        <Aside />
                    </div>
                </div>

            </div>
        );
    }
}

const Section = (props) => {
    return (
        <div className="container mx-0 my-4 border">
            <div id={props.id} class="carousel carousel-dark slide" data-bs-ride="carousel">
                <h4>{props.heading}</h4>
                <div class="carousel-inner">
                    <div class="carousel-item active d-flex">
                        <div style={{ flex: 1, width: "33%" }} >
                            <img src={itachi} alt="Itachi" style={{ width: "100%" }} />
                        </div>
                        <img src={itachi} alt="Itachi" style={{ flex: 1, width: "33%" }} />
                        <img src={itachi} alt="Itachi" style={{ flex: 1, width: "33%" }} />
                    </div>
                    <div class="carousel-item">
                        <img src={itachi} alt="Itachi" style={{ flex: 1, width: "33%" }} />
                        <img src={itachi} alt="Itachi" style={{ flex: 1, width: "33%" }} />
                        <img src={itachi} alt="Itachi" style={{ flex: 1, width: "33%" }} />
                    </div>
                    <div class="carousel-item">
                        <img src={itachi} alt="Itachi" style={{ flex: 1, width: "33%" }} />
                        <img src={itachi} alt="Itachi" style={{ flex: 1, width: "33%" }} />
                        <img src={itachi} alt="Itachi" style={{ flex: 1, width: "33%" }} />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target={"#" + props.id} data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target={"#" + props.id} data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

const Aside = props => {
    return (
        < ul class="list-group aside my-4"  >
            <h4>Another links</h4>
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
        </ul >
    )
}

RenderPosts.propTypes = {

};

export default RenderPosts;