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
import {useParams, useNavigate} from 'react-router-dom';


export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const [comments, loading] = useCommentsData(id);
  const mainPost = comments?.[0];
  console.log(comments);
  const postComments = comments?.slice(1);

  const overlayRef = useRef(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const handleClick = (e) => {
    const target = e.target;
    if (target === overlayRef.current) {
      // closeModal();
      navigate(`category/${page}`);
    }
  };

  // const handleKeyDown = (e) => {
  //   if (e.key === 'Escape') {
  //     closeModal();
  //     navigate(`category/${page}`);
  //   }
  // };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    setIsDataLoaded(!loading && !!mainPost);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  if (!isDataLoaded || loading) {
    return (
      <div className={style.overlay} ref={overlayRef}>
        <div className={style.modal}>
          <Preloader/>
        </div>
      </div>
    );
  }

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
            // closeModal();
            navigate(`category/${page}`);
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

// import React, { useEffect, useRef } from 'react';
// import style from './Modal.module.css';
// import PropTypes from 'prop-types';
// import Markdown from 'markdown-to-jsx';
// import ReactDOM from 'react-dom';

// import { ReactComponent as CloseIcon } from './img/close.svg';
// import { useCommentsData } from '../../hooks/useCommentsData.js';
// import Comments from './Comments';
// import FormComment from './FormComment';
// import { Preloader } from '../../UI/Preloader/Preloader.jsx';
// import {useParams, useNavigate} from 'react-router-dom';


// export const Modal = () => {
//   const {id, page} = useParams();
//   const overlayRef = useRef(null);
//   const data = useCommentsData(id);
//   const { status, post, comments } = data;

//   const navigate = useNavigate();

//   const handleClick = (e) => {
//     const target = e.target;
//     if (target === overlayRef.current) {
//       // closeModal();
//       navigate(`category/${page}`);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleClick);
//     return () => {
//       document.removeEventListener('click', handleClick);
//     };
//   }, []);

//   return ReactDOM.createPortal(
//     <div className={style.overlay} ref={overlayRef}>
//       <div className={style.modal}>
//         {status === 'loading' && <Preloader size={100}/>}
//         {status === 'error' && 'error'}
//         {status === 'loaded' && (
//           <>
//             <h2 className={style.title}>
//               {post.title}
//             </h2>
//             <div className={style.content}>
//               <Markdown options={{
//                 overrides: {
//                   a: {
//                     props: {
//                       target: '_blank',
//                     }
//                   }
//                 }
//               }
//               }>
//                 {post.selftext}
//               </Markdown>
//             </div>
//             <p className={style.author}>
//               {post.author}</p>
//             <FormComment/>
//             <Comments comments={comments} />
//             <button className={style.close}
//               onClick={() => {
//                 // closeModal();
//                 navigate(`category/${page}`);
//               }}>
//               <CloseIcon/>
//             </button>
//           </>
//         )}

//       </div>
//     </div>,
//     document.getElementById('modal-root')
//   );
// };

// Modal.propTypes = {
//   post: PropTypes.object,
//   closeModal: PropTypes.func,
//   mainPost: PropTypes.object,
// };

