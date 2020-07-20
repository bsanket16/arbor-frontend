import React, { useState } from 'react';
import Base from '../core/Base'
import { Link } from 'react-router-dom'

const Signup = () => {

    const signUpForm = () => {
        return (
            <>
                <div className="container">

                    <div className="card mt-5 p-0">
                        <div className="card-body m-0 p-0">
                        <div className="row no-gutters">
                        
                        <div className="col-4 text-center my-auto mr-auto order-last">
                            <form className="form-signup">
                            <h1 className='display-4 mb-5 text-dark'>Register</h1>
                                <label htmlFor="inputName" className="sr-only">Name</label>
                                <input type="text" className="form-control" placeholder='Name' required autoFocus/>

                                <label htmlFor="inputEmail" className="sr-only">Email</label>
                                <input type="email" className="form-control mt-2" placeholder='Email address' required autoFocus/>

                                <label htmlFor="inputPassword" className="sr-only">Password</label>
                                <input type="password" className="form-control mt-2" placeholder='Password' required autoFocus/>

                                {/* <div className="checkbox mb-2 mt-3 text-left text-muted">
                                    <label>
                                        <input type="checkbox"/> Keep me logged in
                                    </label>
                                </div> */}

                                
                                <button href='/' className="btn btn-lg btn-success btn-block mt-4" type='submit'>
                                <a href='/'> Sign up </a>
                                </button>
                                

                            </form>
                        </div>

                        <div className="col-4 my-0 p-0 mr-auto">
                            <div className="not-signed-up"></div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </>
        )
    }

    return(
        <Base title='Sign up' description='Page for registration'>
            {signUpForm()}
        </Base>
    )
}

export default Signup