import React, { useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";

type Props = { languageSelected: string };

const ContactForm = ({ languageSelected }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const handleSubmit = async (
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "post",
        body: JSON.stringify(formData),
      });

      // console.log("response", response);

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      // const responseData = await response.json();
      // console.log(responseData["message"]);

      alert("Message successfully sent");
      setFormData({ name: "", email: "", tel: "", message: "" });
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
      setIsLoading(false);
    }
  };

  const isInvalid = React.useMemo(() => {
    if (formData.email === "") return false;

    return validateEmail(formData.email) ? false : true;
  }, [formData.email]);

  return (
    <div className=" mx-auto overflow-hidden rounded-xl bg-tw-primary/80 px-4 py-12 shadow-md ">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-center justify-center space-y-4  "
      >
        <Input
          size="lg"
          name="name"
          autoComplete="name"
          isRequired={true}
          value={formData?.name}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setFormData({ ...formData, name: e.currentTarget.value })
          }
          type="text"
          label={languageSelected === "en" ? "Name" : "姓名"}
          variant="bordered"
          className="max-w-lg rounded-xl bg-[#f4f4f5]"
        />
        <Input
          size="lg"
          name="tel"
          value={formData.tel}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setFormData({ ...formData, tel: e.currentTarget.value })
          }
          autoComplete="tel"
          type="tel"
          label="Tel"
          variant="bordered"
          className="max-w-lg rounded-xl bg-[#f4f4f5]"
        />
        <Input
          size="lg"
          name="email"
          autoComplete="email"
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
          className="max-w-lg rounded-xl bg-[#f4f4f5]"
        />
        {/* <Input
          size="lg"
          name="message"
          isRequired={true}
          value={formData.message}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setFormData({ ...formData, message: e.currentTarget.value })
          }
          type="textArea"
          label="Message"
          variant="bordered"
          className="max-w-lg rounded-xl bg-[#f4f4f5]"
        />
        <input type="textArea"></input> */}
        <Textarea
          // variant="underlined"
          isRequired={true}
          maxRows={3}
          value={formData.message}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setFormData({ ...formData, message: e.currentTarget.value })
          }
          label="Message"
          placeholder="Enter your Message"
          disableAnimation
          disableAutosize
          classNames={{
            base: "max-w-lg",
            input: "resize-y min-h-[40px] text-p",
          }}
        />
        <Button
          type="submit"
          isDisabled={isLoading}
          size="lg"
          className="w-full max-w-lg bg-tw-primary-pink text-tw-white-off"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
