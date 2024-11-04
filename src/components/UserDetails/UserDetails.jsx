import { useLoaderData, useNavigate } from "react-router-dom";
import "./UserDetails.css"


const UserDetails = () => {
    const user =useLoaderData()
    console.log(user)
    const {name,email,website}=user

    const navigate = useNavigate()
    const handleBack = () =>{
        navigate(-1)
    }
    return (
        <div className="user-details">
            <h4>Show me the details of :{name}</h4>
            <p>Email :{email} </p>
            <p>Website :{website} </p>
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;