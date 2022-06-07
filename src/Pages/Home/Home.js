
import React, { Component } from 'react'
import './Home.scss'
import Navigator from '../Navigator'
import SliderSection from './SliderSection'
import RecommendSection from './RecommendSection'
import CardSection from './CardSection'
import ReviewSection from './ReviewSection'
import InstagramArea from './InstagramArea'
import QuickMenu from './QuickMenu'
import Notice from './Notice'

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
                    <div className='banner-section review'>
                        <img className='logo' src='https://www.iloom.com/img/review/logo_myiloomlf.svg' alt=''/>
                        <div className='text'>일룸으로 달라진 특별한 생활을 만나보세요</div>
                        <div className='more'>
                            <div>더보기</div>
                            <img src='https://www.iloom.com/img/front/btn/arrow_r_black.svg' alt=''/>
                        </div>
                    </div>
                    <ReviewSection />
                    <InstagramArea />
                    <QuickMenu />
                    <Notice />
                </div>
            </div>
        )
    }
}

export default Home