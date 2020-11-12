import React, { Component, useState, useEffect } from 'react';

const ContactForm = () => {

    const initialFieldValues = {
        fullname: '',
        mobile: '',
        email: '',
        address: '',
    }

    var [ values, setVales] = useState(initialFieldValues)


    return ( 
        <div>
            <form autoComplete="off" > 
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="inpt-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Mobile" name="mobile" value={values.mobile}/>
                </div>
                <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="inpt-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Email" name="email" value={values.email}/>
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="inpt-group-text">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Full Name" name="fullname" value={values.fullname}/>
                </div>
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control" placeholder="Address" name="address" value={values.address} 
                    />
                </div>
                <div className="form-group">
                   <input type="submit" value="Save" className="btn btn-primary btn-block"/>
                </div>
            </form>
        </div>
     );
}
 
export default ContactForm;