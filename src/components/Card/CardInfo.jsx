import React, {Component} from 'react'
import './style.css'
import moment from 'moment'
class CardInfo extends Component {
    render() {
        let user = this.props.user[0]
        let dateBirth = moment(user.dob.date).format('MMMM Do YYYY')
        console.log('this is date birth', dateBirth)
        return (
            <div>
                <div className="card " style={{width: '30rem'}}>
                    <div className="card-body">
                        <h5 className="card-title"> Rachel</h5>
                        <table>
                            <tbody>
                            <tr>
                                <td>Developer</td>
                            </tr>
                            <tr>
                                <td>Date of Birth </td>
                                <td>:</td>
                                <td> {dateBirth}</td>
                            </tr>
                            <tr>
                                <td>Gender </td>
                                <td>:</td>
                                <td> {user.gender} </td>
                            </tr>
                            <tr>
                                <td>Phone </td>
                                <td>:</td>
                                <td> {user.phone} </td>
                            </tr>
                            <tr>
                                <td>Email </td>
                                <td>:</td>
                                <td> {user.email} </td>
                            </tr>
                            <tr>
                                <td>Address </td>
                                <td>:</td>
                                <td> {`${user.location.street}, ${user.location.city}, ${user.location.state}, ${user.location.postcode}`} </td>
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