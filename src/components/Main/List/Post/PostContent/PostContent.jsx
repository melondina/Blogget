import React, { useState } from 'react';
import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import Modal from '../../../../Modal';


export const PostContent = ({post}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log(post);
  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text As='a'
          size={18}
          tsize={24}
          className={style.linkPost}
          href='#post'
          onClick={() => {
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
      { isModalOpen && <Modal post={post}
        closeModal={() => {
          setIsModalOpen(false);
        } }/> }
    </div>
  );
};

PostContent.propTypes = {
  post: PropTypes.object,
};
