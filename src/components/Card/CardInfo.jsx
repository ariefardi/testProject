import React, {Component} from 'react'
import './style.css'
class CardInfo extends Component {
    render() {
        return (
            <div>
                <div className="card " style={{width: '30rem'}}>
                    <div className="card-body">
                        <h5 className="card-title"> Rachel</h5>
                        <table>
                            <tr>
                                <td>Developer</td>
                            </tr>
                            <tr>
                                <td>Date of Birth </td>
                                <td>:</td>
                                <td> March 14th, 1984</td>
                            </tr>
                            <tr>
                                <td>Gender </td>
                                <td>:</td>
                                <td> Female</td>
                            </tr>
                            <tr>
                                <td>Phone </td>
                                <td>:</td>
                                <td> 1234567889</td>
                            </tr>
                            <tr>
                                <td>Email </td>
                                <td>:</td>
                                <td> info@mysite.com</td>
                            </tr>
                            <tr>
                                <td>Address </td>
                                <td>:</td>
                                <td> Jalan Pancoran Jalan Pancoran Jalan Pancoran Jalan Pancoran Jalan Pancoran Jalan Pancoran Jalan Pancoran</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardInfo