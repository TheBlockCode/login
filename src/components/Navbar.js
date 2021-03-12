import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">About us</Link>
          <Link className ="navbar-brand" to = "/Login" >Login</Link>
          <Link className = "navbar-brand" to = "/Registro">Registro</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          </div>
        </div>
      </nav>
)