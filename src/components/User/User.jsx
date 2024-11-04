import "./User.css"

const User = ({user}) => {


    const {id,name,phone,email}=user;



    return (
        <div className="user">
            <h3>Name: {name}</h3>
            <h4>Phone : {phone}</h4>
            <h5>Email : {email}</h5>
        </div>
    );
};

export default User;