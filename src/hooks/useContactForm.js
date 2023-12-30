import { useState } from "react";
import emailjs from "@emailjs/browser";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "../lib/validationSchemas";

// template_zuixbo8
// service_9njoiu8
// PVV4Qun76AaKzonbi

const useContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setError,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    if (!isValid) return;
    setLoading(true);
    emailjs
      .send(
        "service_9njoiu8",
        "template_zuixbo8",
        {
          from_name: data.fullName,
          to_name: "Federico Coronel",
          from_email: data.email,
          to_email: "fedec34@gmail.com",
          message: data.message,
        },
        "PVV4Qun76AaKzonbi"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        reset();
      })
      .catch((error) => {
        setLoading(false);
        setError("general", {
          type: "server",
          message: error.text,
        });
        console.error(error);
      });
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
  };
};

export default useContactForm;
