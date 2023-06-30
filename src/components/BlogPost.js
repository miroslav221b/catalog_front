import React from 'react';
import style from '../style/components/BlogPost.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/consts';
const BlogPost = ({ title, text, date, img, id }) => {
  return (
    <section className={style.post}>
      <Link to={`${ROUTES.POST}/${id}`}>
        {img ? <img src={img} /> : <></>}
        <div className={style.info}>
          <h5 className={style.title}>{title}</h5>
          <p>{text} ...</p>
          <p className={style.date}>{date}</p>
        </div>
      </Link>
    </section>
  );
};
export default BlogPost;
