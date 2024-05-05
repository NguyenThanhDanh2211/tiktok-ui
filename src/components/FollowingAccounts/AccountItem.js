import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './FollowingAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('account-item')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/109a67568828099bc0a9c345fe8fecbc.jpeg?lk3s=a5d48078&x-expires=1715086800&x-signature=uE0Vy4BO12tFc3uvgJ%2FNthA2%2FoU%3D"
        alt="avt"
      />
      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
          <strong>thdanh</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Thanh Danh</p>
      </div>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
