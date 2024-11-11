import {useSelector} from "react-redux";
import { selectAllUsers } from "./usersSlice";
import { Link } from "react-router-dom";

const UserList = () => { // this is a component that displays a list of users
    const users = useSelector(selectAllUsers); // useSelector is a hook that allows us to access the state of the store, which is found in the store.js file

    const renderedUsers = users.map(user => ( //render the users with each user linked to their own page
        <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
    ));

    return (
        <section>
            <h2>Users</h2>
            <ul>{renderedUsers}</ul>
        </section>
    )
}

export default UserList