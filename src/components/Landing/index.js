import React from 'react'
import bakelihome from '../../images/HomeImage.png'
import coach from '../../images/coaching.png'
import diplome from '../../images/diplome.png'
import stage from '../../images/stage.png'
import about from '../../images/about.png'
import mariama from '../../images/mariama.jpeg'
import daouda from '../../images/daouda.jpeg'
import aichetou from '../../images/aichetou.png'
import map from '../../images/map-pin.svg'
import mail from '../../images/mail.svg'
import phone from '../../images/phone.svg'




const Landing = () => {
    return (
        <section>
        
            <section id="hero">
              <div>  
                <h1 style={{color: "black", height: "50px"}} >Rejoignez l'aventure<span></span></h1>
                <h1 style={{color: "black", height: "50px"}} >de Bakeli<span></span></h1>
                <a href="https://www.bakeli.tech/" type="button" className="cta">Commencer</a>
              </div> 

              <ul className="nav justify-content-center">
                 <img src={bakelihome} className="App-logo" width="auto" height="600vh" alt="logo" style={{borderRadius:"70%", marginTop:"5px"}} />
              </ul>
            </section>    

            <section id="services">
            <div class="row text-center">
                <div class="col-md-4 services">
                    <img src={coach} className="services-img"  />
                    <h2 style={{color: "orange", }}>Coaching</h2>
                    <p>Tout au long de la formation, un coach de votre <br />
                    domaine<br />
                    professionnel vous suit de prés.</p>
                </div>

                
                <div class="col-md-4 services">
                   <img src={diplome} className="services-img"   />
                   <h2 style={{color: "orange"}}>Diplôme/Certification</h2>
                   <p>A la fin de la formation vous aurez soit un <br />
                   certificat soit un diplome selon votre <br />
                   durée de formation.</p>
                </div>

                <div class="col-md-4 services">
                  <img src={stage} className="services-img" />
                  <h2 style={{color: "orange"}}>Stage Garanti</h2>
                  <p>Nous vous offrons un stage sur votre <br />
                  filiére à la fin de votre formation.</p>
                </div>
            </div>
            </section>

            <section id="about-us">
                <div>
                    <h3 class="title text-center">QUI SOMMES NOUS ?</h3>
                    <div class="row">
                        <div class="col-md-6 about-us">
                            <h3>Bienvenue à Bakeli<br/>
                            School of<br />
                            Technology
                            </h3>
                            <p>Bakeli est une école de formation en technologie créée par l’entreprise Volkeno dans 4 domaines : Développement Logiciels (web, mobile, desktop, systèmes) Design (infographie, multimédia, photographie, montage, ui/ux) Marketing Digital (community management, seo, rédaction de contenus) Entrepreneuriat dans les technologies (startups, tpe, pme, gestion de projet)</p>
                        </div>
                        <div class="col-md-6">
                        <img class="float-left" src={about} className="about-us-img" />
                        </div>   
                    </div>
                </div>
            </section>

            <section id="testimonials">
                <div class="container">  
                  <h1 class="title text-center">TEMOIGNAGES</h1>	
                    <div class="row offset-1">
                        <div class="col-md-4 testimonials">
	                       <p></p>
                           <img src={mariama} className="testimonials" width="100px" height="100px" border-radius="40px 40px " margin="0 10px" />
	                        <p><b>Mariama Mbaye</b><br/>Marketing digital</p>
                        </div>
                        <div class="col-md-4 testimonials">
	                       <p></p>
                           <img src={aichetou} className="testimonials" width="100px" height="100px" border-radius="40px 40px " margin="0 10px" />
	                        <p><b>Aichetou Bilal</b><br/>Design</p>
                        </div>
                        <div class="col-md-4 testimonials">
	                       <p></p>
                           <img src={daouda} className="testimonials" width="100px" height="100px" border-radius="40px 40px " margin="0 10px" />
	                        <p><b>Daouda Senghor</b><br/>Développement Web</p>
                        </div>
                    </div>          
                </div> 
                         
            </section>

            <section id='footer'>
                <footer clas="text-white text-lg-start" style={{background:"#0d4641"}}>
                    <div class="p-4">
                        <div class="row">
                            <div class="col-lg-3 col-md-12 mb-4 mb-md-0">
                                <h5 class="text-white pb-3">Bakeli</h5>
                                <p class="text-white">BAKELI est une école de formation professionnelle dans les nouvelles technologies crée par Volkeno.
                                </p>
                            </div>
                            <div class="col-lg-3 col-md-12 mb-4 mb-md-0 offset-1">
                                <h5 class="text-white pb-3">Adresse</h5>
                                   <p class="text-white"><img src={map} className="map-pin" />Hlm Grand Yoff Villa N°241 prés du terminus des bus Dakar Dem Dikk qui vont à l'AIBD Dakar 11500</p>
                                    
                                    
                            </div>
                            <div class="col-lg-3 col-md-12 mb-4 mb-md-0 offset-1">
                                <h5 class="text-white pb-3">Nous suivre</h5>
                                <ul class="list-unstyled">
                                    <li class="text-white pb-3"><img src={mail} className="mail" />
                                        contact@bakeli.tech
                                    </li>
                                    <li class="text-white"><img src={phone} className="phone" />
                                        (+221) 78 546 15 51
                                    </li>
                                </ul>
                                <ul class="list-unstyled grid-reseaux p-2 mb-0">
                                    <li>
                                        <a class="text-white" href="#!">
                                        

                                        </a>
                                    </li>
                                    <li>
                                        <a class="text-white" href="#!">
                                            <svg></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="text-white" href="#!">
                                            <svg></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="text-white" href="#!">
                                            <svg></svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer> 
            </section>

        </section>  
    )
}

export default Landing