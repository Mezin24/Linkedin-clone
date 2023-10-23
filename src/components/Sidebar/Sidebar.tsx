import { Avatar } from '@mui/material';
import cls from './Sidebra.module.css';
import SidebarBg from 'assets/images/sidebar-bg.avif';

const Sidebar = () => {
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
        <Avatar className={cls.avatar} />
        <h2>Pavel Mezentcev</h2>
        <h4>mezencev24@mail.ru</h4>
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
