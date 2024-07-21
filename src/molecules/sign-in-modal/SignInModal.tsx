import Modal from "@/atoms/modal";
import SignIn from "@/components/sign-in/SignIn";
import SignUp from "@/components/sign-up/SignUp";
import { DIALOGS } from "@/constants/common";
import useDialogURL from "@/hooks/useDialogURL";
import React, { useState } from "react";

function SignInModal() {
  const { closeDialog, isDialogOpen } = useDialogURL({ dialogId: DIALOGS.SIGN_IN_MODAL });

  return (
      <Modal isVisible={isDialogOpen} onClose={closeDialog}>
        <div className="!bg-[#27292D]  rounded-lg p-4  border-[#343434] border-2">
          <SignIn modal /> 
        </div>
      </Modal>
  );
}

export default SignInModal;
