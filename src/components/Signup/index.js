import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'
import bakelihome from '../../images/banner.jpg'
import './Signup.css'

const Signup = (props) => {

    const firebase = useContext(FirebaseContext);

    const data = {
        lastName: '',
        firstName: '',
        adress: '',
        call: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('')
    
    const handleChange = e => {
        setLoginData({...loginData, [e.target.id]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { email, password, lastName, firstName, adress, call } = loginData;
        firebase.signupUser(email, password)
        .then( authUser => {
            return firebase.user(authUser.user.uid).set({
                lastName,
                email,
                firstName,
                call,
                adress
            })
        })
        .then(() => {
            setLoginData({...data});
            props.history.push('/login');
        })
        .catch(error => {
            setError(error);
            setLoginData({...data});
        })
    }

    const { firstName, lastName, call, adress, email, password, confirmPassword } = loginData;

    const button = lastName === '' ||  firstName === '' ||  adress === '' ||  call === '' || email === '' || password === '' || password !== confirmPassword 
    ? <button disabled>Inscription</button> : <button>Inscription</button>
    return (
    <section id="hero">
  
      <div className="nav justify-content-center"  style={{ marginTop:"-75px"}}>
            <div class="col-md-6">  
              <h1 text-white>Bakeli,<span></span></h1>
              <p>Training the best tech talent in Africa</p>
            </div> 
            <div class="col-md-6">
          <div className="flex-fill " style={{color:"white", paddingTop:"30px", marginLeft:"-15px"}}>
          <form className="pt-4 flex-fill px-3" onSubmit={handleSubmit} style={{padding:"-20px", marginTop:"5px"}}>
                    <h4 className="text-center">INSCRIVEZ-VOUS</h4>
                    <p>Bienvenue dans l'aventure Bakeli.Cet espace personnel te permet d'etre informé sur tous nos évenements </p>
                    <p className="text-center text-danger">{error.message}</p>
                    <div className="form-group">
                        <label htmlFor="email">Nom</label>
                        <input 
                            type="text"
                            id="lastName"
                            className="form-control" 
                            autoComplete="off"
                            required
                            value={lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Prenom</label>
                        <input 
                            type="text"
                            id="firstName"
                            className="form-control" 
                            autoComplete="off"
                            required
                            value={firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            className="form-control" 
                            autoComplete="off"
                            required
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Téléphone</label>
                        <input 
                            type="text"
                            id="call"
                            className="form-control" 
                            autoComplete="off"
                            required
                            value={call}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">Adresse</label>
                        <input 
                            type="text"
                            id="adress"
                            className="form-control" 
                            autoComplete="off"
                            required
                            value={adress}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de Passe</label>
                        <input 
                            type="password"
                            id="password"
                            autoComplete="off"
                            className="form-control" 
                            required
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Confirmer le mot de passe</label>
                        <input 
                            type="password"
                            id="confirmPassword"
                            autoComplete="off"
                            className="form-control" 
                            required
                            value={confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <div className="my-2" >{button}</div>
                        <div className="mb-3 mt-2 "><span className="">Déjà un compte?</span><Link to="/" className=" link" style={{color:"rgb(62, 110, 124)"}} >Connectez-vous</Link></div>
                    </div>
                </form>
                </div>
        </div>
      </div>
  </section>




    // gestion erreurs
   /*const errorMsg = error !== '' && <span>{error.message}</span>*/
    /*return (
        <div className="signUpLoginBox">
            <div className="slcontainer">
                <div className="formBoxLeftSignup">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">

                        {errorMsg}

                    <h2>LOGIN</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                            <label htmlFor="pseudo">Nom et Prénom</label>
                                <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required />
                                
                            </div>

                            <div className="inputBox">
                            <label htmlFor="email">Email</label>
                                <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required />
                                
                            </div>

                            <div className="inputBox">
                            <label htmlFor="password">Mot de passe</label>
                                <input onChange={handleChange} value={password} type="password" id="password" autoComplete="off" required />
                                
                            </div>

                            <div className="inputBox">
                            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                                <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required />
                                
                            </div>

                            {btn}
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/Login"></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )*/
    )
}

export default Signup