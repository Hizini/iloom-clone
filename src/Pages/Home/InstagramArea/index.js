import React, { Component } from 'react'
import './index.scss'

class InstagramArea extends Component {

    renderItems = () => {
        const items = [
            {
                src: '/images/home/instagram1.jpg',
                movePath: 'https://www.instagram.com/p/Cef6qZzP4BC/'
            },
            {
                src: '/images/home/instagram2.jpg',
                movePath: 'https://www.instagram.com/p/Cecc-EVP7WS/'
            },
            {
                src: '/images/home/instagram3.jpg',
                movePath: 'https://www.instagram.com/tv/CeV9S_YF2e-/'
            },
            {
                src: '/images/home/instagram4.jpg',
                movePath: 'https://www.instagram.com/p/CeN5FwOPGJV/'
            },
            {
                src: '/images/home/instagram5.jpg',
                movePath: 'https://www.instagram.com/p/CeLNgoFvKVV/'
            }
        ]
        return items.map(item => {
            return (
                <div className='img' onClick={() => window.open(item.movePath, "_blank")}>
                    <img src={item.src} alt=''/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='instagram-container'>
                <div className='heading'>INSTAGRAM</div>
                <div className='des'>@iloom_offical</div>
                <div className='body'>
                    {this.renderItems()}
                </div>
            </div>
        )
    }
}

export default InstagramArea