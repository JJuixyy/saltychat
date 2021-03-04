import React from 'react';
import {auth} from '../services/firebase';

const SignOut = () => {
    return auth().currentUser && (
        <button id="signout" onClick={() => auth().signOut()}>Sign Out</button>
    )
}

export default SignOut
