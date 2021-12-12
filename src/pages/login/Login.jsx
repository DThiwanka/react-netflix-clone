import './login.scss'
export default function Login() {

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
            </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign in</h1>
                    <input type="email" placeholder="Email or Phone Number" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton">Sign In</button>
                    <span>New to Netflix?<b>Sign Up now.</b></span>
                    <small>
                        This is protected by Google reCAPTCHA to ensure you're not a bot.<b>Learn More</b>
                    </small>
                </form>
                </div>
        </div>
    )
}
