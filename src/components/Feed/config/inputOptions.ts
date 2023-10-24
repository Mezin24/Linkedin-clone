import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

export enum InputOptionColor {
  BLUE = '#7085f9',
  ORANGE = '#e7a33e',
  GRAY = '#c0cbcd',
  GREEN = '#7fc15e',
}

export interface InputOption {
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap>;
  color: InputOptionColor;
}

export const inputOptions: InputOption[] = [
  {
    Icon: ImageIcon,
    title: 'photo',
    color: InputOptionColor.BLUE,
  },
  {
    Icon: SubscriptionsIcon,
    title: 'video',
    color: InputOptionColor.ORANGE,
  },
  {
    Icon: EventNoteIcon,
    title: 'event',
    color: InputOptionColor.GRAY,
  },
  {
    Icon: CalendarViewDayIcon,
    title: 'write article',
    color: InputOptionColor.GREEN,
  },
];
