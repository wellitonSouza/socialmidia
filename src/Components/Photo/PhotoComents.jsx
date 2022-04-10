import React from 'react';
import {UserContext} from '../../UserContext';
import style from './PhotoComents.module.css';
import PhotoComentsForm from './PhotoComentsForm';

export default function PhotoComents(props){
    const [comments, setComments] = React.useState(() => props.comment);
    // pegar o tamanho do elemento 
    // e fazer ele ir para o final quando realizar um comentario
    const commentsSection = React.useRef(null)
    const {login } = React.useContext(UserContext);

    React.useEffect(()=> {
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }, [comments]);

    console.log(props.single);

    return(
        <>
            <ul ref={commentsSection} className={`${style.comments} ${props.single ? style.single : ''}`}>
                {comments && comments.map(comment => <li key={comment.comment_ID}>
                    <b>{comment.comment_author}: {' '}</b>
                    <span>{comment.comment_content}</span>
                </li>) }
            </ul>
            {login && <PhotoComentsForm id={props.id} setComments={setComments} single={props.single} />}
        </>
    )
}