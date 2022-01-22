import React from 'react';
import {routes} from "../routes/routes";
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div>
            <ul className='menu'>
                {
                    routes.map(({id,name,path})=>{
                        return <li key={id}>
                            <NavLink className='link' activeClassName='active' to={path} exact>
                                {name}
                            </NavLink>
                        </li>
                    })
                }
            </ul>

        </div>
    );
};

export default Header;