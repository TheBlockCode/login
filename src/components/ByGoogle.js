import React, {Component, component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import {Redirect} from 'react-router-dom'

const firebaseApp = firebase.initializeApp(firebaseConfig)

class Bygoogle extends Component{

    render(){
        const{
            user,
            signOut,
            signInWithGoogle,
        } = this.props

        return(
            <div>

                {
                    user
                    ? <Redirect to = '/Inicio'/>
                    : <Redirect to = '/' />
                }

                {
                    user 
                    ? <button
                    className = "btn btn-primary"
                    onClick = {signOut}>SIGN OUT</button>
                    : <button
                    className = "btn btn-primary"
                    onClick = {signInWithGoogle}>SIGN IN WITH GOOGLE</button>
                }

            </div>
        )
    }

}

const firebaseAppAuth = firebaseApp.auth();

const providers = { 
    googleProvider:new firebase.auth.GoogleAuthProvider(),
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth
})(Bygoogle);