import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
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
} from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(style);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
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
          to={config.routes.profile}
          icon={
            <Image
              className={cx('user-avatar')}
              src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7a2097efcb5b9944b9ea06c89c838627.jpeg?lk3s=30310797&x-expires=1714554000&x-signature=bN%2FNpFS3k0tNAfWnDrv0QSD7BmQ%3D"
              alt="Bich Phuong"
            />
          }
          activeIcon={
            <Image
              className={cx('user-avatar')}
              src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7a2097efcb5b9944b9ea06c89c838627.jpeg?lk3s=30310797&x-expires=1714554000&x-signature=bN%2FNpFS3k0tNAfWnDrv0QSD7BmQ%3D"
              alt="Bich Phuong"
            />
          }
        />
      </Menu>
    </aside>
  );
}

export default Sidebar;
