import React, { useActionState, useState } from "react";

/**
 * useActionState: recibe (nuestraAccion, valorInicial)
 * devuelve:
 *  state: lo que nuestra acción retorna (error o succes)
 *  formAction: función que vinculamos al formulario en <form action={formAction}
 *  isPending: booleano que me dice si la función está trabajando o no.. (automático)
 */



const LoginPage = () => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }
  const [dataForm , setDataForm] = useState({
    email: '',
    password: ''
  })

  // function hadleChange2 (e: React.ChangeEvent<HTMLInputElement>) {
  //   setName(e.target.value)

  // }
  // const [name, setName] = useState("")

  return (
    <div>
      <h2>Formulario</h2>
      <div>
        <h2>Iniciar sesión:</h2>
      </div>
      <p>usuario: admin@gmail.com | user@gmail.com</p>
      <p>password: 1234</p>
      {/* Con formularios en React 19 usaremos action={formAction} */}
      <form>
        <div>
          <label>email</label>
          <input
            type="email"
            name="email" //<-- campo vital para react 19 con formularios
            value={dataForm.email} //<-- valor
            required
            onChange={hadleChange2}

            // disabled={}
          />
          <label>password</label>
          <input
            type="password"
            name="password"
            required
            value={dataForm.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar Formulario</button>
      </form>
    </div>
  );
};

export default LoginPage;
