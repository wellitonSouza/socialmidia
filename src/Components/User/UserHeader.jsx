import React from 'react';
import UserHeaderNave from './UserHeaderNave';
import style from './userHeader.module.css';
import { useLocation } from 'react-router-dom';

export default function UserHeader(){
    const [title, setTitle]= React.useState('');

    const {pathname} = useLocation();

    React.useEffect(() =>{
        switch(pathname){
            case '/conta/estatisticas':
                setTitle('Estatísticas');
                break;
            case '/conta/postar':
                setTitle('Adicionar Foto');
                break;
            default:
                setTitle('Minha Conta');
                break;
        }
    }, [pathname]);

    return(
        <header className={style.header}>
            <h1 className='title'>{title}</h1>
            <UserHeaderNave />
        </header>
    )
}