import React from "react"
import {ROUTES} from "./utils/consts"
import Shop from "./pages/Shop"
import Offer from "./pages/Offer"
import AboutUs from "./pages/About"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Post from "./pages/Post"
export const PublicRoutes = [
    {
        path: ROUTES.SHOP,
        Component: <Shop/>,
    },
    {
        path:ROUTES.OFFER + '/:id',
        Component: <Offer/>,
    },
    {
        path:ROUTES.POST + '/:id',
        Component: <Post/>,
    },
    {
        path: ROUTES.ABOUT,
        Component: <AboutUs/>,
    },
    {
        path:ROUTES.BLOG,
        Component: <Blog/>,
    },
    {
        path:ROUTES.CONTACT_US,
        Component: <Contact/>,
    },
    {
        path:ROUTES.HOME,
        Component: <Home/>,
    },
    {
        path: "*", //redirect
        Component: <Shop/>,
    },
]