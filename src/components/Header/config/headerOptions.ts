import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import Avatar from 'assets/images/avatar.jpg';

export interface HeaderOptionType {
  title: string;
  Icon?: OverridableComponent<SvgIconTypeMap>;
  avatar?: string;
}

export const options: HeaderOptionType[] = [
  {
    title: 'home',
    Icon: HomeIcon,
  },
  {
    title: 'my network',
    Icon: SupervisorAccountIcon,
  },
  {
    title: 'jobs',
    Icon: WorkIcon,
  },
  {
    title: 'messaging',
    Icon: MessageIcon,
  },
  {
    title: 'notification',
    Icon: NotificationsIcon,
  },
  {
    title: 'me',
    avatar: Avatar,
  },
];
