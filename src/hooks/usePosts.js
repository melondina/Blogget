import { useEffect, useState, useContext } from 'react';
import {URL_API} from '../api/const';
import { tokenContext } from '../context/tokenContext.js';


export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  const {token} = useContext(tokenContext);

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
        setPosts(data.children);
        console.log('data-chi', data.children);
      })
      .catch((err) => {
        console.error(err);
        setPosts([]);
      });
  }, [token]);

  return [posts];
};


