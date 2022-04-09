import React from 'react';
import { PHOTO_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';
import style from './FeedModal.module.css';

export default function FeedModal({photo, setModalPhoto}){
    const {data, error, loading, request} = useFetch();

    React.useEffect(() => { 
        const {url, options} = PHOTO_GET(photo.id);
        request(url,options);
    }, [photo, request]);

    function handleOutSideClick(event){
        if(event.target === event.currentTarget){
            setModalPhoto(null);
        }
    }

    return (
        <div className={style.modal} onClick={handleOutSideClick}>
            {error && <Error error={error} /> }
            {loading && <Loading />}
            {data && <PhotoContent data={data}/>}
        </div>
    )
}