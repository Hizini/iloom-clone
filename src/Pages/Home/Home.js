
import React, { Component } from 'react'
import './Home.scss'
import Navigator from '../Navigator'
import SliderSection from './SliderSection'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className='home-root-container'>
                <Navigator />
                <div className='home-container'>
                    <SliderSection />
                </div>
            </div>
        )
    }
}

export default Home