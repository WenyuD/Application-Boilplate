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
    <div>
      {notifications.map((notice, index) => 
        <div key={index + notice}>{notice}</div>
      )}
    </div>
  )
}

export default PasswordValidation;