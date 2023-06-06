import React from 'react'

function Alert(props) {
  return (
props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
<strong>{props.alert.type}</strong> : {props.alert.msg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
  )
}
// {/* if "Props.alert" before"&&"wala  returns "ture" then next would be execute,otherwise nothing would be execute. */}


export default Alert
