import React from "react";
import "./styles.css";
import { Formik, Form, Field } from "formik";

const FormComponent = () => { 

    function checkName(value) {
        if(!value) {
            return 'Write Name';
        }
    }

    function checkEmail(value) {
        const regexp = /[\-_%+\.\w]+@([\w-]+\.)+[\w-]+/g
        const checkValue = regexp.test(value) 
        
        if(!value) {
            return 'Write Email';
        } else if(!checkValue){
            return 'Write correct Email';
        }
    }

    function checkPhone(value) {
        const regexp = /\d/;

        if(!value) {
            return 'Write Phone'
        } else if (!(regexp.test(value)) || (value.length < 12)) {
            return 'Write correct Phone';
        }
    }

    return( 
        <div className="container">
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                }}
            onSubmit={values => {
                console.log(values)
            }}
            >
            {
            ({ errors, touched }) => (
                <Form   className="form_container">
                    <label>
                    Name:
                    </label>
                    <Field
                    name="name"
                    validate={checkName}
                    />
                    {
                        touched.name && errors.name && (
                            <div className="name_check_error">write correct name</div>
                        )
                    }
                    <label>
                    Email:
                    </label>
                    <Field
                    name="email" 
                    validate={checkEmail}
                    />
                    {
                       touched.email && errors.email && (
                            <div className="email_check_error">write correct email</div>
                        )
                    }

                    <label>
                    Phone
                    </label>
                    <Field
                    name="phone"
                    validate={checkPhone}
                    />
                    {
                        touched.phone && errors.phone && (
                            <div className="phone_check_error">write correct phone</div>
                        )
                    }
                    <button type="submit">Submit</button>
                </Form>
            )
        }
    </Formik>
        </div>
    )
}

export default FormComponent;