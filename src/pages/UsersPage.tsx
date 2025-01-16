import UserCard from "../components/UserCard"

export type user = {
  login:{uuid:string},
  name:{first:string, last:string},
  picture:{large:string}
} 

type userlistprops = {
  users:user[]
}

const UsersPage = ({users}:userlistprops) => {
  return (
    <div className="users-list">
      <h1>Users</h1>
      <div className="users-grid">
      {users.map(user =>(
        <UserCard key={user.login.uuid} user={user}></UserCard>
      ))}
      </div>
    </div>
  )
}

export default UsersPage