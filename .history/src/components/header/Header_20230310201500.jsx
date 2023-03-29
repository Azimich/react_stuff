import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../../styles/Header.module.css'
import { ROUTES } from './../../utils/routes';
import logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={} alt="" />
        </Link>
      </div>
    </div>
  )
}

export { Header }