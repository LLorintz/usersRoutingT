import { user } from "../pages/UsersPage"
import { Link } from "react-router-dom"

type userprops = {
  user:user
}

const UserCard = ({user}:userprops) => {
  return (
    <div className="user-card">
        <img src={user.picture.large} alt="" />
        <p>{user.name.first} {user.name.last}</p>
        <Link to={`/users/${user.login.uuid}`}>View Details</Link>
    </div>
  )
}

export default UserCard