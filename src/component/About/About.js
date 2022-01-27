import React from 'react';
import aboutImg from '../../img/about.jpg'
import './About.css'

function About() {
  return <div className='about component__space'>
     <div className='container'>
         <div className='row'>
        <div className='col__2'>
        <img src={aboutImg} className='about__img'/>
        </div>

        <div className='col__2'>
        <h1 className='about__heading'>
          About me
        </h1>

        <div className='about__meta'>
        <p className='about__text p__color'>
          I've been working in javascript since one year
        </p>

        <div className='about__button d__flex align__items__center'>
      <a href='#'><button className='about btn pointer'>Download Cv</button></a>
      <a href='#'><button className='about btn pointer'>Hire me</button></a>
        </div>
        </div>
        </div>
         </div>
     </div>
  </div>;
}

export default About;
