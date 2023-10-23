import cls from './Header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import LinkedinIcon from 'assets/icons/icons8-linkedin-48.svg';
import { options } from './config/headerOptions';
import HeaderOption from './HeaderOption';

const Header = () => {
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
        {options.map((option) => (
          <HeaderOption option={option} key={option.title} />
        ))}
      </div>
    </header>
  );
};
export default Header;
