import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ chidren }) {
  return <div className={cx('wapper')}>{chidren}</div>;
}

export default Wrapper;
