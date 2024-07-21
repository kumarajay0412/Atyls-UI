import CreatePost from "@/components/create-post/CreatePost";
import Post from "@/components/post";
import { DUMMY_POSTS } from "@/constants/common";
import SignInModal from "@/molecules/sign-in-modal";
import SignUpModal from "@/molecules/sign-up-modal";

export default function Home() {
  return (
    <>
      <main className={`flex min-h-screen flex-col items-center justify-start py-24 max-w-7xl mx-auto w-full p-2`}>
        <div className="w-full flex flex-col gap-4 max-w-[700px] ">
          <div className="text-gray-90 text-heading4 ">Hello Jane</div>
          <div className="text-gray-90 text-heading6 max-w-[500px]">
            How are you doing today? Would you like to share something with the
            community 🤗
          </div>
          <CreatePost />
          {DUMMY_POSTS.map((post) => (
            <Post
              key={post.id}
              user={post.user}
              edited={post.edited}
              emoji={post.emoji}
              commentCount={post.commentCount}
              timeStamp={post.timeStamp}
              post_text={post.post_text}
            />
          ))}
        </div>
      </main>
      <SignInModal />
      <SignUpModal />
    </>
  );
}
