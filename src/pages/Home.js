import React, { useEffect, useState } from "react";
import style from "../style/pages/Home.module.scss"
import house from "../static/pictures/house11.jpg"
import office from "../static/pictures/office.jpg"
import apartment from "../static/pictures/apartment.jpg"
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/consts";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../store/slices/shopSlice";
import { getPostsThunk } from "../store/slices/BlogSlice";
import { gmtToString } from "../utils/GmtToString";
import NoImgLoader from "../UI/loader/NoImgLoader"
import BlogPost from "../components/BlogPost";
const Home = () => {
    const dispatch = useDispatch()

    const blog = useSelector((state) => {
        return state.blog
    })

    const [searchInput, setSearchInput] = useState("")

    useEffect(()=>{
        dispatch(getPostsThunk(blog.page))
    },[blog.page])

    return (
        <>
        
            <div className={style.searchBlock}>
                <h1 className={style.title}>homefy</h1>
                <div className={style.search}>
                    <input
                            type={"text"}
                            value={searchInput}
                            onChange={(e) => { setSearchInput(e.target.value) }}
                            placeholder={"Search"}
                            className={style.searchInput}

                        />
                            <Link
                                type={"text"}
                                onClick={()=>{
                                    dispatch(setFilters({"search": searchInput, "page": 1 }))
                                }}
                                to={ROUTES.SHOP}
                            >
                                <div  className={style.submit}>  </div>
                            </Link>
                </div>
            </div>
            <div className={style.container}>
            <h2 className={style.TitleBlock}>Offers</h2>
            <div className={style.catalogBlock}>
                <div className={style.catalogBlockCard}>
                    <img src={house} className={style.catalogBlockImg}/>
                    <p className={style.catalogBlockDescription}>Сheck house offers in our catalog</p>
                    <Link 
                    className={style.catalogBlockLink}
                    to={ROUTES.SHOP} onClick={()=>{
                        dispatch(setFilters({page:1,type:"House"}))
                    }}>Houses</Link>
                </div>
                <div className={style.catalogBlockCard}>
                    <img src={office} className={style.catalogBlockImg}/>
                    <p className={style.catalogBlockDescription}>Сheck office offers in our catalog</p>
                    <Link 
                    className={style.catalogBlockLink}
                    to={ROUTES.SHOP} onClick={()=>{
                        dispatch(setFilters({page:1,type:"Сommercial premises"}))
                    }}>Сommercial premises</Link>
                </div>
                <div className={style.catalogBlockCard}>
                    <img src={apartment} className={style.catalogBlockImg}/>
                    <p className={style.catalogBlockDescription}>Сheck apartment offers in our catalog</p>
                    <Link 
                    className={style.catalogBlockLink}
                    to={ROUTES.SHOP} onClick={()=>{
                        dispatch(setFilters({page:1,type:"Apartment"}))
                    }}>Apartments</Link>
                </div>
            </div>
            <h2 className={style.TitleBlock}>News</h2>
            <div className={style.NewsBlock}>
                <NoImgLoader isLoading={blog.posts == true}>
                    {blog.posts.map((item,index)=>{
                        if(item.image && index<=3){
                                return(
                                    <BlogPost 
                                        key={item._id}
                                        id={item._id} 
                                        title={item.title} 
                                        text={item.sub_text}
                                        date={gmtToString(item.time)} 
                                        img={item.image?item.image:null}
                                />
                                
                                )
                        }
                    })}
                    <Link to={ROUTES.BLOG}>
                        <div className={style.seeMorePosts}>
                            see more news
                        </div>
                    </Link>
                </NoImgLoader>
            </div>
        </div>
        </>
    )
}
export default Home