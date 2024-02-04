import React, { useRef, useState, useEffect } from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../../store';


export const FormComment = () => {
  const value = useSelector(state => state.comment);
  const dispatch = useDispatch();

  const textFromTextarea = useRef(null);
  const [showTextarea, setShowTextarea] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setShowTextarea(false);
  };

  useEffect(() => {
    if (showTextarea && textFromTextarea.current) {
      textFromTextarea.current.focus();
    }
  }, [showTextarea]);

  const handleButtonClick = () => {
    setShowTextarea(true);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <>
      {!showTextarea && (
        <button onClick={handleButtonClick} className={style.btn}>
          Написать комментарий
        </button>
      )}
      {showTextarea && <form onSubmit={handleSubmit}
        className={style.form}>
        <Text As='h3'
          size={14}
          tsize={18}>
        Имя авторизованного пользователя
        </Text>
        <textarea
          defaultValue={value}
          onChange={handleChange}
          className={style.textarea}></textarea>
        <button className={style.btn}>Отправить</button>
      </form>}
    </>
  );
};
