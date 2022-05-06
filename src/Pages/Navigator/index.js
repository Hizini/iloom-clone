
import React, { Component } from 'react'
import './index.scss'


class Navigator extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    renderMenu = () => {
        const menu = ['침실', '거실', '주방', '키즈룸', '학생방', '서재', '펫', '시리즈', '아울렛']
        return menu.map(item => {
            return (
                <div className={`item`}>
                    <div>{item}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='navigator-container'>
                <div className='menu-area'>
                    <img src='https://www.iloom.com/img/front/gnb/icon_menu_30px.svg' alt='' />
                    <div className='menu'>
                        {this.renderMenu()}
                    </div>
                </div>
                <div className='logo-area'>
                    <img src='https://www.iloom.com/img/front/gnb/gnb_logo.png' alt='' />
                </div>
                <div className='etc-area'>
                    <div className='item'>로그인</div>
                    <div className='item'>회원가입</div>
                    <div className='item'>주문/배송</div>
                    <div className='item'>고객지원</div>
                    <div className='item'>매장안내</div>
                    <div className='item'><img src='https://www.iloom.com/img/front/gnb/icon_search_30px.svg' alt='' /></div>
                    <div className='item'><img src='https://www.iloom.com/img/front/gnb/icon_cart_30px.svg' alt='' /></div>
                </div>
            </div>
        )
    }
}

export default Navigator