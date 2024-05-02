import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faEllipsisVertical,
  faPlus,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
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
  SearchIcon,
  SettingIcon,
  UserIcon,
} from '~/components/Icon';
import Image from '~/components/Image';

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
          title: 'Tieng Viet',
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
  const [searchResult, setSearchResult] = useState([]);

  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

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
        <img src={images.logo} alt="Tiktok" />

        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              <SearchIcon />
            </button>
          </div>
        </HeadlessTippy>

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
                  src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7a2097efcb5b9944b9ea06c89c838627.jpeg?lk3s=30310797&x-expires=1714554000&x-signature=bN%2FNpFS3k0tNAfWnDrv0QSD7BmQ%3D-loi"
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
