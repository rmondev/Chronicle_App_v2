import * as React from 'react';
import Button from '@mui/material/Button';


export default function LightGreenButton({ text }) {

    const buttonStyle = {
        color: 'white', // Text color
        borderColor: 'lightgreen', // Border color
        backgroundColor: 'lightgreen', // Background color
        
    }
    
    return <Button variant="contained" style={buttonStyle}>
        {text}
        </Button>


}