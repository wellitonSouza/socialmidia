import React from "react";
import { Link } from "react-router-dom";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import useFetch from "../../Hooks/userFatch";
import Error from "../Helper/Error";

export default function LoginCreate() {
  const username = useForm();
  const password = useForm("password");
  const email = useForm("email");

  const {userLogin} = React.useContext(UserContext);
  const {loading, error, request} = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = USER_POST({username: username.value, email: email.value, password: password.value});
    
    const {response, json} = await request(url, options);
    if(response.ok) userLogin(username.value, password.value);

  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username}/>
        <Input label="Email" type="email" name="email" {...email}/>
        <Input label="Senha" type="password" name="password" {...password}/>
        {loading? <Button disabled>Cadastreando...</Button> : <Button>Cadastrar</Button>}
        <Error error={error} />
      </form>
    </section>
  );
}
