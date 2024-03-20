import React from 'react';
import bg1 from '../assets/images/bg1.png';
import bg2 from '../assets/images/bg2.png';
import bg3 from '../assets/images/bg3.png';

const WeatherBlock = () => {
  return (
    <>
    <div className="main_header">

        <div className="row">
            <div className="col-md-10 col-12 mx-auto">
                <div className="row">
                    <div className="col-md-6 col-12 main_header_left">
                        <p>Welcome to weather app</p>
                        <h1>Get the latest <span className="txt_clr">weather</span> info of your Country</h1>
                        <a href="/weather"><button>check now</button></a>
                    </div>

                    <div className="col-md-6 col-12 main_header_right home_header_right">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="w-100" src={bg1} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100" src={bg2} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100" src={bg3} alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                                data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                                data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>

    <footer>
        <p>
            created by naveen kumar
        </p>
    </footer>
    </>
  )
}

export default WeatherBlock
