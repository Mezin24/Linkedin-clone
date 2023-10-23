import { Avatar } from '@mui/material';
import cls from './HeaderOption.module.css';
import { HeaderOptionType } from './config/headerOptions';

interface HeaderOptionProps {
  option: HeaderOptionType;
}

const HeaderOption = ({ option }: HeaderOptionProps) => {
  const { Icon, title, avatar } = option;
  return (
    <div className={cls.headerOptions}>
      {Icon && <Icon className={cls.icon} />}
      {avatar && <Avatar src={avatar} className={cls.icon} />}
      <h3 className={cls.title}>{title}</h3>
    </div>
  );
};
export default HeaderOption;
