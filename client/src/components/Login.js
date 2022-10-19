import React from 'react'
import Register from './register'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'





const LoginForm = ()=>{

    var formStyle ={
    main:{
        height: '100vh',
        paddingTop: '7%',
    },
        div: {
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 10,
            padding: '1rem',
            gap: 15,
            marginTop: '7%',
            alignItems: 'center',
            margin: 'auto',
            maxWidth: 450,
            backgroundColor: '#DF4BF2',
            color: 'white',

        },
        button:{
            padding: 6,
            width: 200,
            backgroundColor: '#368DD9',
            border: 0,
            borderRadius: 5,
            boxShadow: '2px 3px #142B59',
            color: 'white'

        },
        input:{
            padding: 10,
            width: 350
        }

    }

    return (




            <Card style={formStyle.div}>

            <form style={formStyle.div}>
                <h2>Welcome Back</h2>
                <label>
                    <input style={formStyle.input} type='email' placeholder='Email'></input>
                </label>
                <label>
                    <input style={formStyle.input} type='password' placeholder='Password'></input>
                </label>
                <Button style={formStyle.button}  color='secondary' type='submit'>Log in</Button>
                <p>Don't have an account? <a href='/register'>Register</a> here</p>
            </form>
            </Card>


    )
}

export default LoginForm 