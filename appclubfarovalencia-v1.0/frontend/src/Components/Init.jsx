import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import logo from "../Assets/Images/favicon.png";
const server = "http://localhost:4000";
function Login(){
    const [messageError, setMessageError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    async function handleSubmit(e){
        e.preventDefault();
        //console.log(email + " " + password);
        //Enviamos los datos del formulario al backend
        const response = await fetch(server + "/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        });
        const data = await response.json();
        console.log(data);
        if(data.messageError){
            setMessageError(data.messageError);
        }
        if (data.messageSuccess){
            localStorage.setItem("username", data.username);
            navigate("/chatrooms");
        }
    }
    return(
        <div className="d-flex row m-0 vh-100 justify-content-center align-items-center"> 
            <form onSubmit={handleSubmit}>
                <div className="div-form">
                    <img src={logo} alt="" width="150"/>
                    <h2 className="text-light fw-bold">Bienvenido a la FaroApp!</h2>
                    <h3 className="text-light fw-bold mb-4">El hogar del club Faro Valencia</h3>
                    <h5 className="text-light mb-3">Introduce tus datos para entrar</h5>
                    <p className="text-form text-start">Email</p>
                    <input className="form-control mb-3" type="email" onChange = {(e) => setEmail(e.target.value)}></input>
                    <p className="text-form text-start">Contraseña</p>
                    <input className="form-control mb-3" type="password" onChange = {(e) => setPassword(e.target.value)}></input>
                    <button className="btn btn-success w-100 mb-3">Acceder</button>
                    {
                        messageError !== "" && (
                            <div className="alert alert-danger mt-3">{messageError}</div>
                        ) 
                    }
                    <span className="text-light">Si no dispones de una cuenta pídesela al padre Carlos</span>
                    <span className="text-light">Hecho por Javier Sánchez, 2025 Todos los derechos reservados©</span>
                </div>
            </form>
            
        </div>
    )
}
export default Login