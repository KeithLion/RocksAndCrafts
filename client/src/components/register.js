import React from 'react';
import LoginForm from './Login';
import  Button  from '@mui/material/Button';
import Card from '@mui/material/Card';


const Register = () =>{

    var formStyle ={
        div: {
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 10,
            padding: '1rem',
            gap: 15,
            alignItems: 'center',
            margin: 'auto',
            maxWidth: 500,
            marginTop: '5%',
            color: 'white',
            backgroundColor: '#DF4BF2'

        },
        button:{
            padding: 10,
            width: 200,
            backgroundColor: '#368DD9',
            border: 0,
            borderRadius: 5,
            boxShadow: '2px 3px #142B59',
            color:'white'
        },
        input:{
            padding: 10,
            width: 350
        }

    }


    return(


        <Card style={formStyle.div}>
    <form style={formStyle.div}>
        <h2>Happy to see you!</h2>
        <label>
            <input style={formStyle.input} type='text' placeholder='First Name'></input>
        </label>
        <label>
            <input style={formStyle.input} type='text' placeholder='Last Name'></input>
        </label>
        <label>
            <input style={formStyle.input} type='email' placeholder='Email'></input>
        </label>
        <label>
            <input style={formStyle.input} type='password' placeholder='Password'></input>
        </label>
        <Button style={formStyle.button} color='secondary' type='submit'>Register</Button>
        <p>Already have an account? <a href='/login'>Login</a> here</p>
    </form>
    </Card>

    )
}

export default Register