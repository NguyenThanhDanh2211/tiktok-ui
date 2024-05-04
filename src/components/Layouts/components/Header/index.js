import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import routesConfig from '~/config/routes';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import {
  DarkmodeIcon,
  FavoritesIcon,
  FeedbackIcon,
  GetcoinIcon,
  InboxIcon,
  KeyboardIcon,
  LanguageIcon,
  LiveCreatorHubIcon,
  LivestudioIcon,
  LogoutIcon,
  MessageIcon,
  SettingIcon,
  UserIcon,
} from '~/components/Icon';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <LiveCreatorHubIcon />,
    title: 'LIVE Creator Hub',
    to: '/live',
  },
  {
    icon: <LanguageIcon />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FeedbackIcon />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <KeyboardIcon />,
    title: 'Keyboard shortcuts',
  },
  {
    icon: <DarkmodeIcon />,
    title: 'Dark mode',
  },
];

function Header() {
  const currentUser = true;

  // Handle logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  const userMenu = [
    {
      icon: <UserIcon />,
      title: 'View profile',
      to: '@buibichphuong',
    },
    {
      icon: <FavoritesIcon />,
      title: 'Favorites',
      to: '/favorite',
    },
    {
      icon: <GetcoinIcon />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <LivestudioIcon />,
      title: 'LIVE Studio',
      to: 'livestudio',
    },
    {
      icon: <SettingIcon />,
      title: 'Setting',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <LogoutIcon />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={routesConfig.home} className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </Link>

        <Search />

        <div className={cx('action')}>
          <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </Button>

          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>4</span>
                </button>
              </Tippy>
            </>
          ) : (
            <Button primary>Log in</Button>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <div>
                <Image
                  className={cx('user-avatar')}
                  src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7a2097efcb5b9944b9ea06c89c838627.jpeg?lk3s=30310797&x-expires=1714554000&x-signature=bN%2FNpFS3k0tNAfWnDrv0QSD7BmQ%3D"
                  alt="Bich Phuong"
                />
              </div>
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
