import React from "react";
import { DIALOGS, SIGN_IN_FIELD_NAMES } from "@/constants/common";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { InputVariant } from "@/types/common";
import InputFormComponent from "@/components/input-form-component/InputFormComponent";
import Button from "@/atoms/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import useDialogURL from "@/hooks/useDialogURL";

function SignIn( { modal =false }: { modal?: boolean }) {
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const { openDialog } = useDialogURL({
    dialogId: DIALOGS.SIGN_UP_MODAL
  });

  const { push } = useRouter();

  const validationSchema = yup.object().shape({
    [SIGN_IN_FIELD_NAMES.EMAIL]: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    [SIGN_IN_FIELD_NAMES.PASSWORD]: yup
      .string()
      .required("Password is required"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRegister = () => {
    if(!modal) {
      push("/sign-up");
    } else {
      openDialog()
    }
  };

  return (
    <div className="w-full">
      <p className="text-center text-heading6 text-gray-70">WELCOME BACK</p>
      <p className="text-center mb-[10px]  text-gray text-heading5">
        Log into your account
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col mt-[40px] w-full gap-5 "
      >
        <InputFormComponent
          label="Email or Username"
          type="email"
          name={SIGN_IN_FIELD_NAMES.EMAIL}
          placeholder="Enter your email or username"
          control={control}
          error={errors?.[SIGN_IN_FIELD_NAMES.EMAIL]?.message}
          required={true}
        />
        <InputFormComponent
          label="Password"
          type="password"
          name={SIGN_IN_FIELD_NAMES.PASSWORD}
          placeholder="Enter your password"
          control={control}
          error={errors?.[SIGN_IN_FIELD_NAMES.PASSWORD]?.message}
          required={true}
          variant={InputVariant.PASSWORD}
        />
        {loginErrorMessage && (
          <div className="text-[12px] text-[#D9475E]">{loginErrorMessage}</div>
        )}
        <Button type="submit" className="w-full  py-2 font-normal text-white">
          Login Now
        </Button>
        <div className="flex  items-center gap-1">
          <span className="text-gray-80">Not registered yet? </span>
          <motion.div
            onClick={handleRegister}
            className="text-gray-90 flex items-center cursor-pointer"
            initial={{ gap: "0.25rem" }}
            whileHover={{ gap: "0.5rem" }}
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
