import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'
import logo from '../../images/logo.png'
import './login.css'

const Login = (props) => {

    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ btn, setBtn] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (password.length > 5 && email !== '') {
            setBtn(true)
        } else if (btn) {
            setBtn(false)
        }
    }, [password, email, btn])

    const handleSubmit = e => {
        e.preventDefault();
        
        firebase.loginUser(email, password)
        .then(user => {
            setEmail('');
            setPassword('');
            props.history.push('/home');
        })
        .catch(error => {
            setError(error);
            setEmail('');
            setPassword('');
        })
    }

    return (
        <div className="row page">
            <div className="col-md-6 login-page justify-content-center">
                <div className="col-xl-9 col-lg-10 col-md-11 col-sm-8 text-center">
                    <h1 class="titre-login-page text-white">Bakeli</h1>
                    <p class="slogan-login-page text-white">Training the best tech talent in<br /> Africa</p>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 d-flex justify-content-center itm-center bg-white">
                <div className="col-xl-7 col-lg-9 col-md-11 col-sm-8 d-flex flex-col">
                <img src={logo} class="logo-connexion m-l-r-auto"    />
                    <div className="form">

                    {error !== '' && <span>{error.message}</span>}
                        
                    <p class="cov">CONNECTEZ-VOUS</p>
                        <form onSubmit={handleSubmit}>
                        

                            <div className="inputBox">
                            <label htmlFor="email"></label>
                                <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Adresse Mail" autoComplete="off" required />
                                
                            </div>

                            <div className="inputBox">
                            <label htmlFor="password"></label>
                                <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Mot de passe" id="password" autoComplete="off" required />
                                
                            </div>

                            {btn ? <button>Connexion</button> : <button disabled>Connexion</button>}

                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/signup">Vous n'avez pas de compte ? Inscrivez-vous ici</Link>
                            <br />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login