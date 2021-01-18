import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { TextField, InputAdornment } from '@material-ui/core';
// import { useController } from "react-hook-form";
import {  Controller } from "react-hook-form";

const BaseTextField = ({Adorment, errorMesssage, ...props }) => {
  let error = {
    error : errorMesssage ? true : false, 
    helperText : errorMesssage
  }

  return (
    <div>
      <TextField
          {...error}
          { ...props} 
          InputProps={{
            startAdornment: Adorment ? (
              <InputAdornment position="start">
                <Adorment />
              </InputAdornment>
            ) : '',
          }}
        />
       <p>
        {props.helperText}
       </p> 
    </div>
      )
}



const UniTextField = ({name, rules, control, ...props }) => {
  // const {
  //   field: { ref, ...inputProps },
  //   meta: { invalid, isTouched, isDirty },
  // } = useController({
  //   name,
  //   control,
  //   rules: { required: true },
  //   defaultValue: "",
  // });
  if(control) return (
    <Controller 
      name={name}
      rules={rules}
      control={control}
      defaultValue=""
      render={({ref, ...inputProps}) =>( 
        <BaseTextField inputRef={ref} 
          {...inputProps} 
          {...props} 
        />)}
    />)
  return (<BaseTextField {...props} />)
}

export default UniTextField