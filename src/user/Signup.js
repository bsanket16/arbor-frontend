import React from 'react';
import Menu from '../core/Menu'

const Signup = () => {

    const signUpForm = () => {
        return (
            <>
                <Menu />

                <div className="container">

                    <div className="card mt-5">
                        <div className="card-body m-0 p-0">
                        <div className="row no-gutters">
                        
                        <div className="col-4 my-auto mr-auto order-last">
                            <form className="form-signup">
                            <h1 className='display-4 mb-5 text-dark text-center'>Signup</h1>

                                <div className="form-label-group">
                                    <input type="name" id="inputName" className="form-control" placeholder='Name' required autoFocus autoComplete="new-name" />
                                    <label htmlFor="inputName">Name</label>
                                </div>

                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" className="form-control" placeholder='Email' required autoComplete="off"/>
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>

                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" className="form-control" placeholder='Password' required autoComplete="new-password"/>
                                    <label htmlFor="inputPassword">Password</label>
                                </div>
                                
                                <button href='/' className="btn btn-lg btn-success btn-block mt-4" type='submit'> Sign up </button>
                                

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
        signUpForm()
    )
}

export default Signup