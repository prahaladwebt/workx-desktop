import React, { useState } from 'react';
import { NavLink, } from 'react-router-dom';
import styles from './Sidebar.module.scss';

import WorkexLogo from '../../common/images/workx.png';
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

type NavLinkRenderProps = {
    isActive: boolean;
    isPending: boolean;
    isTransitioning: boolean;
};

const Sidebar: React.FC = () => {
    const [isDarkMode, setDarkMode] = useState<boolean>(true);

    const getNavLinkStyles = (navlink: NavLinkRenderProps) => {
        return navlink.isActive ? styles.active : ''
    };

    return <div className={styles.sideBar}>
        <div>
            <img src={WorkexLogo} alt="workx-logo" />
            <NavLink className={getNavLinkStyles} to='/tasks'><Tasks /></NavLink>
            <NavLink className={getNavLinkStyles} to='/business'> <Briefcase /></NavLink>
            <NavLink className={getNavLinkStyles} to='/financials'> <CoinBag /></NavLink>
            <NavLink className={getNavLinkStyles} to='/people'> <Group /></NavLink>
            <NavLink className={getNavLinkStyles} to='/chat'> <Chat /></NavLink>
            <NavLink className={getNavLinkStyles} to='/reports'> <Receipt /></NavLink>
            <NavLink className={getNavLinkStyles} to='/settings'> <Settings /></NavLink>
        </div>

        <div>
            <button onClick={() => setDarkMode(!isDarkMode)}>{isDarkMode ? <LightIcon /> : <DarkIcon />}</button>
            <NavLink className={getNavLinkStyles} to='/logout'><LogOutIcon /></NavLink>
        </div>
    </div>
}

export default Sidebar