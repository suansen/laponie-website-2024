import React from "react";
import ContactForm from "./ContactForm";

type Props = {
  header: string;
  subheader: string;
  form: string;
  languageSelected: string;
};

const Form = ({ header, subheader, form, languageSelected }: Props) => {
  return (
    <section>
      <div>
        <h2>{header}</h2>
        <p>{subheader}</p>
      </div>
      <div>
        {form === "contact" ? (
          <ContactForm languageSelected={languageSelected} />
        ) : null}
      </div>
    </section>
  );
};

export default Form;
