import {useState} from "react";
import UserApi from "../../api/User/UserApi";

const Users = ({user, handleLogOut}) => {
    const [formData, setFormData] = useState({});

    const handleInput = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddUser = () => {
        // Validate before adding
        UserApi.addUser({...formData});
    };

    return (
        <div>
            <button onClick={handleLogOut}>Sign Out</button>
            {user.isAdmin ? (
                <div>
                    <input
                        placeHolder="First Name"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInput}
                    />
                    <input
                        placeHolder="Last Name"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInput}
                    />
                    <input
                        placeHolder="User Id"
                        type="text"
                        name="userId"
                        value={formData.userId}
                        onChange={handleInput}
                    />
                    <input
                        placeHolder="Password"
                        type="password"
                        name="password"
                        value={formData.userPassword}
                        onChange={handleInput}
                    />
                    <button onClick={handleAddUser}>Add user</button>
                </div>
            ) : (
                <h1>Welcome {user.name}</h1>
            )}
        </div>
    );
};

export default Users;
