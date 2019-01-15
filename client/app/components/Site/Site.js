import React from "react";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { InputLabel} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { OpenStreetMapProvider } from 'leaflet-geosearch';
const provider = new OpenStreetMapProvider();
import 'whatwg-fetch';
import axios from 'axios';

class Site extends React.Component {
    constructor() {
      super();

      this.state = {
          address: '',
          description: '',
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.onTextboxChangeAddress = this.onTextboxChangeAddress.bind(this);
      this.onTextboxChangeDescription = this.onTextboxChangeDescription.bind(this);

    }
  
    onTextboxChangeAddress(event) {
        this.setState({
          address: event.target.value,

        });
      }

    onTextboxChangeDescription(event) {
    this.setState({
        description: event.target.value,
    });
    }


     handleSubmit (submitEvent) {
        submitEvent.preventDefault();
        // Grab state
        const {
          address,
          description,
        } = this.state;
        


         
    
    
        provider.search( {query: address} ).then(function(result){
            
            fetch('/freegan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    lat: (result[0].y),
                    lng: (result[0].x),
                    unverified: '',
                    description: description,
                    author: '',
                    address: address,
                    created_at: '',
                    updated_at: ''
                }),
            })
           
            
            console.log("sucess");
        });
        }
        // fetch('/dumpsters', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         lat: 10000,
        //         lng: 1000,
        //         unverified: '',
        //         description: description,
        //         author: '',
        //         address: address,
        //         created_at: '',
        //         updated_at: ''
        //     }),
        // }).then(res => res.json())
        // .then(json => {
        //     console.log('json', json);
        // }
        // );


        // provider
        // .search( {query: address} )
        // .then(function(result){
        //     fetch('/dumpsters', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             lat: result.x,
        //             lng: result.y,
        //             unverified: '',
        //             description: description,
        //             author: '',
        //             address: address,
        //             created_at: '',
        //             updated_at: ''
        //         }),
        //     }).then(res => res.json())
        //     .then(json => {
        //         console.log('json', json);
        //     }
        //     );
        // })

        
        
    

    //     // Post request to backend
    //     fetch('/dumpsters', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         add: signInEmail,
    //         password: signInPassword,
    //       }),
    //     }).then(res => res.json())
    //       .then(json => {
    //         console.log('json', json);
    //         if (json.success) {
    //           setInStorage('the_main_app', { token: json.token });
    //           this.setState({
    //             signInError: json.message,
    //             isLoading: false,
    //             signInPassword: '',
    //             signInEmail: '',
    //             token: json.token,
    //           });
    //         } else {
    //           this.setState({
    //             signInError: json.message,
    //             isLoading: false,
    //           });
    //         }
    //       });
    //   }
    

    // handleSubmit(event) {
    //   event.preventDefault();
    //   var _description = event.target.description.value;
    //   var address =  event.target.address.value;

      
    //   provider
    //   .search( {query: address} )
    //   .then(function(result){
    //             var data= {
    //                 lat: result.x,
    //                 lng: result.y,
    //                 unverified: '',
    //                 description: description,
    //                 author: '',
    //                 address: address,
    //                 created_at: '',
    //                 updated_at: ''
    //             }
    //         fetch('/dumpsters', {
    //                 method: 'POST',
    //                 body: data
    //             }).then(res =>{
    //                 return res;
    //             }).catch(err => err);
    //   })
    //   console.log("success");
    
    // }
  
    render() {
        const {
            address,
            description,
          } = this.state;

      return (
        <form>
          <label htmlFor="address">Enter Address</label>
          <input type="text" placeholder="Address" value={address} onChange={this.onTextboxChangeAddress}/>


          <br />

          <label htmlFor="description">Description</label>
          <input type="text" placeholder="Description" value={description} onChange={this.onTextboxChangeDescription}/>


          <br />

          <button  onClick={this.handleSubmit}>Submit!</button>
        </form>
      );
    }
  }




export default Site;