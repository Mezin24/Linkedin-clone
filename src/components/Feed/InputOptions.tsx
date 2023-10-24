import { InputOption, InputOptionColor } from './config/inputOptions';
import cls from './InputOptions.module.css';

interface InputOptionProps {
  item: InputOption;
}

const InputOptions = ({ item }: InputOptionProps) => {
  const { Icon, title, color = InputOptionColor.GRAY } = item;
  return (
    <div className={cls.inputOptions}>
      <Icon className={cls[color]} style={{ color }} />
      <p className={cls.title}>{title}</p>
    </div>
  );
};
export default InputOptions;
