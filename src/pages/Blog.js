import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsThunk, setPage } from '../store/slices/BlogSlice';
import style from '../style/pages/Blog.module.scss';
import NoImgLoader from '../UI/loader/NoImgLoader';
import Loader from '../UI/loader/Loader';
import { gmtToString } from '../utils/GmtToString';
import BlogPost from '../components/BlogPost';
const Blog = () => {
  const dispatch = useDispatch();

  const blog = useSelector((state) => {
    return state.blog;
  });
  useEffect(() => {
    dispatch(getPostsThunk(blog.page));
  }, [blog.page]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  });

  function scrollHandler(e) {
    console.log();
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      !blog.isPostsLoading
    ) {
      console.log(blog.page);
      console.log(blog.helperInfo.pageCount);
      if (blog.helperInfo.pageCount > blog.page) {
        dispatch(setPage(blog.page + 1));
      }
    }
  }
  console.log(blog.posts);
  return (
    <div className={style.container}>
      <NoImgLoader isLoading={blog.posts == true}>
        {blog.posts.map((item) => {
          console.log(item);
          return (
            <BlogPost
              key={item._id}
              id={item._id}
              title={item.title}
              text={item.sub_text}
              date={gmtToString(item.time)}
              img={item.image ? item.image : null}
            />
          );
        })}
      </NoImgLoader>
      <Loader isLoading={blog.isPostsLoading} />
    </div>
  );
};
export default Blog;
