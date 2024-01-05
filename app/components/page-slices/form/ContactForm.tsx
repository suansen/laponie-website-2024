import React from "react";
import { Button, Input } from "@nextui-org/react";

type Props = { languageSelected: string };

const ContactForm = ({ languageSelected }: Props) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", tel: "", message: "" });
    console.log(formData);
  };

  const isInvalid = React.useMemo(() => {
    if (formData.email === "") return false;

    return validateEmail(formData.email) ? false : true;
  }, [formData.email]);

  return (
    <div className="bg-tw-primary p-4 md:p-8">
      <form onSubmit={handleSubmit}>
        <Input
          isRequired={true}
          value={formData.name}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setFormData({ ...formData, name: e.currentTarget.value })
          }
          type="text"
          label={languageSelected === "en" ? "Name" : "姓名"}
          variant="bordered"
          className="max-w-xs"
        />
        <Input
          value={formData.tel}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setFormData({ ...formData, tel: e.currentTarget.value })
          }
          type="tel"
          label="Tel"
          variant="bordered"
          className="max-w-xs"
        />
        <Input
          isRequired
          value={formData.email}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setFormData({ ...formData, email: e.currentTarget.value })
          }
          type="email"
          label="Email"
          variant="bordered"
          isInvalid={isInvalid}
          color={isInvalid ? "danger" : "default"}
          errorMessage={isInvalid && "Please enter a valid email"}
          className="max-w-xs"
        />
        <Input
          isRequired={true}
          value={formData.message}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setFormData({ ...formData, message: e.currentTarget.value })
          }
          type="textArea"
          label="Message"
          variant="bordered"
          className="max-w-xs"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ContactForm;
