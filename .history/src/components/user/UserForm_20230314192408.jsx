import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleForm } from '../../featuries/user/userSlice';

import styles from "../../styles/User.module.css"
import { UserSignupForm } from './UserSignupForm';

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(({ user }) => user)

  const closeForm = () => {
    dispatch(toggleForm(false))
  }

  const 

  return ( showForm 
    ? 
      <>
        <div 
          className={styles.overlay} 
          onClick={closeForm}
        />
        <UserSignupForm closeForm={closeForm} />
      </>
    : <></>
  )
}

export { UserForm }