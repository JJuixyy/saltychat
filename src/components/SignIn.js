import {auth} from '../services/firebase'

const SignIn = () => {
   const signInWithGoogle = () => {
       const provider = new auth.GoogleAuthProvider();
       auth().signInWithPopup(provider)
   }
    return (
            <button className="btnSignIn" onClick={signInWithGoogle}>Sign in with Google</button>
    )
}

export default SignIn
