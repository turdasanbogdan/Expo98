import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Blogs extends Component {
  state = {  }
  render() { 
    return (
      <div className = "container mt-5" style = {{ backgroundColor: 'black'}}>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/GV3HUDMQ-F8/maxresdefault.jpg"
          alt="First slide"
          style = {{ height:'850px',
          width:'100%'}}
        />
        <Carousel.Caption >
          <h3>My favorite time waster</h3>
          <p>Currently at final season of Better Call Saul</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ih1.redbubble.net/image.604709628.0369/flat,550x550,075,f.jpg"
          alt="Seccond slide"
          style = {{ height:'850px',
            width:'100%'}}
        />
        <Carousel.Caption>
          <h3>Second favorite time waster</h3>
          <p>Struggling to get out of silver</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.coindesk.com/wp-content/uploads/2018/11/dark-bitcoin-scaled.jpg"
          alt="Third slide"
          style = {{ height:'850px',
            width:'100%'}}
        />
        <Carousel.Caption>
          <h3>New interest area</h3>
          <p>Interested in blockchain and bitcoin</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/79/03/70/790370043467ab32bd31bc0b1e0a5442.jpg"
          alt="Fourth slide"
          style = {{ height:'850px',
            width:'100%'}}
        />
        <Carousel.Caption>
          <h3>Mood Changer</h3>
          <p>When I`m not on Netflix you can find me here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://papers.co/wallpaper/papers.co-ap99-google-deepmind-alphago-ai-illustration-29-wallpaper.jpg"
          alt="Fourth slide"
          style = {{ height:'850px',
            width:'100%'}}
        />
        <Carousel.Caption>
          <h3>Favorite Book</h3>
          <p>Isaac Asimov "I, robot"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
  
 </div>
    );
  }
}
 
export default Blogs;
