import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'

const UserView = () => {
  // const user = useSelector(state => state.users.users.id)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      <h2>List of users - </h2>
      {user.loading && <p>Loading...</p>}
      {!user.loading && user.error ? <p>{user.error}</p> : null}
      {!user.loading && user.users.length ? (
        <div>
          {user.users.map((user, index) => (
            <p key={index}>{user.name}</p>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default UserView
