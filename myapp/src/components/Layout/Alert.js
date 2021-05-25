import React, { Component } from 'react';
import { withAlert } from 'react-alert'
import { connect } from 'react-redux';
class Alerts extends Component {
  componentDidUpdate(prevProps) {
    //alert prop is from react-alert package
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.message) alert.error(`Email: ${error.msg.message.join()}`);
      if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
      if (error.msg.username) alert.error(`Username: ${error.msg.username.join()}`);
      if (error.msg.password) alert.error(`Password: ${error.msg.password.join()}`);
    }

    if (message !== prevProps.message) {
      if (message.leadAdded) alert.success(message.leadAdded);
      if (message.leadDeleted) alert.success(message.leadDeleted);
      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);

    }

  }
  render() {
    return <></>
  }
}
const mapStateToProps = state => {
  return {
    error: state.errors,
    message: state.messages
  }
}
export default connect(mapStateToProps)(withAlert()(Alerts));




















// import {useAlert, withAlert } from 'react-alert';


// import React from 'react';
// import {useSelector} from 'react-redux';

// export const Alert = () => {
//     const alert = useAlert();
//     const errors = useSelector(state => state.errors)
//     return (
//         <div>
//             <button
//       onClick={() => {
//         alert.show(errors)
//       }}
//     >
//       Show Alert
//     </button>
//         </div>
//     )
// }
// export default Alert;
