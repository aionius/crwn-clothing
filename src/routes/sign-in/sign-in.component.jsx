// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
  // useEffect(() => {
  //   async function getResults() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }

  //   getResults();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  // const logGoogRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  // };

  return (
    <div className="sign-in-container">
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
      {/* <button onClick={logGoogRedirectUser}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
