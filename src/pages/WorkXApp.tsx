import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import Sidebar from '../components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import styles from './WorkXApp.module.scss';
import Settings from './Settings/Settings';

const WorkXApp = () => {
    return <section className={styles.mainWrapper}>
        <Sidebar />
        <div className={styles.innerWrapper}>
            <PageHeader />
            <Routes>
                <Route path='/settings' element={<Settings />} />
            </Routes>
        </div>
    </section>
}

export default WorkXApp;