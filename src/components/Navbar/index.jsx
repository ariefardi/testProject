import React, {Component} from 'react'

const backNav = {
    backgroundColor: 'blue'
}
class Navbar extends  Component {
    render () {
        let user = this.props.user
        console.log(user, ' ini user loh')
        return (
            <nav className="navbar navbar-expand-md navbar-dark" style={backNav} >
                <a className="navbar-brand abs" href="#">Rachel Smith</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="collapsingNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="" data-target="#myModal" data-toggle="modal">About</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Resume</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="//codeply.com">Education</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#myAlert" data-toggle="collapse">Portofolio</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar