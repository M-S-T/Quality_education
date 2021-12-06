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
            <div className="container-fluid mt-5">
                <div id="carouselExampleControls" class="carousel slide border" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="d-flex" style={{ height: 300 }}>
                                <img src={itachi} class="m-auto img-fluid" alt="Itachi" style={{ flex: 1 }} />
                                <img src={itachi} class="m-auto img-fluid" alt="Itachi" style={{ flex: 1 }} />
                                <img src={itachi} class="m-auto img-fluid" alt="Itachi" style={{ flex: 1 }} />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="d-flex">
                                <img src={itachi} class="d-block m-auto img-fluid" alt="Itachi" style={{ height: 300, flex: 1 }} />
                                <img src={itachi} class="d-block m-auto img-fluid" alt="Itachi" style={{ height: 300, flex: 1 }} />
                                <img src={itachi} class="d-block m-auto img-fluid" alt="Itachi" style={{ height: 300, flex: 1 }} />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="d-flex">
                                <img src={itachi} class="d-block m-auto img-fluid" alt="Itachi" style={{ height: 300, flex: 1 }} />
                                <img src={itachi} class="d-block m-auto img-fluid" alt="Itachi" style={{ height: 300, flex: 1 }} />
                                <img src={itachi} class="d-block m-auto img-fluid" alt="Itachi" style={{ height: 300, flex: 1 }} />
                            </div>
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        );
    }
}

RenderPosts.propTypes = {

};

export default RenderPosts;