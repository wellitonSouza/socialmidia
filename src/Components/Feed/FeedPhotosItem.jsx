import React from 'react';
import style from './FeedPhotosItem.module.css';


export default function FeedPhotosItem({photo, setModalPhoto}){
    function handleClick(){
        setModalPhoto(photo);
    }

    return( 
        <li className={style.photo} onClick={handleClick}>
            <img src={photo.src} alt={photo.title} />
            <span className={style.visualizacao}>{photo.acessos}</span>
        </li>
    )
}