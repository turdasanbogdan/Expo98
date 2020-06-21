import React, {Component} from 'react';
import Info from './resumeInfo';

class Resume extends Component {
  state = {  }
  render() { 
    return ( 
      <div className = "container-fluid mx-auto about-panel" >
      <hr/>
     <div class = "row flex-fill ml-0"> 
      <div className = "col-md-4 ml-0 col-left">
        <div className = "text-center">
        <img className = "img-fluid myPhoto" src = "https://media-exp1.licdn.com/dms/image/C5603AQFNsDDJf9UW6w/profile-displayphoto-shrink_200_200/0?e=1597881600&v=beta&t=fL5j4b3nT13t1033uV64jO-t0K4Gf7HQY0x628rWLAs"/>
         </div>
        <h2 style = {{ paddingTop: '2cm'}} className = "text-center">Turdășan Bogdan</h2>
        <h4 style = {{ paddingTop: '2cm'}} className = "text-center"> Male | 16 Sep 1998 | Romanian</h4>
        <h3 style = {{ paddingTop: '3cm'}}>Student @ UPT</h3>
        <hr style = {{ bordertop: '3px solid black', width: '100%' }}/>
        <p style = {{ paddingTop: '2cm'}}>
          <span style = {{ marginLeft: '1.25em' }}></span> I'm an eager student, passionate about technology and programming and I am looking forward to gather new skills. I previously worked as a junior Scala developer. I have contributed as a backender at the development of a new platform and worked with some interesting technologies like Docker, Aws and Sbt.
          <br/>
          <br/>
          <span style = {{ marginLeft: '1.25em' }}></span> My curiosty pushed me to explore even more, so I started to learn JS, HTML, CSS. I also work with Angular, currently following the 'Full Stack Lab' by IRIAN Solutions at Liga Ac labs.
          <br/>
          <br/>
          <span style = {{ marginLeft: '1.25em' }}></span>I am envolved in a few Mobile Apps projects, being enrolled in the Google Digital Workshop.
          <br/>
          <br/>
          <span style = {{ marginLeft: '1.25em' }}></span>I got a good grasp on Python basics by succesfully completing a few Python courses and exercises.
        </p>

        <h4 style = {{ paddingTop: '3cm'}}>Job-realted skills</h4>
        <hr style = {{ bordertop: '3px solid black', width: '100%' }}/>

        <p style = {{ paddingTop: '2cm'}}>
        <span style = {{ marginLeft: '1.25em' }}></span>
        Enthusiast junior developer, student at Politehnica University of Timisoara. I want to learn more OOP and functional programming . I`m a good learner, curious about all new and challenging technologies. I like programming and teamwork. I`m ready to challenge myself.
        </p>   


      </div>  
      <div class = "col-md-8 col-right">
        <Info/>
      </div>   
     </div> 
    </div>  
     );
  }
}
 
export default Resume;
