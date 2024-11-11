import { useSelector } from "react-redux";
import { selectUserById } from "./usersSlice";
import { selectAllPosts, selectPostsByUser } from "../posts/postsSlice";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
    const { userId } = useParams(); // we are grabbing the userId from the url in the form of a string
    const user = useSelector(state => selectUserById(state, Number(userId))); // this is a selector that returns the user with the given id

    const postsForUser = useSelector(state => { // we want to display the posts for this user
        const allPosts = selectAllPosts(state);
        return allPosts.filter(post => post.userId === Number(userId)) // find the result by the user id. useSelector will run everytime a an action is dispatched. Forces the component to re-render every time the state changes.
    })

    const postTitles = postsForUser.map(post => ( // link the posts to their own page
        <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
    ))

    return ( // display the user and their posts
        <section>
            <h2>{user.name}</h2>
            <ul>{postTitles}</ul>
        </section>
    )
}

export default UserPage