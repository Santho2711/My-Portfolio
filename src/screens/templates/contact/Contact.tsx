import React, { useState } from "react";
import Forminput from "../../../components/inputs/Forminput";
import "./contact.scss";
import type { paddingProp } from "../../../utilities/content";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

interface ContactInput {
  name: string;
  email: string;
  message: string;
}
const Contact: React.FC<paddingProp> = ({ padding = true }) => {
  // const [progress, setProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  // form schema
  const schema = yup
    .object()
    .shape({
      name: yup.string().required("first name is required"),
      email: yup
        .string()
        .email("Enter valid email")
        .required("E-mail is required"),
      message: yup.string().required("leave a message"),
    })
    .required();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const contactApiCall = async (data: ContactInput) => {
    try {
      await axios.post(
        import.meta.env.VITE_FORM_URL,
        { ...data, access_key: import.meta.env.VITE_ACCESS_KEY },
        {
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              // const percentCompleted = Math.round(
              //   (progressEvent.loaded * 100) / progressEvent.total,
              // );
              // setProgress(percentCompleted);
            }
          },
        },
      );
      alert("Message sent successfully!");
    } catch (error) {
      alert("Something went wrong!");
    } finally {
      setIsUploading(false);
    }
    reset();
  };

  return (
    <div className={`contact ${padding ? "padding" : ""}`}>
      <h5>
        LET'S WORK <span>TOGETHER</span>
      </h5>
      <form onSubmit={handleSubmit(contactApiCall)} method="post">
        <div className="db_fld">
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Forminput
                label="Name"
                onchange={onChange}
                value={value}
                error={errors.name?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Forminput
                label="E-Mail"
                onchange={onChange}
                value={value}
                error={errors.email?.message}
              />
            )}
          />
        </div>

        <Controller
          name="message"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Forminput
              label="Message"
              type="textarea"
              onchange={onChange}
              value={value}
              error={errors.message?.message}
            />
          )}
        />

        <button type="submit" disabled={isUploading}>
          {isUploading ? "Sending" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
