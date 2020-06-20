import React, {Component} from 'react';

class Card extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="card">
            <a href={this.props.linkToGit}>
            <img class="card-img-top" src={this.props.cardImageSource}/>
            <div class="card-body">
            <h5 class="card-title">{this.props.projectTitle}</h5>
              <p class="card-text" id = "card-description">
                {this.props.projectDescription}
              </p>
            <p class="card-text"><small class="text-muted"><i class="fa fa-github-square"></i><i class="fa fa-calendar"></i>{this.props.publishDate}</small></p>
           </div>
            </a>
          </div>
         );
    }
}
 
export default Card;