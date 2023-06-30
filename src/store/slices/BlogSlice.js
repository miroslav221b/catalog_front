import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/consts"
import axios from "axios";
export const getPostsThunk = createAsyncThunk("blog/getNews", async (page, thunkApi) => {
    console.log(1)
    try {
        const res = await axios({
            method: "get",
            url: `${BASE_URL}/getNews?page=${page}`,
            headers: {},
        })

        return res.data
    } catch (err) {
        console.log(err)
        return thunkApi
    }
})
export const getPostsByIdThunk = createAsyncThunk("blog/getPostsById", async (id, thunkApi) => {
    try {
        const res = await axios(`${BASE_URL}/getNewsById/${id}`)

        return res.data
    } catch (err) {
        console.log(err)
        return thunkApi
    }
})
const blogSlice = createSlice({
    name: "blog",
    initialState: {
       posts:[],
       page:1,
       isPostsLoading:true,
       helperInfo:{
            pageCount:0
       },

       isActiveNewsLoading:true,
       activeNews:{

       }
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },
    }, extraReducers: (builder) => {
        builder.addCase(getPostsThunk.pending, (state, action) => {
            if (state.page === 1) {
                state.posts = []
            }
            state.isPostsLoading = true
        })
        builder.addCase(getPostsThunk.fulfilled, (state, action) => {
            state.isPostsLoading = false
            if (state.page === 1) {
                state.posts = [...action.payload.news]
            } else {
                state.posts.push(...action.payload.news)
            }
            if (action.payload.supportingInformation) {
                state.helperInfo = action.payload.supportingInformation
            }
        })
        builder.addCase(getPostsByIdThunk.pending,(state, action)=>{
            state.isActiveNewsLoading = true
        })
        builder.addCase(getPostsByIdThunk.fulfilled,(state, action)=>{
            state.isActiveNewsLoading = false
            state.activeNews = action.payload
        })
    }
})
export const { setPage } = blogSlice.actions
export default blogSlice.reducer