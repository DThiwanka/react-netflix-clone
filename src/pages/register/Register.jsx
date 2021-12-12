import './register.scss'
import {useState} from "react";
import {useRef} from "react";

export default function Register() {


    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () =>{
        setEmail(emailRef.current.value)
    };

    const handleFinish = () =>{
        setPassword(passwordRef.current.value)
    };

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
            <button className="loginButton">
                Sign In
            </button>
            </div>
            </div>
            <div className="container">
                <h1>Unlimted Movies,Tv Shows, and more.</h1>
                <h2>Watch anywhere, Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter E mail to create or restart membership 
                </p>{
                    !email ? (
                <div className="input">
                    <input type="email" placeholder="Email Address" ref={emailRef}/>
                    <button className="registerButton" onClick={handleStart}>Get Started</button>
                </div>
                ):<form className="input">
                <input type="password" placeholder="Password" ref={passwordRef}/>
                <button className="registerButton" onClick={handleFinish}>Start</button>
            </form>}
            </div>
        </div>
    )
}
