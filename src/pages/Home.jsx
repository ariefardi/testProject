import React, {Component, Fragment} from 'react'
import Navbar from '../components/Navbar'
import CardImage from '../components/Card/CardImage'
import CardInfo from '../components/Card/CardInfo'
import Footer from '../components/Footer'

import {connect} from 'react-redux'
import {fetchDataHandler} from "../Action/pmActions";


class Home extends Component{
    componentDidMount () {
        this.props.fetchDataHandler()
    }
    render() {
        let user = this.props.data
        if (user.length>0) {
            return (
                <Fragment>
                    <Navbar user={user} />
                    <div className="container">
                        <div className="row">
                            <div className="col-6" style={{marginTop:"10%",padding:0}}>
                                <CardImage user={user} />
                            </div>
                            <div className="col-6" style={{marginTop:"13%",padding:0}}>
                                <CardInfo user={user} />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </Fragment>
            )
        }
        else {
            return (
                <div>
                    <h5>Loading.....</h5>
                </div>
            )
        }
    }
}
const mapStateToProps = (state)=>{
    return {
        data: state.pmReducer.users
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchDataHandler: () => dispatch(fetchDataHandler())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home