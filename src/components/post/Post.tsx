/* eslint-disable @next/next/no-img-element */
import { DIALOGS } from "@/constants/common";
import useDialogURL from "@/hooks/useDialogURL";
import React from "react";

interface User {
  name: string;
  profile_image: string;
}

interface PostProps {
  user: User;
  edited: boolean;
  emoji: string;
  commentCount: number;
  timeStamp: string;
  post_text: string;
}

const Post: React.FC<PostProps> = ({
  user,
  edited,
  emoji,
  commentCount,
  timeStamp,
  post_text,
}) => {
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
    <div 
    onClick={openModal}
    className="w-full border-[2px] border-gray-50 rounded-lg p-4 bg-gray-60 mt-2 hover:bg-gray-60/90 transition-all duration-300">
      <div className="flex w-full justify-between items-center h-fit">
        <div className="text-gray-90 text-heading5 mb-4 font-medium flex items-center gap-4">
          <img
            src={user.profile_image}
            alt="profile_image"
            className="!h-[44px] !w-[44px] object-contain rounded-full "
          />
          <div className=" flex flex-col gap-2 items-start">
            <div className="text-gray-90 text-heading3 font-normal">
              {user.name}
            </div>
            <div className="text-gray-80 text-heading6 font-normal">
              {timeStamp} {edited && " • Edited"}
            </div>
          </div>
        </div>
        <img src="/Dots_Horizontal.png" alt="dots" className="cursor-pointer w-[20px] h-[20px]" />
      </div>

      <div className="w-full rounded-lg bg-bBlack-90 p-4 flex h-full flex-row gap-4">
        <div className="rounded-full bg-gray-60 flex items-center justify-center h-fit w-fit p-4">
          <img
            src={emoji}
            alt="emoji"
            className="!h-[18px] !w-[18px] object-contain "
          />
        </div>
        <div className="placeholder-gray-80 min-h-[60px] w-full bg-transparent  outline-none text-gray-80 text-heading3 font-normal leading-6">
          {post_text}
        </div>
      </div>
      <div className="flex w-full justify-start mt-4 cursor-pointer">
        <img src="/chat_bubble.png" alt="send" className="w-[20px] h-[20px]" />
        <div className="text-gray-80 text-heading6 font-normal ml-2  flex justify-center items-center">
          {commentCount} comments
        </div>
      </div>
    </div>
  );
};

export default Post;
