import React from 'react';
import "../assets/css/style.css";

const Navbar = () => {
  return (
        <div className="container-fluid main_menu">
        <div className="row">
            <div className="col-md-10 col-12 mx-auto">
                <nav className="navbar navbar-expand-lg ">
                    <a className="navbar-brand" href="/">WorldWeather</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/weather">Weather</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/daily-trends">Daily Trends</a>
                            </li>

                        </ul>

                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar
