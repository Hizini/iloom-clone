import React, { Component } from 'react'
import './index.scss'

class Notice extends Component {

    renderLists = () => {
        const list = [
            {
                title: '일룸 서비스센터 홈페이지 오픈',
                date: '2021.09.07'
            },
            {
                title: '일룸 소식을 구독하는 방법 A to Z',
                date: '2020.06.05'
            },
            {
                title: '2022년 5월 네이버페이 시스템 점검 일정 안내',
                date: '2022.05.03'
            },
            {
                title: '2022년 6월 무이자 할부 안내',
                date: '2022.06.02'
            }
        ]
        return list.map(list => {
            return (
                <div className='list-area'>
                    <div className='title'>{list.title}</div>
                    <div className='date'>{list.date}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='notice-container'>
                <div className='heading'>NOTICE</div>
                <div className='body'>
                    {this.renderLists()}
                </div>
                <div className='more-btn'>더 보기</div>
            </div>
        )
    }
}

export default Notice