import React from 'react';
import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import { Routes, Route } from 'react-router-dom';
import Modal from '../Modal';
// import MainPage from './MainPage';


export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        {/* <Route path='/' element={<MainPage />} /> */}
        <Route path='/category/:page/*' element={<List />} />
        <Route path='/category/:page/post/:id' element={<Modal />} />
      </Routes>
    </Layout>
  </main>
);
