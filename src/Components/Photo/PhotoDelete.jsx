import React from "react";
import style from "./PhotoDelete.module.css";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_DELETE } from '../../api';

export default function PhotoDelete({ id }) {
  const { loading, request } = useFetch();

  async function handleDelete(){
    const {url, options} = PHOTO_DELETE(id);
    const {response} = await request(url,options);
    if(response.ok)
      window.location.reload();
    
  }

  return (
    <>
      {loading ? (
        <button disabled className={style.delete}>Deletando</button>
      ) : (
        <button className={style.delete} onClick={handleDelete}>Deletar</button>
      )}
    </>
  );
}
