import React, {Component} from 'react';
import Card from './projectCard';

class Projects extends Component {
  state = {  }
  render() { 
    return ( 
        <div className = "container mt-5">
          <div className = "row">
            <div className = "col-md-3 col-sm-6 ietm">
              <Card
               linkToGit = "https://github.com/turdasanbogdan/PuffTheMagicDragons"
               cardImageSource = "https://unity3d.com/files/images/ogimg.jpg"
               projectTitle = "Puff The Magic Dragons"
               projectDescription = "Al doilea joc facut de mine in Unity. Jocul presupune gasirea iesirii din 5 labirinturi diferite. "
               publishDate = "15.05.2020"
              />
            </div>
            <div className = "col-md-3 col-sm-6 ietm">
            <Card
               linkToGit = "https://github.com/turdasanbogdan/LTFC_2020-C-code-"
               cardImageSource = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRL9av2I-w5NZJCCu7KMteh-ARy7ZDLuzi5F7arOItn1AZpGV-TBUdeWHaR&usqp=CAU&ec=45668930"
               projectTitle = "AtomC Compiler"
               projectDescription = "Compilator pentru subsetul AtomC, acesta contine : analiza sintactica, de tip, de domeniu, generare de cod, masina virtuala "
               publishDate = "18.05.2020"
              />
              </div> 
              <div className = "col-md-3 col-sm-6 ietm">
            <Card
               linkToGit = "https://github.com/turdasanbogdan/coffee-shop"
               cardImageSource = "https://skywell.software/wp-content/uploads/2019/04/Angular-8-1024x542.jpg"
               projectTitle = "Coffee Shop"
               projectDescription = "Al doilea program facut in Angular, un simplu magzin de cafea, cu optiune de adaugare, stergere cafele si checkout. "
               publishDate = "21.10.2019"
              />
              </div> 
              <div className = "col-md-3 col-sm-6 ietm">
            <Card
               linkToGit = "https://github.com/turdasanbogdan/si-smart-room-1"
               cardImageSource = "https://image.shutterstock.com/image-vector/mobile-house-smart-home-logo-260nw-501842299.jpg"
               projectTitle = "Smart Room"
               projectDescription = "Camera inteligenta de camin, yala electronica actionata de card magnetic, intstalatie de lumina, comandate prin aplicatie "
               publishDate = "28.05.2020"
              />
              </div>
  
            
          </div>  
          <div className = "row mt-4">
            <div className = "col-md-3 col-sm-6 ietm">
              <Card
               linkToGit = "https://github.com/turdasanbogdan/Budget-App"
               cardImageSource = "https://miro.medium.com/max/600/1*qG3OT-9cER8Nt-P7KR3YPw.jpeg"
               projectTitle = "Budget App"
               projectDescription = " Scurt proiect, la care este finalizata doar partea de Css si HTML. "
               publishDate = "15.05.2020"
              />
            </div>
            <div className = "col-md-3 col-sm-6 ietm">
            <Card
               linkToGit = "https://github.com/turdasanbogdan/Snake"
               cardImageSource = "https://tipsmake.com/data/images/why-should-you-learn-python-programming-language-picture-1-iG16ngPIj.jpg"
               projectTitle = "Snake"
               projectDescription = "Primul joc 'mai serios' facut in python pentru testarea cunostintelor "
               publishDate = "18.05.2020"
              />
              </div> 
              <div className = "col-md-3 col-sm-6 ietm">
            <Card
               linkToGit = "https://github.com/turdasanbogdan/Calculator"
               cardImageSource = "https://skywell.software/wp-content/uploads/2019/01/javascript-vs-html-vs-css-1024x683.jpg"
               projectTitle = "Calculator"
               projectDescription = " Mic programel facut pentru a invata cum functioneaza CSS, HTML ,CSS "
               publishDate = "21.10.2019"
              />
              </div> 
              <div className = "col-md-3 col-sm-6 ietm">
            <Card
               linkToGit = "https://github.com/turdasanbogdan/pure-movie-server"
               cardImageSource = "data:image/png;base64,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"
               projectTitle = "Liga Ac labs"
               projectDescription = "Prima mea participare in cadrul Liga Ac Labs, unde am invatat de la oameni din domeniu"
               publishDate = "28.05.2020"
              />
              </div>
  
            
          </div>  
        </div>  
     );
  }
}
 
export default Projects;
