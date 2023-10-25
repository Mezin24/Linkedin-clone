import CreateIcon from '@mui/icons-material/Create';
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { IPost } from 'types/post';
import { db } from '../../../firebase.config';
import cls from './Feed.module.css';
import InputOptions from './InputOptions';
import Post from './Post';
import { inputOptions } from './config/inputOptions';

const Feed = () => {
  const [input, setInput] = useState('');
  const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
  const [value, loading] = useCollection(q);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const addComment = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await addDoc(collection(db, 'posts'), {
        name: 'John Dow',
        description: 'test post',
        message: input,
        timestamp: serverTimestamp(),
      });
      setInput('');
    },
    [input]
  );

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className={cls.feed}>
      <div className={cls.inputContainer}>
        <div className={cls.input}>
          <CreateIcon />
          <form onSubmit={addComment}>
            <input type='text' value={input} onChange={onChange} />
            <button type='submit'>Send</button>
          </form>
        </div>
        <div className={cls.inputOptions}>
          {inputOptions.map((option) => (
            <InputOptions item={option} key={option.title} />
          ))}
        </div>
      </div>
      {value?.docs.map((post) => (
        <Post key={post.id} post={post.data() as IPost} />
      ))}
    </div>
  );
};
export default Feed;
