import { FormEvent, useCallback } from 'react';
import cls from './Login.module.css';
import LinkedinLogo from 'assets/icons/LinkedIn_Logo.svg.png';

const Login = () => {
  const login = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  const register = useCallback(() => {}, []);
  return (
    <div className={cls.login}>
      <img className={cls.logo} src={LinkedinLogo} alt='linkedin logo' />
      <form onSubmit={login} className={cls.form}>
        <input type='text' placeholder='Full name (required if registering)' />
        <input type='text' placeholder='Profile pic URL (optional)' />
        <input type='text' placeholder='Email' />
        <input type='password' placeholder='Password' />
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
