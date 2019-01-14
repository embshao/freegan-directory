import React from "react";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { InputLabel} from "@material-ui/core";
import { TextField } from "@material-ui/core";

class Site extends React.Component {
    constructor(props) {
      super(props);
      
    }


    render(){
        return (
            <form noValidate autoComplete="off">
            <TextField
              id="standard-name"
              label="Name"
            />
            <br/>
            <TextField
              id="standard-name"
              label="Address"
            />
            <br/>
            <TextField
              id="standard-name"
              label="Description"
            />
            <br/>
        </form>
        );
    }
}

export default Site;