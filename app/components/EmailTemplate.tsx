import React from "react";

type EmailTemplateProps = {
  name: string;
  email: string;
  tel: string;
  message: string;
};

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  tel,
  message,
}: EmailTemplateProps) => {
  return (
    <div>
      <p>Name: {name} </p>
      <p>Email: {email} </p>
      <p>Tel: {tel} </p>
      <p>Message: {message} </p>
    </div>
  );
};

export default EmailTemplate;
