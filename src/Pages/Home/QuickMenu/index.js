import React, { Component } from 'react'
import './index.scss'

class QuickMenu extends Component {

    renderMenus = () => {
        const menu = [
            {
                src: 'https://www.iloom.com/img/front/main/quick_menu_consulting.svg',
                title: 'Consulting',
                des: '공간제안 서비스'
            },
            {
                src: 'https://www.iloom.com/img/front/main/quick_menu_store.svg',
                title: 'Store',
                des: '매장안내'
            },
            {
                src: 'https://www.iloom.com/img/front/main/quick_menu_refurb.svg',
                title: 'Refurb',
                des: '전시품 판매'
            }
        ]
        return menu.map(menu => {
            return (
                <div className='menu-area'>
                    <div className='img'>
                        <img src={menu.src} alt='' />
                    </div>
                    <div className='title'>{menu.title}</div>
                    <div className='des'>{menu.des}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='quick-menu-container'>
                <div className='heading'>QUICK MENU</div>
                <div className='body'>
                    {this.renderMenus()}
                </div>
            </div>
        )
    }
}

export default QuickMenu