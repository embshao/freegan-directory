import React from "react";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { InputLabel} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { OpenStreetMapProvider } from 'leaflet-geosearch';
const provider = new OpenStreetMapProvider();
import fetch from 'isomorphic-fetch';



class Site extends React.Component {
    constructor() {
      super();

      this.state = {
          
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      var _description = event.target.description.value;
      var address =  event.target.address.value;

      
      provider
      .search( {query: address} )
      .then(function(result){
                var data= {
                    lat: result.x,
                    lng: result.y,
                    unverified: '',
                    description: description,
                    author: '',
                    address: address,
                    created_at: '',
                    updated_at: ''
                }
            fetch('/dumpsters', {
                    method: 'POST',
                    body: data
                }).then(res =>{
                    return res;
                }).catch(err => err);
      })
      console.log("success");
    
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="address">Enter Address</label>
          <input id="address" name="address" type="text"/>

          <br />

          <label htmlFor="description">Description</label>
          <input id="description" name="description" type="text" />

          <br />

          <button>Submit!</button>
        </form>
      );
    }
  }




export default Site;