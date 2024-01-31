import { useEffect, useState, useContext } from 'react';
import {URL_API} from '../api/const';
import { tokenContext } from '../context/tokenContext.js';


export const useCommentsData = (id) => {
  const [comments, setComments] = useState([]);
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(
        ([
          {
            data: {
              children: [{ data: post }],
            },
          },
          {
            data: {
              children,
            },
          },
        ]) => {
          const comments = children.map(item => item.data);
          setComments([post, comments]);
        },
      )
      .catch((err) => {
        console.error(err);
      });
  }, [token]);

  return [comments];
};


