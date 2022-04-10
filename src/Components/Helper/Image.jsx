import React from "react";
import style from "./Image.module.css";

export default function Image({ alt, ...props }) {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    target.style.opacity = 1;
    setSkeleton(false);
  }

  return (
    <div className={style.wrapper}>
      {skeleton && <div className={style.skeleton}></div>}
      <img onLoad={handleLoad} className={style.img} alt={alt} {...props} />
    </div>
  );
}
