import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
export default function Contact() {
  let user = {
    name:"",
    email:"",
    phone:"",
    age:"",
    password: "",
    rePassword:""
  }
  let validationSchema = Yup.object({
    name: Yup.string().required("Name can't be empty")
      .min(5, "Name must be at least 5 characher")
      .max(20, "Name must be at most 20 characher"),

    email: Yup.string().required("Email can't be Empty ").email("Enter a valid Email"),

    password: Yup.string().required("Password can't be Empty ")
      .min(8, "Password must be at least 8 characher")
      .max(20, "Password must be at most 20 characher").matches(/^[A-Z]/),

    rePassword: Yup.string().required("RePassword can't be Empty ")
      .oneOf([Yup.ref("password")], "Password and RePassword must be match"),

    age: Yup.number().required("Age can't be Empty ")
      .min(25, "You must be at least 25 years old")
      .max(60, "You must be at most 60 years old"),

    phone: Yup.string().required("Phone can't be Empty ")
      .matches(/^01[0125][0-9]{8}$/, "Please Enter a valid Phone number")
  })
  function sendData(values) { console.log("donedddddddddd",values);}
  const formikObject = useFormik({
    initialValues: user,
    onSubmit: sendData,
    validationSchema,
  })
  return <>
    <form onSubmit={formikObject.handleSubmit}>
      <div className="row d-flex justify-content-center g-3 py-5">
        <div className="col-md-6">
          <input  name='name' id='name'  type="name" className='form-control' placeholder='Enter Your Name '
          onBlur={formikObject.handleBlur} onChange={formikObject.handleChange} value={formikObject.values.name} />
        
        {formikObject.errors.name && formikObject.touched.name? <div className='alert alert-danger '>{formikObject.errors.name}</div>:""}
        </div>        
        <div className="col-md-6">
          <input id='email' name='email' type="email" className='form-control' placeholder='Enter Your Email '
          onBlur={formikObject.handleBlur} onChange={formikObject.handleChange} value={formikObject.values.email}  />
        
        {formikObject.errors.email && formikObject.touched.email? <div className='alert alert-danger '>{formikObject.errors.email}</div>:""}
        </div>        


        <div className="col-md-6">
          <input id='phone' name='phone' type="tel" className='form-control' placeholder='Enter Your Phone '
          onBlur={formikObject.handleBlur} onChange={formikObject.handleChange} value={formikObject.values.phone}  />
      
        {formikObject.errors.phone && formikObject.touched.phone? <div className='alert alert-danger '>{formikObject.errors.phone}</div>:""}
        </div>
        <div className="col-md-6">
          <input id='age' name='age' type="text" inputMode='numeric' className='form-control' placeholder='Enter Your Age '
          onBlur={formikObject.handleBlur} onChange={formikObject.handleChange} value={formikObject.values.age}  />
       
        {formikObject.errors.age && formikObject.touched.age? <div className='alert alert-danger '>{formikObject.errors.age}</div>:""}
        </div>
        <div className="col-md-6">
          <input id='password' name='password' type="password" className='form-control' placeholder='Enter Your Password '
          onBlur={formikObject.handleBlur} onChange={formikObject.handleChange} value={formikObject.values.password}  />
        
        {formikObject.errors.password && formikObject.touched.password? <div className='alert alert-danger '>{formikObject.errors.password}</div>:""}
        </div>
        <div className="col-md-6">
          <input id='rePassword' name='rePassword' type="password" className='form-control' placeholder='RePassword '
          onBlur={formikObject.handleBlur} onChange={formikObject.handleChange} value={formikObject.values.rePassword}  />
        
        {formikObject.errors.rePassword && formikObject.touched.rePassword? <div className='alert alert-danger '>{formikObject.errors.rePassword}</div>:""}
        </div>
        <button type='submit' className='btn btn-outline-danger w-auto' disabled={!formikObject.isValid || !formikObject.dirty}>Submit</button>

      </div>
    </form>
  </>
}


