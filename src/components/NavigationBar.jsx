import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">  {/* className instead of class */}
            <div className="container-fluid">  {/* className instead of class */}
                <Link className="navbar-brand" to="#">Navbar</Link>  {/* className instead of class */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>  {/* className instead of class */}
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">  {/* className instead of class */}
                    <div className="navbar-nav">  {/* className instead of class */}
                        <Link className="nav-link active" aria-current="page" to="/">AddBoat</Link>
                        <Link className="nav-link" to="/search">SearchBoat</Link>
                        <Link className="nav-link" to="/delete">DeleteBoat</Link>
                        <Link className="nav-link" to="/view">ViewBoat</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar