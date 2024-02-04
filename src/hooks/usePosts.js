import { useEffect, useState } from 'react';
import {URL_API} from '../api/const';
import { useDispatch, useSelector } from 'react-redux';


export const usePosts = () => {
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(({data}) => {
        dispatch(setPosts(data.children));
      })
      .catch((err) => {
        console.error(err);
        dispatch(setPosts([]));
      });
  }, [token]);

  return [posts];
};


