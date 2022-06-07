import React, { Component } from 'react'
import './index.scss'

class CardSection extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    renderItems = () => {
        const items = [
            {
                src: '/images/home/card1.jpg'
            },
            {
                src: '/images/home/card2.jpg'
            },
            {
                src: '/images/home/card3.jpg'
            },
        ]
        return items.map(item => {
            return (
                <div className='item'>
                    <div className='img'><img src={item.src} alt=''/></div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='card-container'>
                <div className='card-area'>
                   {this.renderItems()}
                </div>
            </div>
        )
    }
}

export default CardSection