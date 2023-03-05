import React from 'react';
import {useFormik} from 'formik'
export function BasicForm() {
  const formik=useFormik({
    initialValues:{ email:"sathish@gmail.com" , password:""},
  });
  return <>
    <form>
      <input 
      value={formik.values.email}
      type="email"
       placeholder="e-mail"/>
      <input 
      value={formik.values.password}
      type="password"
       placeholder="password"/>
      <button>submit</button>
    </form>
  </>;
}
