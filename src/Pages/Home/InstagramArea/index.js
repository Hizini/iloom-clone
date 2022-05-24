import React, { Component } from 'react'
import './index.scss'

class InstagramArea extends Component {

    renderItems = () => {
        const items = [
            {
                src: 'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/280513917_541328510737606_6503693878957756736_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=UW9P7ODu5V8AX-G5KlP&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9XZNe6j-vkeydAutX_JfRlbVkpC5e7UwvpRsKWnvkWkQ&oe=6291CF66',
                movePath: 'https://www.instagram.com/tv/Cde6LinFIBu/'
            },
            {
                src: 'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/280973527_740063930347553_1359569032736320515_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=T5hyguKqBpYAX_U5GHY&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-pvyInTv59pnJrmjGcplnKX7iEKV4dL-Al7grlmNHH4A&oe=62907ED2',
                movePath: 'https://www.instagram.com/p/CdajmLsvBQh/'
            },
            {
                src: 'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/281845033_5426081007429544_6122958056969853267_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=QapkcxYeDPkAX9L_7PY&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8ocN1HgF5ipaqj3KDBuW7fHHvxx4fbxOitmynyJYq3MQ&oe=62916B69',
                movePath: 'https://www.instagram.com/p/CdXuZozvwCL/'
            },
            {
                src: 'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/282110910_703455914295102_1278631639380186151_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=e6GgJmNlM6sAX8NdZ8N&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8jzFwLgB1wy6WIOzOZ2byk3Leo_isS9wZgIO0XrWZagA&oe=6291CC48',
                movePath: 'https://www.instagram.com/p/CdVHK8dv2ck/'
            },
            {
                src: 'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/283515017_383807513765744_2094116726991937192_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=HmMcQNG-OPwAX9bKIQM&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-RP4YgmJz-dpt7VOyfTz6C3DiSzrXoP8fgflYC0xD7QA&oe=6290D442',
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