import { useState } from 'react';
import { useAuth } from '../lib/auth';

export default function Home() {
  const authUser = useAuth();
  const { user, signout, signin } = authUser;

  return (
    <div>
      <p>Welcome to my app</p>
      {!user ? (
        <SignIn signin={signin} />
      ) : (
        <button onClick={() => signout()}>Sign out</button>
      )}
    </div>
  );
}

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await authUser.signup(email, password);
    console.log('sign up successfully');
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>Sign up</p>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='text'
        placeholder='Enter email'
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='password'
        placeholder='Enter email'
      />
      <button type='submit'>Sign up</button>
    </form>
  );
};

const SignIn = ({ signin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    await signin(email, password);
  };

  return (
    <form onSubmit={handleSignIn}>
      <p>Sign In</p>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='text'
        placeholder='Enter email'
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='password'
        placeholder='Enter email'
      />
      <button type='submit'>Log In</button>
    </form>
  );
};
