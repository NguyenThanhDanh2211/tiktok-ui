import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';

import { useUser } from '~/contexts';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
  ExploreActiveIcon,
  ExploreIcon,
  FollowingActiveIcon,
  FollowingIcon,
  ForYouActiveIcon,
  ForYouIcon,
  FriendsActiveIcon,
  FriendsIcon,
  LIVEActiveIcon,
  LIVEIcon,
  UserIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import FollowingAccounts from '~/components/FollowingAccounts';

const cx = classNames.bind(style);

function Sidebar() {
  const { currentUser } = useUser();

  const profileIcon = currentUser ? (
    <Image
      className={cx('user-avatar')}
      src="https://fb.com/pic"
      alt="Profile"
    />
  ) : (
    <UserIcon className={cx('icon')} />
  );

  return (
    <aside className={cx('wrapper')}>
      <div style={{ marginBottom: '8px' }}>
        <Menu>
          <MenuItem
            title="For You"
            to={config.routes.home}
            icon={<ForYouIcon />}
            activeIcon={<ForYouActiveIcon />}
          />
          <MenuItem
            title="Following"
            to={config.routes.following}
            icon={<FollowingIcon />}
            activeIcon={<FollowingActiveIcon />}
          />
          <MenuItem
            title="Friends"
            to={config.routes.friends}
            icon={<FriendsIcon />}
            activeIcon={<FriendsActiveIcon />}
          />
          <MenuItem
            title="Explore"
            to={config.routes.explore}
            icon={<ExploreIcon />}
            activeIcon={<ExploreActiveIcon />}
          />
          <MenuItem
            title="LIVE"
            to={config.routes.live}
            icon={<LIVEIcon />}
            activeIcon={<LIVEActiveIcon />}
          />
          <MenuItem
            title="Profile"
            to={currentUser ? config.routes.profile : config.routes.signup}
            icon={profileIcon}
            activeIcon={profileIcon}
          />
        </Menu>
      </div>
      <hr className={cx('custom-hr')} />
      <FollowingAccounts label={'Following accounts'} />
      <hr className={cx('custom-hr')} />
    </aside>
  );
}

export default Sidebar;
