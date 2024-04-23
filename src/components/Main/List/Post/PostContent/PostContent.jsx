import React from 'react';
import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import { Link, useParams } from 'react-router-dom';


export const PostContent = ({post}) => {
  const {page} = useParams();
  // console.log(post);
  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Link className={style.linkPost}
          to={`/category/${page}/post${post.id}`}>
          <Text
            className={style.linkPost}
            size={18}
            tsize={24}>
            {post.title}
          </Text>
        </Link>
      </Text>
      <Text As='a'
        className={style.linkAuthor}
        size={12}
        tsize={14}
        color='orange'
        href='#author'>
        {post.author}
      </Text>
    </div>
  );
};

PostContent.propTypes = {
  post: PropTypes.object,
};
