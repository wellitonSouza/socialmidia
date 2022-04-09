import React from 'react';
import Feed from './Feed/Feed';
import style from './Home.modules.css';

export default function Home(){
    return(
    <section className='container mainContainer'>
        <Feed />
    </section>
    )
}