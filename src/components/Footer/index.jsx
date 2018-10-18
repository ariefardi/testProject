import React, {Component} from 'react'
import './style.css'
class Footer extends  Component {
    render () {
       return (
           <div>
           <section id="footer">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item"><a href="#"><i
                                    className="fa fa-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i
                                    className="fa fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i
                                    className="fa fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i
                                    className="fa fa-google-plus"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank"><i
                                    className="fa fa-envelope"></i></a></li>
                            </ul>
                        </div>
           </section>
           </div>
       )
    }
}

export default Footer