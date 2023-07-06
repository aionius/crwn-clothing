import React, { useState } from 'react';
import { toast } from 'react-toastify';

import {
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      toast.info('Please enter email or password.');
      return;
    }

    try {
      await signInAuthWithEmailAndPassword(email, password);
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          toast.error('Invalid credentials, please try again.');
          break;
        case 'auth/user-not-found':
          toast.error('Email not found.');
          break;
        default:
          console.log(error);
          break;
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <p>Sign in with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button type="submit" buttonType="inverted">
            Sign In
          </Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
