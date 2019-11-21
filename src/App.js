import React from 'react';
import logo from './logo.svg';
import Header from './Component/Header'
import About from './Component/About'
import Project from './Component/Project'
import Contact from './Component/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">

      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="#page-top">Artine Nguyen</a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
        <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#signup">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Header />
      <About />
      <Project />
      <Contact />
      <footer class="bg-black small text-center text-white-50">
        <div class="container">
          Copyright &copy; by Artine Nguyen with Love
    </div>
      </footer>
    </div>
  );
}

export default App;
