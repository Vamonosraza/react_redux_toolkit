import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { increaseCount, getCount } from "../features/posts/postsSlice";

const Header = () => {
    const dispatch = useDispatch(); // 'dispatch' means 'call' to the store so it can change the state
    const count = useSelector(getCount); // this will get the count from the store
    return (
        <header className="Header">
            <h1>Redux Blog</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="post">Post</Link></li>
                    <li><Link to="user">Users</Link></li>
                </ul>
                <button
                    onClick={() => dispatch(increaseCount())} // every time it is clicked it will increase the count because it is dispatching the action to the store.
                >
                    {count}
                </button>
            </nav>
        </header>
    )
}

export default Header