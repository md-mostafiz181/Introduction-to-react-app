
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {

    const post = useLoaderData()
    const navigate = useNavigate()

    const handleGoBack =()=>{
        navigate(-1)
    }
    return (
        <div>
            <h1>Dynamic post details : {post.id}</h1>
            <button onClick={handleGoBack}> Back to Home</button>
        </div>
    );
};

export default PostDetails;