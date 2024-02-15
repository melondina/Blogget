import React, { useEffect, useRef, useState } from 'react';
import style from './Modal.module.css';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';

import { ReactComponent as CloseIcon } from './img/close.svg';
import { useCommentsData } from '../../hooks/useCommentsData.js';
import Comments from './Comments';
import FormComment from './FormComment';
import { Preloader } from '../../UI/Preloader/Preloader.jsx';


export const Modal = ({post, closeModal}) => {
  const [comments, loading] = useCommentsData(post.id);
  const mainPost = comments?.[0];
  const postComments = comments?.slice(1);

  const overlayRef = useRef(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // const handleClick = (e) => {
  //   const target = e.target;
  //   if (target === overlayRef.current) {
  //     closeModal();
  //   }
  // };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    setIsDataLoaded(!!mainPost);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mainPost]);

  if (!isDataLoaded || loading) {
    return (
      <div className={style.overlay} ref={overlayRef}>
        <div className={style.modal}>
          <Preloader/>
        </div>
      </div>
    );
  }

  // if (error !== '') {
  //   return (
  //     <div className={style.overlay} ref={overlayRef}>
  //       <div className={style.modal}>
  //         <p>Ошибка загрузки...</p>
  //       </div>
  //     </div>
  //   );
  // }

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>
          {mainPost.title}
        </h2>
        <div className={style.content}>
          <Markdown options={{
            overrides: {
              a: {
                props: {
                  target: '_blank',
                }
              }
            }
          }
          }>
            {mainPost.selftext}
          </Markdown>
        </div>
        <p className={style.author}>
          {mainPost.author}</p>
        <FormComment/>
        <Comments comments={postComments[0]} />
        <button className={style.close}
          onClick={() => {
            closeModal();
          }}>
          <CloseIcon/>
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  post: PropTypes.object,
  closeModal: PropTypes.func,
  mainPost: PropTypes.object,
};
