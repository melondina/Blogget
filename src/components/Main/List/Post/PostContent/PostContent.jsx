import React, {useContext} from 'react';
import style from './PostContent.module.css';
// import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import { postsContext } from '../../../../../context/postsContext';


export const PostContent = () => {
  const {posts} = useContext(postsContext);
  console.log('postsNew', posts);
  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text As='a'
          size={18}
          tsize={24}
          className={style.linkPost} href='#post'>
          {posts.data.title}
        </Text>
      </Text>
      <Text As='a'
        className={style.linkAuthor}
        size={12}
        tsize={14}
        color='orange'
        href='#author'>
        {posts.data.author}
      </Text>
    </div>
  );
};

// PostContent.propTypes = {
//   author: PropTypes.string,
//   title: PropTypes.string,
// };
