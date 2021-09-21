import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown,Container,FormControl,Button} from 'react-bootstrap'

export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="black" variant="white">
  <Container>
  <Navbar.Brand href="#home">
      <img class="logo" src="data:image/png;base64,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" />
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="auto">
      <NavDropdown title="Formation" id="collasible-nav-dropdown">
        
        <div class="row">
            <div class ="col-sm-6 col-lg-2">
              <NavDropdown title="Programmation" id="collasible-nav-dropdown">
               <a class="txt-menu-drop-lead">-Développeur web frontend</a><br />
               <a class="txt-menu-drop-lead">-Développeur web backend</a><br />
               <a class="txt-menu-drop-lead">-Développeur mobile</a><br />
               <a class="txt-menu-drop-lead">-Développeur logiciel</a>
              </NavDropdown>
            </div>
            
        </div>

        <div class="row">
        <div class ="col-sm-6 col-lg-2">
              <NavDropdown title="Design" id="collasible-nav-dropdown">
               <a class="txt-menu-drop-lead">-Design d'interfaces utilisateur</a><br />
               <a class="txt-menu-drop-lead">-Design d'expériences utilisateur</a><br />
               <a class="txt-menu-drop-lead">-Design graphique</a><br />
               <a class="txt-menu-drop-lead">-Montage vidéo</a><br />
              </NavDropdown>
            </div>
        </div>    

        <div class="row">
        <div class ="col-sm-6 col-lg-2">
              <NavDropdown title="MARKETING DIGITAL" id="collasible-nav-dropdown">
               <a class="txt-menu-drop-lead">-Design d'interfaces utilisateur</a><br />
               <a class="txt-menu-drop-lead">-Design d'expériences utilisateur</a><br />
               <a class="txt-menu-drop-lead">-Design graphique</a><br />
               <a class="txt-menu-drop-lead">-Montage vidéo</a><br />
              </NavDropdown>
            </div>
        </div> 

        <div class="row">
        <div class ="col-sm-6 col-lg-2">
              <NavDropdown title="GESTION DE PROJET" id="collasible-nav-dropdown">
               <a class="txt-menu-drop-lead">-Scrum Master</a><br />
               <a class="txt-menu-drop-lead">-Product Owner</a><br />
               <a class="txt-menu-drop-lead">-Testeur Logiciel</a><br />
               <a class="txt-menu-drop-lead">-Chef de Projet</a><br />
              </NavDropdown>
            </div>
        </div> 

        <div class="row">
        <div class ="col-sm-6 col-lg-2">
              <NavDropdown title="BUREAUTIQUE" id="collasible-nav-dropdown">
               <a class="txt-menu-drop-lead">-Rédiger son CV</a><br />
               <a class="txt-menu-drop-lead">-Rédiger un rapport de stage</a><br />
               <a class="txt-menu-drop-lead">-Rédiger un compte-rendu</a><br />
               <a class="txt-menu-drop-lead">-Rédiger un projet</a><br />
              </NavDropdown>
            </div>
        </div> 

        <div class="row">
        <div class ="col-sm-6 col-lg-2">
              <NavDropdown title="ANGLAIS" id="collasible-nav-dropdown">
               <a class="txt-menu-drop-lead">-Se présenter en anglais</a><br />
               <a class="txt-menu-drop-lead">-Discuter en Anglais</a><br />
               <a class="txt-menu-drop-lead">-Faire son CV en Anglais</a><br />
               <a class="txt-menu-drop-lead">-Rédiger un mail en Anglais</a><br />
              </NavDropdown>
            </div>
        </div> 
        
    

        </NavDropdown>
        
    </Nav>
    
      
    <div id="navbarNav" class="position-item-navbar">
        <ul class="navbar-nav navbar-right">
            <li class="nav-item position-item con-color">
                <a href="/login">
                    <a class="nav-link cache-responsive" href="/login">Connexion</a>
                </a>
            </li>
            <li class="nav-item position-item con-color">
                <a href="/signup">
                    <a class="nav-link cache-responsive" href="/signup">Inscription</a>
                </a>
            </li>
        </ul>
    </div>
  </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        )
    }
}
    





