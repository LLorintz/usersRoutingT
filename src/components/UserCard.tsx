import { user } from "../pages/UsersPage"

type userprops = {
  user:user
}

const UserCard = ({user}:userprops) => {
  return (
    <div className="user-card">
        <img src={user.picture.large} alt="" />
        <p>{user.name.first} {user.name.last}</p>
        <a href="">View Details</a>
    </div>
  )
}

export default UserCard