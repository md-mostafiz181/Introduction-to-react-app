import { Link } from "react-router-dom";
import "./Post.css"

const Post = ({post}) => {

    const {id,title,body}=post
    return (
        <div className="post">
            
            <h2>{id}</h2>
            <p>{title}</p>
            <p>{body}</p>
            <Link to={`/post/${id}`}><button>Click me to details</button></Link>
        </div>
    );
};

export default Post;