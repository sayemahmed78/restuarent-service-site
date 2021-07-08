import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../App';



const PrivateRoute = ({children, ...rest}) => {
    const [logginUser] = useContext(UserContext)
    console.log(logginUser.email)
    return (
        <Route
        {...rest}
        render={({ location }) =>
        logginUser.email ? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: location }
                }}
            />
            )
        }
        />
    );
};

export default PrivateRoute;