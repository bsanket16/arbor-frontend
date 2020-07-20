import React from 'react';
import Menu from '../core/Menu'

const Login = () => {

    const signInForm = () => {
        return (
            <>
                <Menu />

                <div className="container">

                    <div className="card mt-5 p-0">
                        <div className="card-body m-0 p-0">
                        <div className="row no-gutters">
                        <div className="col-4 offset-2 text-center my-auto">
                            <form className="form-signin">
                            <h1 className='display-4 mb-5 text-dark'>Login</h1>
                                <label htmlFor="inputEmail" className="sr-only">Email</label>
                                <input type="email" className="form-control" placeholder='Email address' required autoFocus/>

                                <label htmlFor="inputPassword" className="sr-only">Password</label>
                                <input type="password" className="form-control mt-2" placeholder='Password' required/>

                                <div className="checkbox mb-2 mt-3 text-left text-muted">
                                    <label>
                                        <input type="checkbox"/> Keep me logged in
                                    </label>
                                </div>

                                
                                <button href='/' className="btn btn-lg btn-success btn-block" type='submit'>
                                <a href='/'> Login </a>
                                </button>
                                

                            </form>
                        </div>

                        <div className="col-4 my-0 p-0 ml-auto">
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
        signInForm()
    )
}

export default Login