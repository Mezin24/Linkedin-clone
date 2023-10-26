import { Avatar } from '@mui/material';
import cls from './Post.module.css';
import { IPost } from 'types/post';
import { InputOption, InputOptionColor } from './config/inputOptions';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InputOptions from './InputOptions';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { LegacyRef, forwardRef } from 'react';

interface PostProps {
  post: IPost;
}

const postButtons: InputOption[] = [
  {
    Icon: ThumbUpOffAltIcon,
    title: 'like',
    color: InputOptionColor.GRAY,
  },
  {
    Icon: ChatIcon,
    title: 'comment',
    color: InputOptionColor.GRAY,
  },
  {
    Icon: ShareIcon,
    title: 'share',
    color: InputOptionColor.GRAY,
  },
  {
    Icon: SendIcon,
    title: 'send',
    color: InputOptionColor.GRAY,
  },
];

const Post = forwardRef(({ post }: PostProps, ref: LegacyRef<HTMLElement>) => {
  const { description, message, name, photoUrl } = post;
  return (
    <article ref={ref} className={cls.post}>
      <div className={cls.header}>
        <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>
        <div className={cls.info}>
          <h2 className={cls.name}>{name}</h2>
          <p className={cls.descr}>{description}</p>
        </div>
      </div>
      <div className={cls.body}>{message}</div>
      <div className={cls.buttons}>
        {postButtons.map((btn) => (
          <InputOptions key={btn.title} item={btn} />
        ))}
      </div>
    </article>
  );
});
export default Post;
