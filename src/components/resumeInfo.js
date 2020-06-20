import React, {Component} from 'react';

class Info extends Component {
    state = {  }
    render() { 
        return ( 
            
            
            <div className = "container-fluid">
            <h1 style= {{ color: 'white', paddingTop: '2cm', paddingLeft: '1cm' }} > Education and trainning</h1>  
            <div className = "row">
                <div className = "col md-4" style= {{ color: 'white', paddingTop: '2cm', paddingLeft: '2cm' }}>
                    <p >2013-2017</p>
                </div>   
                <div className = "col md-8" style= {{ color: 'white', paddingTop: '2cm', paddingLeft: '2cm' }}>
                    <h4>High school diploma</h4>
                    <h5 style = {{paddingTop: '0.5cm'}}>Theoretical High School " Aurel Vlaicu" Orastie, Orastie (Romania)</h5>
                    <h5 style = {{paddingTop: '0.5cm'}}>Finished Math-Info, intensive English Profile</h5>


                </div>    
            </div>  
            <div className = "row">
                <div className = "col md-4" style= {{ color: 'white', paddingTop: '2cm', paddingLeft: '2cm' }}>
                    <p >2017-Present</p>
                </div>   
                <div className = "col md-8" style= {{ color: 'white', paddingTop: '2cm', paddingLeft: '2cm' }}>
                    <h4>Politehnica University of Timisoara, Timisoara (Romania)</h4>
                    <h5 style = {{paddingTop: '0.5cm'}}>3rd year at Computer and Information Sciences section.</h5>
                </div>    
            </div>  
            <div className = "row pb-5">
                <div className = "col md-4" style= {{ color: 'white', paddingTop: '2cm', paddingLeft: '2cm' }}>
                    <p >2Mar 2019–May 2019</p>
                </div>   
                <div className = "col md-8" style= {{ color: 'white', paddingTop: '2cm', paddingLeft: '2cm' }}>
                    <h4>BusyMachines, Timisoara (Romania)</h4>
                    <h5 style = {{paddingTop: '0.5cm'}}>I took part at Scala lab organized by Liga Ac Labs at BusyMachines.</h5>
                </div>    
            </div>  

            <hr style = {{ borderTop: '3px dotted red', width: '100%' }}/>
            
            <h1 style= {{ color: 'white', paddingTop: '2cm', paddingLeft: '1cm' }} > Digital Skills</h1>  
            <div className = "row">
                <div className = "col md-4" style= {{ color: 'white', paddingTop: '2cm', paddingLeft: '2cm' }}>
                    <p >Java Programming</p>
                </div>   
                <div className = "col md-8" style= {{ color: 'white', paddingTop: '2cm', paddingLeft: '2cm' }}>
                    <span className="fa fa-star " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                    <span className="fa fa-star " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                    <span className="fa fa-star " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                    <span className="fa fa-star " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                    <span className="fa fa-star " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                </div>    
            </div>  
            <div className = "row">
                <div className = "col md-4" style= {{ color: 'white', paddingTop: '2cm', paddingLeft: '2cm' }}>
                    <p>C/ C++ Programming</p>
                </div>   
                <div className = "col md-8" style= {{ color: 'white', paddingTop: '2cm', paddingLeft: '2cm' }}>
                    <span className="fa fa-star " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                    <span className="fa fa-star " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                    <span className="fa fa-star " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                    <span className="fa fa-star " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                    <span className="fa fa-star " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                </div>    
            </div>  
             <div className = "row">
                <div className = "col md-4" style= {{ color: 'white', paddingTop: '2cm', paddingLeft: '2cm' }}>
                    <p >HTML | CSS | JS</p>
                </div>   
                <div className = "col md-8" style= {{ color: 'white', paddingTop: '2cm', paddingLeft: '2cm' }}>
                    <span className="fa fa-star " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                    <span className="fa fa-star " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                    <span className="fa fa-star " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                    <span className="fa fa-star " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                    <span className="fa fa-star-half-o " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                </div>    
            </div>  
            <div className = "row pb-4">
                <div className = "col md-4" style= {{ color: 'white', paddingTop: '2cm', paddingLeft: '2cm'}}>
                    <p >Angular | Scala | Linux | Github</p>
                </div>   
                <div className = "col md-8" style= {{ color: 'white', paddingTop: '2cm', paddingLeft: '2cm' }}>
                    <span className="fa fa-star " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                    <span className="fa fa-star " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                    <span className="fa fa-star " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                    <span className="fa fa-star " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                    <span className="fa fa-star-half-o " style = {{ color: '#b21f1f', fontSize : '35px' }}></span>
                </div>    
            </div>  


            </div>   
         );
    }
}
 
export default Info;