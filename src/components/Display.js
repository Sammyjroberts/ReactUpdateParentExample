/**
 * Created by deanroberts on 8/2/17.
 */
import React from 'react';

export default class Display extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
  }
  render() {
    let images = "";
    if (this.props.giphyData) {
     images = this.props.giphyData.map((data, i) => {
        return(
            <img className="center-block" src ={data.images.fixed_width.url} key ={i}/>
        );
      })
    }
    return (
      <div>
        {
          images
        }
      </div>
    );
  }
}


