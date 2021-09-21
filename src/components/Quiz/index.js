import React from 'react'


import logo from '../../images/logo.png'
import './quiz.css'

const Quiz = () => {
  return (
    <html>
    <body>
    <div id="root">
      <div>
        <div class="component-view-evenement">
          <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white box-shadow fixed-top px-lg-5 py-md-3 hight-header">
              <a class="navbar-brand mr-lg-5 mr-0 active" aria-current="page" href="/">
                <img src={logo} className="logo-home" />
              </a>
              <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <div class="no-view-tablette dis-flex itm-center w-full">
                  <div class="pl-xl-5 pl-lg-4 dis-flex pt-lg-0 pt-5 pb-lg-0 pb-5">
                    <p class="welcome-home">Bakeli Network</p>
                    <p class="annee-home">
                      2020
                    </p>
                  </div>
                  
                  <div class="nav navbar-nav navbar-center">
                  <div class="m-auto">
                    <a href="https://www.bakeli.tech/" target="blank">
                      <div class="buttonphoto-visit">
                        <a class="btn-voir my-2 py-2 p-3" href="/link">Article</a>
                      </div>
                    </a>
                  </div>
                  
                  </div>
                  <div class="d-flex my-2"></div>
                  <div class="ml-auto no-view-tablette">
                    <div class="avatar-group dis-flex itm-center">
                      <div class="rs-avatar avatar-rs-custom">
                      
                      </div>
                    <div class="rs-dropdown name-avatar-custom rs-dropdown-placement-bottom-end" role="menu">
                      <ul class="rs-dropdown-menu" role="menu">
                        <a class="dropdown-item-home-dashboard" href="/compte-bakeliste"></a>
                        <li class="rs-dropdown-item">
                          <a class="rs-dropdown-item-content" tabindex="-1"></a>
                        </li>
                        <li class="rs-dropdown-item">
                          <a class="rs-dropdown-item-content" tabindex="-1"></a>
                        </li>
                      </ul>
                      <a class="rs-btn rs-btn-subtle rs-dropdown-toggle" tabindex="0">
                        
                        <span class="rs-dropdown-toggle-caret"></span>
                        <span class="rs-ripple-pond">
                          <span class="rs-ripple"></span>
                        </span>
                      </a>
                    </div>  
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div class="container-fluid fixing-after-home">
            <div class="row">
              <div class="col-lg-2 p-0">
                <div class="container-nav-vertical no-viex-tablette">
                  <div id="v-pills-tabCustom" class="nav-column nav-pills ml-3" role="tablist" aria-orientation="vertical">
                    <a class="nav-link nav-link-side-navbar-custom active" aria-current="page"
                    href="/home">
                      <svg><g></g></svg>
                      Accueil
                    </a>
                    <a class="nav-link nav-link-side-navbar-custom" href="/articles">
                      Articles
                    </a>
                    <a class="nav-link nav-link-side-navbar-custom" href="/formations">
                      Tutoriels
                    </a>
                    <a class="nav-link nav-link-side-navbar-custom" href="/candidature">
                      Candidatures
                    </a>
                    <a class="nav-link nav-link-side-navbar-custom" href="/liste-contenus">
                      Contenus
                    </a>
                    <a class="nav-link nav-link-side-navbar-custom" href="/mes-evenements">
                      Mes évenements
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-llg-10 pt-3">
                <div class="p-b-200">
                  <div class="row page-event">
                    <div class="col-xl-9 col-lg-9 event-page">
                      <div class="row m-b-15">
                        <div class="col m-b-15">
                          <h6 class="h-theme ff-inter fw-600">Evénements</h6>
                        </div>
                        <div class="col dis-flex m-b-15"></div>
                      </div>
                      <div class=" m-b-15 p-b-60">
                        <h5 class="h-theme ff-inter fw-600">Evénement</h5>
                        <br />
                        <h5 class="h-theme ff-inter fw-600">A venir</h5>
                        <div class="avenir">
                          <div class="component-content-event-avenir">
                            <div></div>
                            <div class="container-fluid py-4">
                              <div class="row">
                                
                                <div class="row journee">
                                    <div class="col-xl-4 col-lg-4 journee">Bakeli, HLM Grd Yoff, 241</div>
                                    <div class="col-xl-4 col-lg-4 journee">2 oct. 2021</div>
                                    <div class="col-xl-4 col-lg-4 journee">Journée entiére</div>
                                  </div>
                                  <div class="col-xl-9 col-lg-9 col-md-9 py-3 bg-white">
                                  <h6 class="center">Masterclass Flutter</h6>
                                </div>
                                <div class="col-xl-3 col-lg-3 py-3">
                                  <div class="buttonphoto-visit">
                        <a class="btn-voir my-2 py-2 p-3" href="/link">S'inscrire à l'évenement</a>
                      </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h1></h1>
                        </div>
                        <div>
                          <h5 class="h-theme ff-inter fw-600">Recents</h5>
                          <div class="component-content-event-recent">
                            <div class="container-fluid">
                              <div class="row">
                                <div class="col-xl-9 col-lg-9 col-md-9">
                                  <div class="card my-1 mt-2 content">
                                    <div class="card-body">
                                      <div class="container-fluid">
                                        <div class="row">
                                          <div class="col-xl-8 col-md-6 contenu_texte">
                                            <h5 class="card-title">
                                              <div>
                                                <h6 class="center">Rentrée BAKELI CONAKRY</h6>
                                              </div>
                                              <div>
                                                <span class="descrip">Description</span>
                                              </div>
                                            </h5>
                                            <div class="mb-3">
                                              <p class="card-text">PREINSCRIPTION POUR LA RENTREE BAKELI CONAKRY</p>
                                            </div>
                                            <div>
                                              <span class="descrip">Adresse</span>
                                            </div>
                                            <div>
                                              <span class="cvvv">HLM grand yoff, 241</span>
                                            </div>
                                          </div>
                                          <div class="col-xl-4 col-lg-4 col-md-6 dd">
                                            <div class="mt-1">
                                              <i class="fal fa-clock"></i>
                                            </div>
                                            <div class="">
                                              <div>
                                                <span class="textt">
                                                Il y'a

                                                21 jours
                                                2heures
                                                </span>
                                              </div>
                                              <div>
                                                <span class="textt hh">24 aout 2021</span>
                                              </div>
                                              <div>
                                                <span class="textt">Journée entiére</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-3 col-lg-3">
                                  <div class="buttonphoto">
                                    <a class="btn-voir my-2 py-2 p-3" href="/photo">Voir les photos</a>
                                  </div>
                                  <div class="buttonphoto">
                                    <a class="btn-voir my-2 py-2 p-3" href="/video">Voir les vidéos</a>
                                    <h1>
                                      <span></span>
                                    </h1>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>    
      </div>
    </div>
    </body>
    </html>
  )
}

export default Quiz