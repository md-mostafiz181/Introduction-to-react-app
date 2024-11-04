import { Link, useNavigate } from "react-router-dom";
import "./User.css"

const User = ({user}) => {


    const {id,name,phone,email}=user;

    
    const navigate = useNavigate();

    const handleShowDetails = () =>{
        
        navigate(`/user/${id}`)
    }



    return (
        <div className="user">
            <h3>Name: {name}</h3>
            <h4>Phone : {phone}</h4>
            <h5>Email : {email}</h5>
            <Link to={`/user/${id}`}>
            <button>show me details</button>
            
            </Link>

           <button onClick={handleShowDetails}>Click me</button>
        </div>
    );
};

export default User;