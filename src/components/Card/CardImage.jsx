import React, {Component} from 'react'

class CardImage extends Component {
    render() {
        let user = this.props.user[0]
        let picture = user.picture.medium
        console.log('user dari card image', user)
        return (
            <div className="card" style={{width: '100%'}}>
                <img height="400" src={picture} alt=""/>
            </div>
        )
    }
}

export default CardImage