import React, {Component} from 'react';
import {Formik} from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import style from './ContactMe.module.css'
const  config = require("../../../config.json")

class ContactMe extends Component {
    state = {
        values: {
            firstName: '',
            lastName: '',
            message: '',
            email: ''
        },
        emailResponse: null
    }

    contactDataHandler = (values) => {
        this.setState({
            values: {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                message: values.message
            }
        });
        const data = this.state.values;
        axios.post(`${config.contactApi.contactUrl}`, data)
            .then(result => {
                if (result.data.errorMessage) {
                    this.setState({emailResponse: 'Please try again in 10 minutes. Maintenance!'})
                } else {
                    this.setState({emailResponse: result.data})
                }

            })
            .catch(err => {
                console.log(err)
                this.setState({emailResponse: 'Please try again!'})
            })
    }

    render() {

        let response = null;
        if (this.state.emailResponse) {
            response = <div style={{textAlign: 'center'}}>{this.state.emailResponse}</div>
        }
        return (
            <div>
                {response}
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        message: ''
                    }}
                    validationSchema={Yup.object({
                        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('First name is required'),
                        lastName: Yup.string().max(15, 'Must be 15 characters or less').required('Last name is required'),
                        email: Yup.string().email('Invalid email address').required('email is required'),
                        message: Yup.string().min(10, 'At least 10 characters long').max(200, 'Max characters is 200').required('Enter a message'),
                    })}
                    onSubmit={(values, {resetForm}) => {
                        this.contactDataHandler(values)
                        resetForm({values: ''})
                    }}>
                    {formik => (<form
                        onSubmit={formik.handleSubmit}
                        className='col-lg-6 col-md-8 col-sm-12 m-auto'
                        style={{alignContent: "center"}}>
                        <p className={style.Intro}>
                            <strong>Contact us by filling out the form below</strong>
                        </p>
                        <br/>
                        <div className='form-group'>
                            <label htmlFor="firstName">First Name</label>
                            <input className='form-control' id="firstName" type="text"
                                   onChange={formik.handleChange}
                                   value={formik.values.firstName}/>
                            {formik.touched.firstName && formik.errors.firstName ?
                                (<div className={style.Error}>{formik.errors.firstName}</div>) : null}
                        </div>

                        <div className='form-group'>
                            <label htmlFor="lastName">Last Name</label>
                            <input className='form-control' id="lastName" type="text"
                                   onChange={formik.handleChange}
                                   value={formik.values.lastName}/>
                            {formik.touched.lastName && formik.errors.lastName ?
                                (<div className={style.Error}>{formik.errors.lastName}</div>) : null}
                        </div>

                        <div className='form-group'>
                            <label htmlFor='email'>Email Address</label>
                            <input className='form-control' id='email' type='email'
                                   onChange={formik.handleChange}
                                   value={formik.values.email}/>
                            {formik.touched.email && formik.errors.email ?
                                (<div className={style.Error}>{formik.errors.email}</div>) : null}
                        </div>
                        <div className='form-group'>
                            <label htmlFor="message">Message</label>
                            <textarea className='form-control' id="message"
                                      onChange={formik.handleChange}
                                      value={formik.values.message}/>
                            {formik.touched.message && formik.errors.message ?
                                (<div className={style.Error}>{formik.errors.message}</div>) : null}
                        </div>
                        <button type='submit' className='btn btn-success'>Submit</button>
                    </form>)}
                </Formik>
            </div>
        );
    };
}

export default ContactMe;