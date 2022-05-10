import React, { Component } from 'react'
import './index.scss'

const RECOMMEND_DATA = [
    {
        title: '[일룸] 링키플러스 4단 스마트데스크 세트 1200폭 (멀티선반형)',
        src: 'https://www.iloom.com/upload/product/20211231/_def73f48-49f2-443a-8d93-86644a20817d.jpg',
        price: '743000',
    },
    {
        title: '[일룸] 로이 6단 다리형 책상 세트 1400폭',
        src: '	https://www.iloom.com/upload/product/20211231/_70a2fe47-fbe9-444d-b714-c888f0b64c9c.jpg',
        price: '789000',
    },
    {
        title: '[일룸] 쿠시노 저상형 패밀리 침대 Q+S',
        src: 'https://www.iloom.com/upload/product/20220413/_aad9f81f-4b15-44e4-9c8d-86a4a812d1a3.jpg',
        price: '1096000',
    },
    {
        title: '[일룸] 쿠시노 저상형 침대 (SS)',
        src: 'https://www.iloom.com/upload/product/20220413/_d10e9be8-48f7-4aaa-a3ef-a86a323df75e.jpg',
        price: '525000',
    },
    {
        title: '[일룸] 쿠시노 저상형 침대 (SS) - 데이베드형',
        src: 'https://www.iloom.com/upload/product/20220413/_a73ce869-acb8-47a6-ae9d-1c2fcd822e59.jpg',
        price: '1056000',
    },
    {
        title: '[일룸] 캐스터네츠_Custom 커스텀 캣타워 (H)_가드형(온라인몰 전용)',
        src: 'https://www.iloom.com/upload/product/20201116/_4bc7e03c-81f1-444e-85cf-c1ec53df7224.jpg',
        price: '619000',
    },
]


class RecommendSection extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    renderItems = () => {
        return RECOMMEND_DATA.map(item => {
            return (
                <div className='item'>
                    <div className='img'><img src={item.src} alt=''/></div>
                    <div className='title'>{item.title}</div>
                    <div className='price'>{Number(item.price).toLocaleString()}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='recommend-container'>
                <div className='heading'>고객님을 위한 제품 추천</div>
                <div className='recommend-area'>
                   {this.renderItems()}
                </div>
            </div>
        )
    }
}

export default RecommendSection