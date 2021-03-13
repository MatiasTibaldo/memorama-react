import axios from 'axios';
import React,{Component} from 'react';
import mapTopicsUrl from '../models/MapTopicsUrl';

class ImageRandom extends Component {
    componentDidMount() {
        if(mapTopicsUrl.has(this.props.topic)){
        }else{
            let randomURL = `https://source.unsplash.com/${this.props.width}x${this.props.height}/?${this.props.topic}`;
            axios.get(randomURL)
            .then( data => {
                mapTopicsUrl.set(this.props.topic, data.request.responseURL);
            })
            .catch(error=>console.error(error)); 
        }
  
    }       

    render() {
        const url = mapTopicsUrl.get(this.props.topic)
        return this.props.visible 
            ? <img
                src={url}
                alt={this.props.height}
              />
            : null;
    }
}

export default ImageRandom;
