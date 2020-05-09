import React, { Component } from "react";
import StarRatings from 'react-star-ratings';
 
class StarRating extends Component {
    
    render() {
        var {ratingFunction}=this.props;
      // rating = 2;
      return (
       <StarRatings  
       rating={2.403}
       starDimension="15px"
       starSpacing="0px"
       starRatedColor="#fe7860"
       changeRating={ratingFunction}
       />
      );
    }
}

export default StarRating