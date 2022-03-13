import React from 'react'
import { Navigate } from 'react-router-dom';
import {  useSelector } from 'react-redux'

const Manasa = () => {
    const { user } = useSelector(state => state.auth)
    
    return (
        <div>
            { !user   ? <Navigate to ="/login" /> 
                : 
              
                (<h1 style={{margin:"150px auto",textAlign:"center"}}> OK :  Auth   Manasa Conatant Here</h1>)
            }
        </div>
    );
}

export default Manasa;
