import {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Login, Users} from "./components";


function App() {
    const [user, setUser] = useState(null);

    const handleLoginSuccess = (user) => {
        setUser(user);
    };

    useEffect(() => {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const adminUser = {
        userId: 'admin',
        password: 'admin',
        isAdmin: true
      };

      if (!users.length) {
        localStorage.setItem('users', JSON.stringify([adminUser]))
      }

    }, []);

    const handleLogOut = () => {
      setUser(null);
    };

    return (
        <div className="App">
            {!user ? (
                <Login handleLoginSuccess={handleLoginSuccess} />
            ) : (
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <Users user={user} handleLogOut={handleLogOut} />
                        </Route>
                    </Switch>
                </Router>
            )}
        </div>
    );
}

export default App;
