import React, {Component} from 'react'
import './style.css'
const backNav = {
    backgroundColor: 'white'
}
class Navbar extends  Component {
    render () {
        let user = this.props.user[0]
        console.log(user, ' ini user loh')
        return (
            <nav className="navbar navbar-expand-md navbar-dark" style={backNav} >
                <a className="navbar-brand abs" style={{color:'black'}} href="#">
                    {`${user.name.first.charAt(0).toUpperCase() + user.name.first.slice(1)}
                    ${user.name.last.charAt(0).toUpperCase() + user.name.last.slice(1)}`} </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="collapsingNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" style={{color:'black'}}>About</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" style={{color:'black'}}>Resume</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" style={{color:'black'}}>Education</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" style={{color:'black'}}>Portofolio</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar