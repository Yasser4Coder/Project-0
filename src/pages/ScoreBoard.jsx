import React from "react";
import Header from "../components/Header";
import bgimage from "../public/images/background.png";
import "../fonts/bord-demo/Bord.otf";
import LogoutButton from "../components/LogoutButton";

const ScoreBoard = () => {
  return (
    <div>
      <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[173px] box-border gap-[64px] tracking-[normal] mq450:gap-[16px_64px] mq750:gap-[32px_64px]">
        <img
          className="w-full h-[1536px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
          alt=""
          src={bgimage}
        />
        <Header image={<LogoutButton />} />
        <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <section className="w-[1120px] rounded-9xl bg-gray-100 box-border overflow-auto shrink-0 flex flex-col items-center justify-start pt-14 pb-[173px] pr-9 pl-9 pl-[21px] gap-[57px] max-w-full z-[1] text-center text-45xl text-blueviolet-200 font-bord-demo border-[3px] border-solid border-blueviolet-200 lg:pt-9 lg:pb-28 lg:box-border mq750:gap-[28px_57px] mq750:pt-[23px] mq750:pb-[73px] mq750:box-border">
            <div className="w-[931px] flex flex-row items-start justify-center py-0 pr-0.5 pl-0 box-border max-w-full">
              <h1 className="m-0 Bord w-[645px] relative text-inherit tracking-[0.12em] font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(83.88deg,_#7d26cd,_#e2e2e2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 max-w-full mq540:text19xl mq450:text-19xl mq1050:text-32xl">
                ScoreBORD
              </h1>
            </div>
            <div className="table Segoe-semi-bold flex flex-col">
              <div className="table-row">
                <h1>Team Name</h1>
                <div className="second text-white">
                  <h1>Badges</h1>
                  <h1>Score</h1>
                </div>
              </div>
              <div className="table-row">
                <h1>
                  <span>1</span>
                  <span>.</span>
                  elec_team
                </h1>
                <div className="second text-white">
                  <h1>4</h1>
                  <h1>10000</h1>
                </div>
              </div>
              <div className="table-row">
                <h1>
                  <span>1</span>
                  <span>.</span>
                  elec_team
                </h1>
                <div className="second text-white">
                  <h1>4</h1>
                  <h1>10000</h1>
                </div>
              </div>
              <div className="table-row">
                <h1>
                  <span>1</span>
                  <span>.</span>
                  elec_team
                </h1>
                <div className="second text-white">
                  <h1>4</h1>
                  <h1>10000</h1>
                </div>
              </div>
              <div className="table-row">
                <h1>
                  <span>1</span>
                  <span>.</span>
                  elec_team
                </h1>
                <div className="second text-white">
                  <h1>4</h1>
                  <h1>10000</h1>
                </div>
              </div>
              <div className="table-row">
                <h1>
                  <span>1</span>
                  <span>.</span>
                  elec_team
                </h1>
                <div className="second text-white">
                  <h1>4</h1>
                  <h1>10000</h1>
                </div>
              </div>
              <div className="table-row">
                <h1>
                  <span>1</span>
                  <span>.</span>
                  elec_team
                </h1>
                <div className="second text-white">
                  <h1>4</h1>
                  <h1>10000</h1>
                </div>
              </div>
              <div className="table-row">
                <h1>
                  <span>1</span>
                  <span>.</span>
                  elec_team
                </h1>
                <div className="second text-white">
                  <h1>4</h1>
                  <h1>10000</h1>
                </div>
              </div>
              <div className="table-row">
                <h1>
                  <span>1</span>
                  <span>.</span>
                  elec_team
                </h1>
                <div className="second text-white">
                  <h1>4</h1>
                  <h1>10000</h1>
                </div>
              </div>
              <div className="table-row">
                <h1>
                  <span>1</span>
                  <span>.</span>
                  elec_team
                </h1>
                <div className="second text-white">
                  <h1>4</h1>
                  <h1>10000</h1>
                </div>
              </div>
              <div className="table-row">
                <h1>
                  <span>1</span>
                  <span>.</span>
                  elec_team
                </h1>
                <div className="second text-white">
                  <h1>4</h1>
                  <h1>10000</h1>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ScoreBoard;
