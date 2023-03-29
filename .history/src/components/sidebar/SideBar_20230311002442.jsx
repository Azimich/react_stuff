import React from 'react'

import styles from '../../styles/Sidebar.module.css'


const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          <li></li>
        </ul>
      </nav>
    </div>
  )
}

export { SideBar }