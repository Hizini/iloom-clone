import React, { Component } from 'react'
import './index.scss'

const REVIEW_DATA = [
    {
        name: '김희진',
        review: '재밌다.. 클론코딩.. 하핫..❤️❤️',
        score: 5,
        images: [
            {
                path: "https://cdn.iloom.com/upload/review/20220512",
                file: "_befdd8f3-2a36-4406-9558-6c3b2290c521.jpg"
            },
            {
                path: "https://cdn.iloom.com/upload/review/20220512",
                file: "_49769e53-a1c3-4fc9-93ed-8edf5533fbce.jpg"
            },
            {
                path: "https://cdn.iloom.com/upload/review/20220512",
                file: "_a4b85b62-fd95-4ffc-9195-6c1a34b904b3.jpg"
            }
        ],
        imgReview: "https://cdn.iloom.com/upload/review/20220512/_befdd8f3-2a36-4406-9558-6c3b2290c521.jpg",
        product: {
            name: "수납형 옷장 1150폭",
            src: "https://cdn.iloom.com/upload/product/20201209/_51cb65d8-b375-4d59-a272-60cdb93b8333.jpg",
            categoryNm: "키즈룸",
            price: 319000,
            wishCnt: 36
        }
    },
    {
        name: '김희진2',
        review: '나는야 프론트엔드 개발자ㅋㅋ',
        score: 5,
        images: [
            {
                path: "https://cdn.iloom.com/upload/review/20220511",
                file: "_25587a1b-8c59-4e32-9c60-9af7eba1978b.jpg"
            }
        ],
        imgReview: "https://cdn.iloom.com/upload/review/20220511/_25587a1b-8c59-4e32-9c60-9af7eba1978b.jpg",
        product: {
            name: "1200폭 5단 다리형 책상세트(D600)",
            src: 'https://cdn.iloom.com/upload/product/20210217/_1e45f26e-dac9-4f40-9ff2-c0a1638e8e98.jpg',
            categoryNm: "학생방",
            price: 519000,
            wishCnt: 72
        }
    },
    {
        name: '김희진3',
        review: '몰?루',
        score: 2.6,
        images: [
            {
                path: "https://cdn.iloom.com/upload/review/20220503",
                file: "_faa91e7a-3758-4d26-9fe1-cc7fdb12a470.jpg"
            }
        ],
        imgReview: "https://cdn.iloom.com/upload/review/20220503/_faa91e7a-3758-4d26-9fe1-cc7fdb12a470.jpg",
        product: {
            name: "밴쿠버 3인 천연가죽 컴팩트 소파",
            src: 'https://cdn.iloom.com/upload/product/20211122/_c3d6329a-eef0-49b2-a972-27db82f2d6c5.jpg',
            categoryNm: "",
            price: 1690000,
            wishCnt: 17
        }
    },
    {
        name: '김희진4',
        review: '💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛',
        score: 3.5,
        images: [
            {
                path: "https://cdn.iloom.com/upload/review/20220425",
                file: "_76ace751-1622-41ed-9522-f6d269e208fd.jpg"
            },
            {
                path: "https://cdn.iloom.com/upload/review/20220425",
                file: "_b14c3487-6000-4c52-b79f-03663e60e225.jpg"
            }
        ],
        imgReview: "https://cdn.iloom.com/upload/review/20220425/_76ace751-1622-41ed-9522-f6d269e208fd.jpg",
        product: {
            name: "아기 상어 아코",
            src: 'https://cdn.iloom.com/upload/product/20211221/_06f50aee-1375-4022-a328-780e27c3bf95.jpg',
            categoryNm: "키즈룸",
            price: 120000,
            wishCnt: 2
        }
    },
]
class ReviewSection extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }
    renderReviews = () => {
        return REVIEW_DATA.map(review => {
            const starView = review.score * 22;
            return (
                <div className='review-area'>
                    <div className='review'>
                        <img className='review-img' src={review.imgReview} alt='' />
                        <div className='score-box'>
                            <div className="score-area"  style={{ width: starView }}>
                                <img className='score' src='/images/home/star-fill.png' alt='' />
                                <img className='score' src='/images/home/star-fill.png' alt='' />
                                <img className='score' src='/images/home/star-fill.png' alt='' />
                                <img className='score' src='/images/home/star-fill.png' alt='' />
                                <img className='score' src='/images/home/star-fill.png' alt='' />
                            </div>
                            <div className='score-num'>({review.score})</div>
                            <div className='score-back-area'>
                                    <img className='background' src='/images/home/star-empty.png' alt='' />
                                    <img className='background' src='/images/home/star-empty.png' alt='' />
                                    <img className='background' src='/images/home/star-empty.png' alt='' />
                                    <img className='background' src='/images/home/star-empty.png' alt='' />
                                    <img className='background' src='/images/home/star-empty.png' alt='' />
                                </div>
                        </div>
                        <div className='title'>{review.name}님의 일룸생활</div>
                        <div className='content'>{review.review}</div>
                    </div>
                    <div className='product'>
                        <div className='product-img'><img src={review.product.src} alt=''/></div>
                        <div className='product-info'>
                            <div className='name'>{review.product.name}</div>
                            <div className='categoryNm'>{review.product.categoryNm}</div>
                            <div className='price'>{review.product.price}</div>
                        </div>
                        <div className='product-wish'>
                            <div className='wish-cnt'>{review.product.wishCnt}</div>
                            <img src='https://www.iloom.com/img/newImg/icn_likeHrt.svg' alt=''/>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='review-container'>
                <div className='review-wrapper'>
                    {this.renderReviews()}
                </div>
            </div>
        )
    }
}

export default ReviewSection