import Head from 'next/head'
import styles from '@/styles/home.module.css'
import { useEffect, useRef } from 'react';
import { TiHome } from "react-icons/ti";
import { BsPersonFill, BsBookmarkFill } from "react-icons/bs"

const Home = () => {
  const menu = useRef();

  useEffect(() => {
    setTimeout(() => {
      menu.current.classList.remove(`${styles.preload}`);
    }, 400);
  }, [])

  return (
    <>
      <Head>
        <title>Savor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeContainer}>
        <div className={styles.menuContainer}>
          <input type="checkbox" className={styles.hamburgerCheck} name="" id="" />
          <div className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`${styles.menu} ${styles.preload}`} ref={menu}>
            <div className={styles.menuItems}>
              <ul>
                <li><BsBookmarkFill className={`${styles.icon} ${styles.bookmarkIcon}`} /></li>
                <li><BsPersonFill className={`${styles.icon} ${styles.userIcon}`} /></li>
                <li><TiHome className={`${styles.icon} ${styles.homeIcon}`} /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;