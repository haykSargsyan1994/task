import {HOME_PAGE, PORTFOLIO_PAGE} from "./urls";
import Home from "../components/home/Home";
import Portfolio from "../components/portfolio/Portfolio";


export const routes =[

    {
        id:Math.random(),
        name:'Home',
        path:HOME_PAGE,
        component:Home
    },

    {
        id:Math.random(),
        name:'Portfolio',
        path:PORTFOLIO_PAGE,
        component:Portfolio
    }

];