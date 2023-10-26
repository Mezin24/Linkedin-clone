import { FormEvent, useCallback, useState } from 'react';
import cls from './Login.module.css';
import LinkedinLogo from 'assets/icons/LinkedIn_Logo.svg.png';
import { toast } from 'react-toastify';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../../firebase.config';
import { useDispatch } from 'react-redux';
import { userActions } from 'store/user/userSlice';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const login = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(
            userActions.login({
              id: user.uid,
              name: user.displayName || '',
              email: user.email || '',
              photoURL: user.photoURL || '',
            })
          );
          toast.success(
            `${user?.displayName || 'User'} was successfully logged in`
          );
        })
        .catch((error) => {
          const errorMessage = error.message;
          return toast.error(errorMessage);
        });
    },
    [dispatch, email, password]
  );

  const register = useCallback(async () => {
    if (!name) {
      return toast.error('Name is required');
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      dispatch(
        userActions.login({
          id: user.uid,
          name: name,
          email: user.email || '',
          photoURL: profilePic,
        })
      );

      await updateProfile(user, {
        displayName: name,
        photoURL: profilePic,
      });
      toast.success(`${name} was successfully registered`);
    } catch (error) {
      return toast.error('Some problems with registration');
    }
  }, [dispatch, email, name, password, profilePic]);

  return (
    <div className={cls.login}>
      <img className={cls.logo} src={LinkedinLogo} alt='linkedin logo' />
      <form onSubmit={login} className={cls.form}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Full name (required if registering)'
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type='text'
          placeholder='Profile pic URL (optional)'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='text'
          placeholder='Email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
        />
        <button type='submit' className={cls.sendBtn}>
          Send
        </button>
      </form>
      <p>
        Not a member?{' '}
        <button onClick={register} className={cls.register}>
          Register now
        </button>
      </p>
    </div>
  );
};
export default Login;
