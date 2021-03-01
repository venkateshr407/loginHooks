import React from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
import '../App.css'
import useForm from '../Components/useForm'
import validateInfo from '../Components/validateInfo';

const Login = ({submitForm}) => {

const {handleChange, values, handleSubmit, error} = useForm(validateInfo, submitForm);

  
    return(
        <>
            <div className='contain'>
                <div className='header'>
                    <h2>Create Account</h2>
                </div>
                <Form id='form' onSubmit={handleSubmit}>
                <div className='container'>
                    <FormGroup>
                        <Input type='text' name='username' id='name' placeholder='Your Name'
                            value={values.username}
                            onChange={handleChange}
                        ></Input><br/>
                        {error.username && <p>{error.username}</p>} 
                    </FormGroup>
                    <FormGroup>
                        <Input type='email' name='email' id='email' placeholder='Your Email'
                             value={values.email}
                             onChange={handleChange}
                        ></Input> <br/>
                        {error.email && <p>{error.email}</p>} 


                    </FormGroup>
                    <FormGroup>
                        <Input type='password' name='password' id='password' placeholder='Password'
                             value={values.password}
                             onChange={handleChange}
                        ></Input><br/>
                        {error.password && <p>{error.password}</p>} 
 

                    </FormGroup>
                    <FormGroup>
                        <Input type='password' name='password2' id='password2' placeholder='Repeat your password'
                             value={values.password2}
                             onChange={handleChange}
                        ></Input> <br/>
                        {error.password2 && <p>{error.password2}</p>} 


                    </FormGroup>
                    </div>
                    
                    <FormGroup >
                    <div className="checkBoxStyle">
                        <h6>
                        <Input type="checkbox"/>{''}
                        I agree all statements in <a href='/'>Terms of service</a>
                        </h6>
                        </div>
                    </FormGroup>
                    
                    <Button type='submit' value='Submit' className='btn'>Sumbit</Button>
                </Form>
                <h6>Have already an account ? <a href='/'>Login here</a></h6>
            </div>
        </>
    )
}

export default Login;