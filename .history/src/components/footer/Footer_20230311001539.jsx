import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../../styles/Footer.module.css'
import { ROUTES } from '../../utils/routes'
import LOGO from '../../assets/images/logo.svg'


const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>
      <div className={styles.rights}>
        Developed by 
        <a 
          href="#" 
          target="_blank"
          rel="noreferrer"
        >
          Azim
        </a>
      </div>
      <div className={styles.socials}>
        <a 
          href="#" 
          target="_blank"
          rel="noreferrer"
        >
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
        <a 
          href="#" 
          target="_blank"
          rel="noreferrer"
        >
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>
        <a 
          href="#" 
          target="_blank"
          rel="noreferrer"
        >
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#you`} />
          </svg>
        </a>
      </div>
    </section>
  )
}

export { Footer }