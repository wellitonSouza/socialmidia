import React from "react";

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
  password:{
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:'A senha deve ter 1 caratecer maíusculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteter ',
  },
  number:{
    regex: /^\d+$/,
    message:'Utilize apenas números'
  }
};

export default function useForm(type) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  function validate(info){
    if(type === false)return true;
    if(info.length === 0){
        setError('Preencha o valor');
        return false;
    }else if(types[type] && !types[type].regex.test(info)){
        setError(types[type].message);
        return false;
    }else{
        setError(null)
        return true;
    }
    
  }

  function onChange({ target }) {
    if(error)validate(target.value);
    setValue(target.value);
  }

  return { value, setValue, onChange, error,  validate: () => validate(value), onBlur: () => validate(value) };
}
