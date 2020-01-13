import React from 'react';
import { Dialog, Fade } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});

class SuccessAlert extends React.Component {
  constructor(props) {
    super(props);
    this.setToggles = this.setToggles.bind(this);
  }

  setToggles() {
    this.props.setAlertToggle();
    this.props.setLoginStatus();
  }

  render() {
    return (
      <Dialog
        open={this.props.alertToggle}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => this.setToggles()}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Alert
          severity="success"
        >
          <AlertTitle>Success</AlertTitle>
          You have successfully signed up!
        </Alert>
      </Dialog>
    );
  }
}

export default SuccessAlert;