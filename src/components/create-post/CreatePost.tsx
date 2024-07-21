/* eslint-disable @next/next/no-img-element */
import Button from "@/atoms/button";
import { DIALOGS } from "@/constants/common";
import useDialogURL from "@/hooks/useDialogURL";
import React from "react";

function CreatePost() {
  const isLoggedIn = false;
  const { openDialog } = useDialogURL({
    dialogId: DIALOGS.SIGN_IN_MODAL
  });


  const openModal = () => {
    if (!isLoggedIn) {
      openDialog()
    } 
  };

  return (
    <div className="w-full border-[2px] border-gray-50 rounded-lg p-4 bg-gray-60 mt-2">
      <div className="text-gray-90 text-heading5 mb-4 font-medium">
        Create a post
      </div>
      <div className="w-full rounded-lg bg-bBlack-90 p-4 flex h-full flex-row gap-4">
        <div className="rounded-full bg-gray-60 flex items-center justify-center h-fit w-fit p-4">
          <img
            src="/typing_emoji.png"
            alt="typing emoji"
            className="!h-[18px] !w-[18px] object-contain "
          />
        </div>
        <textarea
          placeholder="How are you feeling today?"
          className="placeholder-gray-80 min-h-[60px] w-full bg-transparent p-2 outline-none text-gray-80 text-heading3 font-normal"
        />
      </div>
      <div className="flex w-full justify-end mt-4">
        <Button
          onClick={openModal}
          className="w-fit py-2  px-8 font-normal text-white"
        >
          Post
        </Button>
      </div>
    </div>
  );
}

export default CreatePost;
