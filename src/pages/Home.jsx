import React, {Component, Fragment} from 'react'
import Navbar from '../components/Navbar'
import CardImage from '../components/Card/CardImage'
import CardInfo from '../components/Card/CardInfo'
class Home extends Component{
    render() {
        return (
                <Fragment>
                    <Navbar/>
                    <div className="container">
                        <div className="row">
                            <div className="col-6" style={{marginTop:"10%",padding:0}}>
                                <CardImage />
                            </div>
                            <div className="col-6" style={{marginTop:"15%",padding:0}}>
                                <CardInfo />
                            </div>
                        </div>
                    </div>
                </Fragment>
        )
    }
}

export default Home