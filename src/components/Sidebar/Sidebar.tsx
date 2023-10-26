import { Avatar } from '@mui/material';
import cls from './Sidebra.module.css';
import SidebarBg from 'assets/images/sidebar-bg.avif';
import { useSelector } from 'react-redux';
import { getUser } from 'store/user/userSelectors';

const Sidebar = () => {
  const user = useSelector(getUser);
  const recentItem = (topic: string) => (
    <div className={cls.recentItem}>
      <span>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className={cls.sidebar}>
      <div className={cls.sidebarTop}>
        <img src={SidebarBg} alt='picture' className={cls.image} />
        <Avatar className={cls.avatar} src={user?.photoURL}>
          {user?.email[0].toUpperCase()}
        </Avatar>
        <h2>{user?.name}</h2>
        <h4>{user?.email}</h4>
      </div>

      <div className={cls.sidebarStats}>
        <div className={cls.sidebarStat}>
          <p>Who viewed you</p>
          <p className={cls.statNumber}>352</p>
        </div>
        <div className={cls.sidebarStat}>
          <p>Views on post</p>
          <p className={cls.statNumber}>294</p>
        </div>
      </div>

      <div className={cls.sidebarBottom}>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  );
};
export default Sidebar;
