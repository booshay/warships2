import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'
import Notifications from './Notifications';

export class Dashboard extends Component {
    render() {
        const { /*todos,*/ auth, notifications } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        {/* <TodoList delTodo={this.props.delTodo} todos={todos} /> */}
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        notifications: state.firestore.ordered.notifications,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = {

}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'todos', orderBy: ['createdAt', 'desc'] } //replace collection and orderBy as desired
    ])
)(Dashboard)
