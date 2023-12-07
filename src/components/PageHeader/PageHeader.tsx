import React, { useEffect } from 'react';
import styles from './PageHeader.module.scss';
import { useLocation } from 'react-router-dom';


import { ReactComponent as Tasks } from '../../common/assets/sidebar-icons/tasks.svg';
import { ReactComponent as Briefcase } from '../../common/assets/sidebar-icons/briefcase-line.svg';
import { ReactComponent as CoinBag } from '../../common/assets/sidebar-icons/coin-bag-line.svg';
import { ReactComponent as Group } from '../../common/assets/sidebar-icons/group-line.svg';
import { ReactComponent as Chat } from '../../common/assets/sidebar-icons/chatbubbles-outline.svg';
import { ReactComponent as Receipt } from '../../common/assets/sidebar-icons/receipt-outline.svg';
import { ReactComponent as Settings } from '../../common/assets/sidebar-icons/settings-line.svg';

import { ReactComponent as LightIcon } from '../../common/assets/sidebar-icons/sun.svg';
import { ReactComponent as DarkIcon } from '../../common/assets/sidebar-icons/moon.svg';
import { ReactComponent as LogOutIcon } from '../../common/assets/sidebar-icons/bx-log-out-circle.svg';

const PageHeader: React.FC = () => {
  const location = useLocation();

  const formatedRouteName = () => {
    const routeWithoutSlash = location.pathname.replace('/', '');
    const formattedRoute = routeWithoutSlash.charAt(0).toUpperCase() + routeWithoutSlash.slice(1);
    return formattedRoute;
  };

  const headerName = formatedRouteName();
  let icon;

  switch (headerName) {
    case 'Tasks':
      icon = <Tasks />;
      break;
    case 'Business':
      icon = <Briefcase />
      break;
    case 'Financials':
      icon = <CoinBag />
      break;
    case 'People':
      icon = <Group />
      break;
    case 'Chat':
      icon = <Chat />
      break;
    case 'Reports':
      icon = <Receipt />
      break;
    case 'Settings':
      icon = <Settings />
      break;
  }


  return <div className={styles.header}>
    <div className={styles.headerInfo}>
      {icon}
      {headerName}
    </div>
  </div>
}

export default PageHeader