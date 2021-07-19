import {useState} from 'react';
import UserApi from '../../api/User';

const Login = (props) => {
    const {handleLoginSuccess} = props;
    const [formData, setFormData] = useState({});

    const handleInput = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleLogin = () => {
        const {userId, userPassword} = formData;
        const user = UserApi.login(userId, userPassword);

        if (user) {
            handleLoginSuccess(user);
        } else {
            alert(`User with name with ${userId} not found`);
        }
    };

    return (
        <div>
            <input placeHolder="UserId" type="text" name="userId" value={formData.userId} onChange={handleInput} />
            <input placeHolder="Password" type="password" name="userPassword" value={formData.userPassword} onChange={handleInput}/>
            <button onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

export default Login;
