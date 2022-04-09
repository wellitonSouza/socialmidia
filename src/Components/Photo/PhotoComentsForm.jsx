import React from "react";
import { COMMENT_POST } from "../../api";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import style from './PhotoComentsForm.module.css';

export default function PhotoComentsForm({ id, setComments }) {
  const [comment, setComment] = React.useState("");
  const {request, error } = useFetch();

  async function handleSubmit(event){
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, {comment});
    const { response, json } = await request(url, options);
    if (response.ok) {
        setComment('');
        setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <textarea
        className={style.textarea}
        id="comment"
        name="comment"
        placeholder="Comente.."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={style.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
}
