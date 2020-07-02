import authReducer from './authReducer';
// import todoReducer from './todoReducer'; whaterver the project main reducer is called
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    // todo: todoReducer,  
    firestore: firestoreReducer,
    firebase: firebaseReducer

})

export default rootReducer