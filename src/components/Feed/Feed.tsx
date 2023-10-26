import cls from './Feed.module.css';
import CreateIcon from '@mui/icons-material/Create';
import { inputOptions } from './config/inputOptions';
import InputOptions from './InputOptions';
import Post from './Post';
import {
  ChangeEvent,
  useCallback,
  useState,
  useEffect,
  FormEvent,
} from 'react';
import { IPost } from 'types/post';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../../../firebase.config';
import { useSelector } from 'react-redux';
import { getUser } from 'store/user/userSelectors';
import FlipMove from 'react-flip-move';

const Feed = () => {
  const user = useSelector(getUser);

  const [input, setInput] = useState('');
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const postsData: IPost[] = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        } as IPost;
      });
      setPosts(postsData);

      return () => unsubscribe();
    });
  }, []);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const addComment = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await addDoc(collection(db, 'posts'), {
        name: user?.name,
        photoUrl: user?.photoURL || '',
        description: user?.email,
        message: input,
        timestamp: serverTimestamp(),
      });
      setInput('');
    },
    [input, user]
  );

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
      <FlipMove>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </FlipMove>
    </div>
  );
};
export default Feed;
