import React, {useMemo} from 'react';
import {useLocation} from 'react-router-dom'

const UseQuery = () => {

    let {search} = useLocation();



    return (

        useMemo(()=> new URLSearchParams(search),[search])
    );
};

export default UseQuery;