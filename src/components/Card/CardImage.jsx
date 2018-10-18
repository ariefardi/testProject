import React, {Component} from 'react'

class CardImage extends Component {
    render() {
        let user = this.props.user[0]
        let picture = user.picture.medium
        console.log('user dari card image', user)
        return (
                <img height="460" width='570' src={picture} alt=""/>
        )
    }
}

export default CardImage