import SignUp from "@/components/sign-up/SignUp";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center`}>
      <img src='/Logo.png' alt="logo" className="w-[40px] h-[40px] mb-10" />
      <div className="max-w-[463px] w-full  h-fit bg-gray-60 border-[1px] rounded-lg px-6 py-12 flex flex-col items-center justify-center border-gray-50">
    
        <SignUp />
      </div>
    </main>
  );
}
