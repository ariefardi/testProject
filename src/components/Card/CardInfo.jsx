import React, {Component} from 'react'
import './style.css'
import moment from 'moment'
import GoogleMap from '../GoogleMap'
class CardInfo extends Component {
    render() {
        let user = this.props.user[0]
        let dateBirth = moment(user.dob.date).format('MMMM Do YYYY')
        console.log('this is date birth', dateBirth)
        return (
            <div>
                <div className="card " style={{width: '570px'}}>
                    <div className="card-body">
                        <h3 className="card-title" style={{paddingLeft:8, marginBottom: 0}} >
                            {user.name.first.charAt(0).toUpperCase() + user.name.first.slice(1)} {user.name.last.charAt(0).toUpperCase() + user.name.last.slice(1)} </h3>
                        <table style={{padding:0}} >
                            <tbody>
                            <tr>
                                <td>Developer</td>
                            </tr>
                            <tr>
                                <td style={{paddingTop:0}}>Date of Birth </td>
                                <td style={{paddingTop:0}}>:</td>
                                <td style={{paddingTop:0}}> {dateBirth}</td>
                            </tr>
                            <tr>
                                <td style={{paddingTop:0}}>Gender </td>
                                <td style={{paddingTop:0}}>:</td>
                                <td style={{paddingTop:0}}> {user.gender} </td>
                            </tr>
                            <tr>
                                <td style={{paddingTop:0}}>Phone </td>
                                <td style={{paddingTop:0}}>:</td>
                                <td style={{paddingTop:0}}> {user.phone} </td>
                            </tr>
                            <tr>
                                <td style={{paddingTop:0}}>Email </td>
                                <td style={{paddingTop:0}}>:</td>
                                <td style={{paddingTop:0}}> {user.email} </td>
                            </tr>
                            <tr>
                                <td style={{paddingTop:0}}>Address </td>
                                <td style={{paddingTop:0}}>:</td>
                                <td style={{paddingTop:0}}> {`${user.location.street}, ${user.location.city}, ${user.location.state}, ${user.location.postcode}`} </td>
                            </tr>
                            <tr>
                                <td style={{paddingTop:0}}>Location</td>
                                <td style={{paddingTop:0}}>:</td>
                                <td style={{paddingTop:0}}>
                                    <GoogleMap user={user}/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardInfo