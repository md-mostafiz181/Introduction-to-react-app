import { Link, useNavigate } from "react-router-dom";
import "./Post.css"

const Post = ({post}) => {

    const {id,title,body}=post
    const navigate = useNavigate()

    const handleToShowPostDetails = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className="post">
            
            <h2>{id}</h2>
            <p>{title}</p>
            <p>{body}</p>
            <Link to={`/post/${id}`}><button>Click me to details</button></Link>
            <button onClick={handleToShowPostDetails}>click to show post details</button>
        </div>
    );
};

export default Post;