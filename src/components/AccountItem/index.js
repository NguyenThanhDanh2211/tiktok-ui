import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7a2097efcb5b9944b9ea06c89c838627.jpeg?lk3s=a5d48078&x-expires=1714478400&x-signature=w9%2FowEHuez4Ag8tSv%2B2g88f8Ahs%3D"
        alt="BichPhuong"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Bich Phuong</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('usename')}>buibichphuongoffical</span>
      </div>
    </div>
  );
}

export default AccountItem;
