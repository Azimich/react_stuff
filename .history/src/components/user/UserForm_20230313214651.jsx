import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserSingupForm } from './UserSingupForm';


const UserForm = () => {
  const { showForm } = useSelector(({ user }) => user)

  return (
    <>
      <div className=''></div>
      {showForm ? <UserSingupForm /> : <></>}
    </>
  )
}

export { UserForm }