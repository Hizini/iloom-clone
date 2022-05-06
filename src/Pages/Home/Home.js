
import React, { Component } from 'react'
import './Home.scss'
import Navigator from '../Navigator'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <>
                <Navigator />
                <div className='home-container'>

                </div>
            </>
        )
    }
}

export default Home