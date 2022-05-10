
import React, { Component } from 'react'
import './Home.scss'
import Navigator from '../Navigator'
import SliderSection from './SliderSection'
import RecommendSection from './RecommendSection'
import CardSection from './CardSection'

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
                    <RecommendSection />
                    <div className='banner-section card'>
                        <img src='https://www.iloom.com/img/front/main/main_cardlist_banner.png' alt=''/>
                    </div>
                    <CardSection />
                </div>
            </div>
        )
    }
}

export default Home