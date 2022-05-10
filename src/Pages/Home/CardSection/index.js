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
                src: 'https://cdn.iloom.com/upload/contents/20220323/_4f475cb6-47d2-4208-bb69-305397a6d91c.jpg'
            },
            {
                src: 'https://cdn.iloom.com/upload/contents/20220401/_e6f26110-f564-4d55-9790-46f4227f1428.jpg'
            },
            {
                src: 'https://cdn.iloom.com/upload/contents/20220316/_b657a84d-c3cf-4c5b-8a89-87fb85d950ed.jpg'
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