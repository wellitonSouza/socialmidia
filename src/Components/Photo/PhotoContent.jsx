import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Image from "../Helper/Image";
import PhotoComent from "./PhotoComents";
import style from "./PhotoContent.module.css";
import PhotoDelete from "./PhotoDelete";

export default function PhotoContent({ data }) {
  const { photo, comments } = data;
  const user = React.useContext(UserContext);
  return (
    <div className={style.photo}>
      <div className={style.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={style.datails}>
        <div>
          <p className={style.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={style.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={style.attibutes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComent id={photo.id} comment={comments} />
    </div>
  );
}
