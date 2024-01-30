import React, { useState } from 'react';
import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';


export const PostContent = ({post}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log('first');
  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text As='a'
          size={18}
          tsize={24}
          className={style.linkPost}
          href='#post'
          onClick={() => {
            console.log('Link clicked');
            setIsModalOpen(true);
          }}>
          {post.title}
        </Text>
      </Text>
      <Text As='a'
        className={style.linkAuthor}
        size={12}
        tsize={14}
        color='orange'
        href='#author'>
        {post.author}
      </Text>
      <button className={style.btn}onClick={() => {
        console.log('Click');
      }}>Click</button>
      { isModalOpen && <p >Open</p> }
    </div>
  );
};

PostContent.propTypes = {
  post: PropTypes.object,
};
