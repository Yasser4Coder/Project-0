import Header from "../components/Header";
import bgimage from "../public/images/background.png";
import "../fonts/bord-demo/Bord.otf";
import "../fonts/SegoeUI-VF/Segoe-UI-Variable-Static-Small-Light.ttf";
import { useNavigate } from "react-router-dom";
import LoginButton from "../components/LoginButton";
import Login from "../components/Login";
const WelcomePage = () => {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/login");
  };
  return (
    <div
      style={{ backgroundImage: `url("${bgimage}")` }}
      className="w-full h-full min-h-[100vh] relative bg-gray-100 flex object-cover flex-col items-start justify-start pt-0 px-0 pb-9 box-border gap-[70px] tracking-[normal] mq450:gap-[28px_112px] mq975:gap-[56px_112px]"
    >
      <Header image={<LoginButton />} event={<Login />} />
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-10 box-border max-w-full">
        <section className="w-[1120px]  flex flex-col items-end justify-start gap-[30px] max-w-full text-center text-[48px] text-white font-bord-demo">
          <div className="self-stretch rounded-9xl bg-gray-100 box-border overflow-hidden flex flex-col items-center justify-start pt-4 px-5 pb-[61.5px] gap-[89.5px] max-w-full z-[1] border-[3px] border-solid border-blueviolet-200 mq700:gap-[22px_89.5px] mq700:pt-5 mq700:pb-10 mq700:box-border mq975:gap-[45px_89.5px]">
            <div className="w-[930px] h-2.5 flex flex-row items-start justify-center py-0 pr-2 pl-0 box-border max-w-full">
              <img
                className="h-2.5 w-4 relative z-[2]"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="w-[930px] flex flex-col Bord items-start justify-start gap-[30px] max-w-full">
              <h1 className="m-0 self-stretch h-20 h-full text-inherit font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(83.88deg,_#7d26cd,_#e2e2e2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 mq450:text-10xl mq975:text-19xl">
                <span className="tracking-[0.17em]">WelcomE To</span>
                {` `}
                <span className="tracking-[0.17em]">ProJecT-0</span>
              </h1>
              <h1 className="m-0 Segoe-semi-bold self-stretch h-[336px] text-21xl tracking-[0.16em] mq540:pb-[140px] inline-block shrink-0 mq450:text-5xl mq975:text-13xl">
                From now on your job is to discover the mystery of project-0 by
                solving challenges in artificial intelligence, problem solving,
                cyber security, and design.
              </h1>
            </div>
          </div>
          <div className="w-[1104px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <button
              onClick={handelClick}
              className="cursor-pointer py-3.5 px-5 bg-[transparent] w-[378px] rounded-6xl [background:linear-gradient(92.09deg,_#7d26cd,_#171717)] box-border overflow-hidden shrink-0 flex flex-row items-start justify-center max-w-full z-[1] border-[1px] border-solid border-gainsboro-100 hover:bg-silver-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100"
            >
              <div className="relative Bord text-21xl tracking-[0.16em] font-bord-demo text-white text-center cursor-pointer mq450:text-5xl mq975:text-13xl">
                LoGin
              </div>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WelcomePage;
