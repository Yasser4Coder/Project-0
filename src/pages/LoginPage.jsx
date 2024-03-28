import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import bgimage from "../public/images/background.png";
import "../fonts/bord-demo/Bord.otf";
import LoginButton from "../components/LoginButton";
import Login from "../components/Login";
import { useEffect } from "react";

const LoginPage = () => {
  useEffect(() => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.documentElement.scrollTop = 0;
    }
  });
  return (
    <div
      style={{ backgroundImage: `url("${bgimage}")` }}
      className="bg w-full h-full min-h-[100vh] relative bg-gray-100 flex flex-col items-start justify-start pt-0 px-0 pb-9 object-cover box-border gap-[70px] tracking-[normal] mq450:gap-[28px_112px] mq750:gap-[56px_112px]"
    >
      <Header image={<LoginButton />} event={<Login />} />
      <main className="self-stretch flex flex-row items-start justify-center py-0 pb-[25px] px-5 box-border max-w-full">
        <LoginForm />
      </main>
    </div>
  );
};

export default LoginPage;
