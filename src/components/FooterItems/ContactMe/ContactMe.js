import React from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';
import style from './ContactMe.module.css'

const ContactMe = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Must be 15 characters or less').required('First name is required'),
            lastName: Yup.string().max(15, 'Must be 15 characters or less').required('First name is required'),
            /*name: Yup.string().max(30, 'Must be 15 characters or less').required('Name is required'),*/
            email: Yup.string().email('Invalid email address').required('Email is required'),
            message: Yup.string().max(200, 'Max characters is 200').required('Message is required'),
        }),
        onSubmit: values => {
            console.log(values);
        },
    })

    return (
        <div className='col-lg-6 col-md-8 col-sm-12 m-auto'>
            <p>Please fill out the form below to contact us about the site.</p>
            <form
                onSubmit={formik.handleSubmit}

                style={{alignContent: "center"}}>

                <div className='form-group'>
                    <label htmlFor="firstName">First Name</label>
                    <input className='form-control' id="firstName" type="text"
                           {...formik.getFieldProps('firstName')}/>
                    {formik.touched.firstName && formik.errors.firstName ?
                        (<div className={style.Error}>{formik.errors.firstName}</div>) : null}
                </div>
                <div className='form-group'>
                    <label htmlFor="lastName">Last Name</label>
                    <input className='form-control' id="lastName" type="text"
                           {...formik.getFieldProps('lastName')}/>
                    {formik.touched.lastName && formik.errors.lastName ?
                        (<div className={style.Error}>{formik.errors.lastName}</div>) : null}
                </div>

                <div className='form-group'>
                    <label htmlFor='email'>Email Address</label>
                    <input className='form-control' id='email' type='email'
                           {...formik.getFieldProps('email')}/>
                    {formik.touched.email && formik.errors.email ?
                        (<div className={style.Error}>{formik.errors.email}</div>) : null}
                </div>

                <div className='form-group'>
                    <label htmlFor="message">Message</label>
                    <textarea className='form-control' id="message"
                           {...formik.getFieldProps('message')}/>
                    {formik.touched.message && formik.errors.message ?
                        (<div className={style.Error}>{formik.errors.message}</div>) : null}
                </div>

                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </div>
    );
};

export default ContactMe;