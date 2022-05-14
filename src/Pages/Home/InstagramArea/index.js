import React, { Component } from 'react'
import './index.scss'

class InstagramArea extends Component {

    renderItems = () => {
        const items = [
            {
                src: 'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/280513917_541328510737606_6503693878957756736_n.jpg?_nc_cat=110&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=vDkyE9PKz3sAX_tSw_7&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_SvEMMfDS6T-d8gR1PsSmTJANMf9BAGziaT9Q-IMF9Sg&oe=6283F7A6',
                movePath: 'https://www.instagram.com/tv/Cde6LinFIBu/'
            },
            {
                src: 'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/280273655_1068353417363358_6823321364398367076_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=NogWlJnC2egAX-VGq-d&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-UoaZ0lDTRTkCTSL5ij4rXoi4h49L-3Eg9bCdBYtdjaQ&oe=628340A1',
                movePath: 'https://www.instagram.com/p/CdajmLsvBQh/'
            },
            {
                src: 'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/280176316_1164956201015638_1335133662676070842_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=LPeS62Z4OVEAX_Fr_zE&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8gXC2uYmo6-m4I2P5y8QKXOxVmH_1VLEDSpBPysUK_Sw&oe=62841025',
                movePath: 'https://www.instagram.com/p/CdXuZozvwCL/'
            },
            {
                src: 'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/280384315_1192990924816168_5609485126659171563_n.jpg?_nc_cat=102&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=smzBAf6LPD4AX9fO8mQ&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9nmIT7IcyOQPBh9PvWEAFPKxpuTsoz0KnxyFioWPAhww&oe=62837D65',
                movePath: 'https://www.instagram.com/p/CdVHK8dv2ck/'
            },
            {
                src: 'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/280079980_321444740070293_5890346277793620777_n.jpg?_nc_cat=100&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=YN2mxg9gYoQAX88_UxD&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8TZ4-nbrWkZeWGRKrUpBEemywDOqArbapQpUUmiqvu8g&oe=6283C285',
                movePath: 'https://www.instagram.com/p/CdKRmnYPBJg/'
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