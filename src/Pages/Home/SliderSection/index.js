import React, { Component } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.scss'


class SliderSection extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleClickPrvBtn = e => {
        e.stopPropagation()
        this.slickRef.slickPrev()
    }

    handleClickNextBtn = e => {
        e.stopPropagation()
        this.slickRef.slickNext()
    }


    render() {
        const setting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
        }
        return (
            <div className='slider-container'>
                <Slider {...setting} ref={ref => this.slickRef = ref}>
                    <div className='slider-area'>
                        <img src='https://cdn.iloom.com/upload/contents/20220322/_635bccf0-fc3e-4a73-9af8-7f5dfb52555f.jpg' alt=''/>
                    </div>
                    <div className='slider-area'>
                        <img src='https://cdn.iloom.com/upload/contents/20220405/_322b2dae-8d01-4474-9185-6e1047ec4248.jpg' alt=''/>
                    </div>
                    <div className='slider-area'>
                        <img src='https://cdn.iloom.com/upload/contents/20220316/_ff5aad2b-0add-4115-a6f6-1e0cb05d1fe6.jpg' alt=''/>
                    </div>
                    <div className='slider-area'>
                        <img src='https://cdn.iloom.com/upload/contents/20220316/_da1f8296-1143-4394-b811-214f35574321.jpg' alt=''/>
                    </div>
                    <div className='slider-area'>
                        <img src='https://cdn.iloom.com/upload/contents/20210820/_f6a275d3-b9d1-4ede-acce-3e0759783895.png' alt=''/>
                    </div>
                </Slider>
                <div className='slider-btn prev' onClick={this.handleClickPrvBtn}>
                    <img className='slider-btn-img' src='https://www.iloom.com/img/front/series/slide_l.png' alt='slider prev btn' />
                </div>
                <div className='slider-btn next' onClick={this.handleClickNextBtn}>
                    <img className='slider-btn-img' src='https://www.iloom.com/img/front/series/slide_r.png' alt='slider next btn' />
                </div>
            </div>
        )
    }
}

export default SliderSection