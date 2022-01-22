import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {routes} from "../routes/routes";
import {HOME_PAGE} from "../routes/urls";


const AppRoutes = () => {
    return (
        <Switch>
            {
                routes.map(({id,path,component})=>{
                    return <Route key={id} path={path} component={component} exact/>
                })
            }

            <Redirect to={HOME_PAGE} exact/>

        </Switch>
    );
};

export default AppRoutes;