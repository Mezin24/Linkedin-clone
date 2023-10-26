import { Avatar } from '@mui/material';
import cls from './HeaderOption.module.css';
import { HeaderOptionType } from './config/headerOptions';

interface HeaderOptionProps {
  option: HeaderOptionType;
  onClick?: () => void;
}

const HeaderOption = ({ option, onClick }: HeaderOptionProps) => {
  const { Icon, title, avatar } = option;
  return (
    <button onClick={onClick} className={cls.headerOptions}>
      {Icon && <Icon className={cls.icon} />}
      {avatar && <Avatar src={avatar} className={cls.icon} />}
      <h3 className={cls.title}>{title}</h3>
    </button>
  );
};
export default HeaderOption;
