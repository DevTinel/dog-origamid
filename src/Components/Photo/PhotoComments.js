import React, { useRef } from 'react';
import { UserContext } from '../../UserContext';
import { PhotoCommentsForm } from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';
import { useEffect } from 'react';

export const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);
  const commentsSections = useRef(null);

  useEffect(() => {
    commentsSections.current.scrollTop = commentsSections.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSections}
        className={`${styles.comments} ${props.single ? styles.single : ''}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};
