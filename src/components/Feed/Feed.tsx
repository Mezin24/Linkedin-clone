import cls from './Feed.module.css';
import CreateIcon from '@mui/icons-material/Create';
import { inputOptions } from './config/inputOptions';
import InputOptions from './InputOptions';

const Feed = () => {
  return (
    <div className={cls.feed}>
      <div className={cls.inputContainer}>
        <div className={cls.input}>
          <CreateIcon />
          <form>
            <input type='text' />
            <button type='submit'>Send</button>
          </form>
        </div>
        <div className={cls.inputOptions}>
          {inputOptions.map((option) => (
            <InputOptions item={option} key={option.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Feed;
