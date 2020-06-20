import React, {Component} from 'react';


class Contact extends Component {
  state = {  }
  render() { 
    return ( 
      <div className = "container-fluid">
       <div className = "row pt-5">
        <div className = "col md-4" >
          <h1 className = "text-center " style = {{ paddingTop: '7cm', fontSize: '60px' }}>Let`s stay in touch</h1>
        </div>
        <div className = "col md-8 mr-5 pr-5 pb-5">
          <h1 className = "text-center">Available at</h1>
          <hr style = {{ borderTop : '3px dotted black', width: '50%' }}/>
         <div className = "row pt-5">
           <div className = "col md-4">
           <i class="fa fa-facebook-square" style = {{ fontSize: '80px' }}></i>
           </div>
           <div className = "col md-8">
             <h5 style = {{ fontSize: '50px' }}>Turdasan Bogdan</h5>
           </div>
         </div>   
         <div className = "row pt-5">
           <div className = "col md-4">
           <i class="fa fa-phone-square" style = {{ fontSize: '80px' }}></i>
           </div>
           <div className = "col md-8">
             <h5 style = {{ fontSize: '50px' }}>(+40) 71234567</h5>
           </div>
         </div>  
         <div className = "row pt-5">
           <div className = "col md-4">
           <i class="fa fa-envelope-o" style = {{ fontSize: '80px' }}></i>
           </div>
           <div className = "col md-8">
             <h5 style = {{ fontSize: '30px' }}>turdasanbogdan@yahoo.com</h5>
           </div>
         </div> 
         <div className = "row pt-5">
           <div className = "col md-4">
           <i class="fa fa-github-square" style = {{ fontSize: '80px' }}></i>
           </div>
           <div className = "col md-8">
             <h5 style = {{ fontSize: '50px' }}>turdasanbogdan</h5>
           </div>
         </div> 
            
        </div> 
       </div>  
      </div>  
     );
  }
}
 
export default Contact;
