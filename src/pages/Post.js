import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {getPostsByIdThunk} from "../store/slices/BlogSlice"
import Loader from "../UI/loader/Loader";
import PostInfo from "../components/PostInfo";
const Post = () => {
    const location = useLocation()
    const postId = location.pathname.split("/")[2]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostsByIdThunk(postId))
    }, [])

    const blog = useSelector((state) => {
        return state.blog
    })
    return (
        <Loader isLoading={blog.isActiveNewsLoading}>
            <PostInfo info={blog.activeNews}/>
        </Loader>
    )
}
export default Post