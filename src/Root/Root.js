import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from '../Pages/Home/Home'

class Root extends Component {
    render() {
        return (
            <>
                <Route exact path='/' component={Home} />
            </>
        )
    }
}

export default Root
