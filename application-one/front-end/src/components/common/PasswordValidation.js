import React from 'react';

function PasswordValidation(props) {
  const notifications = [
    props.passwordNotice,
    props.passwordLengthNotification,
    props.passwordLowercaseNotification,
    props.passwordUppercaseNotification,
    props.passwordNumberNotification
  ];

  return (
    <span>
      {notifications.map(notice => 
        <div key={notice}>{notice}</div>
      )}
    </span>
  )
}

export default PasswordValidation;