import React, {Component} from 'react';


class Home extends Component {
  state = {  }
  render() { 
    return ( 
      
      <div className= "container-fluid home-panel ">
        {/* <hr/> */}
        <div className = "row flex-fill">
          <div className = "col-md-12 p-5">
            <div className = "text-center">
            <img
              className = "pika"
              src ="https://lh3.googleusercontent.com/proxy/1zspCLankAKtH3yCZ_DdMtzW4ckbhZM3CtGi0sOkfRJFkRh4ILkuUJlGeeNMT44wNJrLzRJTOv1OvcsVlY8mIArH4GK-0D4mioQ5gIGGtbOHPAA-8PIwG2cJDb9o"
             
            />
            </div>
          </div>  
        </div>  
        <div className = "row">  
         <div className = "col-md-12 p-2">
          <div className = "text-center">
            <h1 className = " welcome-title">Welcome to Expo '98</h1>
          </div>  
        </div>  
        </div> 
       <div className= "row">
         <div className = "col-md-12 p-5">
           <div className = "text-center fixed-bottom">
             <h4 >Short Portofolio about me, and only me </h4> 
             <h5 >Task 1 from Haufe Test 18.06.2020</h5>
           </div>  
         </div>  
       </div>  
      </div>  
     );
  }
}
 
export default Home;
