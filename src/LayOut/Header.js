import React from "react";
import logo from "../static/icons/logo.svg"
import style from "../style/components/Header.module.scss"
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../utils/consts";
const Header = () => {
    const location = useLocation()
    const pathname = location.pathname
    return (
        <div className={style.container}>
            <div className={style.header}>
                <Link to={ROUTES.SHOP}>
                    <img src={logo} />
                </Link>
                <div className={style.navigation}>
                    <Link to={ROUTES.HOME} className={pathname === ROUTES.HOME ? style.active : ""}>HOME</Link>
                    <Link to={ROUTES.ABOUT} className={pathname === ROUTES.ABOUT ? style.active : ""}>ABOUT US</Link>
                    <Link to={ROUTES.SHOP} className={pathname === ROUTES.SHOP ? style.active : ""}>CATALOG</Link>
                    <Link to={ROUTES.BLOG} className={pathname === ROUTES.BLOG ? style.active : ""}>BLOG</Link>
                    <Link to={ROUTES.CONTACT_US} className={pathname === ROUTES.CONTACT_US ? style.active : ""}>CONTACT US</Link>

                </div>
            </div>
        </div>

    )
}
export default Header