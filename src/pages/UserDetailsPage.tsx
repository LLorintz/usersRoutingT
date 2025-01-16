import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
export type user={
  login:{uuid:string},
  name:{first:string,last:string},
  email:string,
  phone:string,
  location: {city:string, country:string}
  picture:{large:string}
}

type userDetailsProps = {
  users:user[]
}

const UserDetailsPage = ({users}:userDetailsProps) => {
  const {id} = useParams()
  
  const user = users.find(u=>u.login.uuid===id)

  if (!user) {
    return <p>No user</p>
  }

  return (
    <div className="user-details">
      <h1>{user.name.first} {user.name.last}</h1>
      <img src={user.picture.large} alt="" />
      <p>email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Location: {user.location.city}, {user.location.country}</p>
      <Link to='/users'>Back to Users</Link>
    </div>
  )
}

export default UserDetailsPage