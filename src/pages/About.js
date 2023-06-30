import React from "react";
import style from "../style/pages/About.module.scss";
import housePng from "../static/pictures/house.png"
import blogPng from "../static/pictures/blog.png"
import qwestionPng from "../static/pictures/qwestion.png" 
import { Link } from "react-router-dom";
import {ROUTES} from "../utils/consts";
const AboutUs = () => {
    return (
        <>
        <div className={style.container}>
            <img src={housePng}  className={style.house}/>
            <div className={style.infoBlock}>
                <h5>
                    About homefy
                </h5>
                <p>
                    On this site you can find many options for real estate in the Czech Republic, both for office and residential rental.
                </p>
                <div className={style.linkButton}>
                    <Link to={ROUTES.SHOP}>
                        Find House
                    </Link>
                </div>
            </div>
        </div>
        <div className={`${style.container} ${style.alt}`}>
            <div className={style.infoBlock}>
                <h5>
                    We also have a blog
                </h5>
                <p> 
                    Learn about all current events in the field of real estate.
                </p>
                <div className={style.linkButton}>
                    <Link to={ROUTES.BLOG}  >
                        Blog
                    </Link>
                </div>
            </div>
            <img src={blogPng} className={style.blog}/>
        </div>
        <div className={style.container}>
            <img src={qwestionPng} className={style.qwestion}/>
            <div className={style.infoBlock}>
                <h5>
                    Have a questions ?
                </h5>
                <p>
                if you have a question or offer, you can fill out the form and send it, or write to us on social networks.
                </p>
                <div className={style.linkButton}>
                    <Link to={ROUTES.CONTACT_US}  >
                        contact us
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default AboutUs