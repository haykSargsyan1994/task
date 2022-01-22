import React, {useEffect, useState} from 'react';
import css from './home.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getPhotosThunk} from "../../red/actionCats";
import UseQuery from "../../usequery/usequery";
import {useHistory} from 'react-router-dom'
import {getPicturesThunk} from "../../red/actionPicture";


const Home = () => {

    const category=useSelector(state => state.CategoryReducer.categories)
    const pictures =useSelector(state => state.CatsReducer.pictures)

    console.log(category)
    const dispatch=useDispatch();

    const history =useHistory();

    const [currentPage,setCurrentPage]=useState(1);
    const [limitCats,setLimitCats]=useState(10);
    const [idPats,setIdPats]=useState(1);
    const [pages,setPages]=useState([1,2,3,4,5,6,7,8,9,10]);



    useEffect(()=>{
        dispatch(getPhotosThunk())
    },[]);

    useEffect(()=>{
        dispatch(getPicturesThunk(currentPage, limitCats, idPats))
    },[limitCats, currentPage, idPats]);

    console.log(pictures);


    const query=UseQuery();
    const categoryQueryId=+query.get(`category`);


    return (
        <div>
          <ul className={css.menu}>
              {
                  category.map(({id,name})=>{
                      return <li key={id} onClick={()=>history.push(`/?category=${id}`)}>
                          <span onClick={()=>setIdPats(id)}>
                               {name}
                          </span>

                      </li>
                  })
              }
          </ul>

            <ul className={css.menu2}>
                {
                  pictures.map(el=>{
                      return <li key={el.id}>
                          <img src={el.url} alt=""/>
                      </li>
                  })
                }
            </ul>

            <ul className={css.menu3}>
                {
                    pages.map(el=>{
                        return <li key={el} onClick={()=>setCurrentPage(el)}
                                            className={el===currentPage ? 'active1' : 'link1'}>
                            {el}


                        </li>
                    })
                }
                <div className={css.addCats}>
                    <button onClick={()=>setLimitCats(limitCats+10)}>
                        ADD
                    </button>
                </div>

            </ul>




        </div>
    );
};

export default Home;