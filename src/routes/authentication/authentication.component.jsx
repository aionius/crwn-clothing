// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.comopnent';
import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import './authentication.styles.scss';

const Authentication = () => {
  // useEffect(() => {
  //   async function getResults() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }

  //   getResults();
  // }, []);

  // const logGoogRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  // };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={logGoogRedirectUser}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default Authentication;
