import cls from './Header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import LinkedinIcon from 'assets/icons/icons8-linkedin-48.svg';
import { options } from './config/headerOptions';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { userActions } from 'store/user/userSlice';
import { auth } from '../../../firebase.config';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { getUser } from 'store/user/userSelectors';

const Header = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    dispatch(userActions.logout());
    signOut(auth);
    toast.info('User was logged out');
  }, [dispatch]);

  return (
    <header className={cls.header}>
      <div className={cls['left-side']}>
        <img src={LinkedinIcon} alt='linkedin icon' />
        <div className={cls.searchBox}>
          <SearchIcon />
          <input className={cls.search} type='text' placeholder='Search' />
        </div>
      </div>
      <div className={cls['right-side']}>
        {options.map((option) => {
          if (option.avatar) {
            return (
              <HeaderOption
                option={{
                  ...option,
                  avatar: user?.photoURL || user?.email[0] || '',
                }}
                key={option.title}
                onClick={logout}
              />
            );
          }
          return <HeaderOption option={option} key={option.title} />;
        })}
      </div>
    </header>
  );
};
export default Header;
