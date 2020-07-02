import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
