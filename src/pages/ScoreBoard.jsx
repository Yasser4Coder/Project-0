import React from "react";
import Header from "../components/Header";
import bgimage from "../public/images/background.png";
import "../fonts/bord-demo/Bord.otf";
import LogoutButton from "../components/LogoutButton";
import Logout from "../components/Logout";

const ScoreBoard = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url("${bgimage}")` }}
        className="bg w-full h-full relative min-h-[100vh] max-w-full bg-gray-100 overflow-auto flex flex-col items-start justify-start pt-0 px-0 pb-[93px] box-border gap-[64px] tracking-[normal] mq450:gap-[16px_64px] mq750:gap-[32px_64px]"
      >
        <Header image={<LogoutButton />} event={<Logout />} />
        <div className="w-[1200px] z-[5] max-w-full flex mx-auto">
          <section className="max-w-full w-full flex flex-col mx-[20px] justify-start mx-auto h-full pb-[90px] shrink rounded-9xl pl-[30px] pr-[30px] ok bg-gray-100 box-border flex flex-col items-center text-center text-45xl text-blueviolet-200 border-[3px] border-solid border-blueviolet-200 box-border lg:box-border mq750:gap-[28px_57px] mq750:pt-[23px] mq750:pb-[73px] mq750:box-border">
            <h1 className="Bord text-[60px] tracking-[0.12em] font-normal text-transparent !bg-clip-text [background:linear-gradient(83.88deg,_#7d26cd,_#e2e2e2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 max-w-full mq450:text-19xl">
              Score Board
            </h1>
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
                  <span className="text-white">1</span>
                  <span className="text-white">.</span>
                  &nbsp;&nbsp; elec_team
                </h1>
                <div className="second text-white">
                  <h1>4</h1>
                  <h1>10000</h1>
                </div>
              </div>
              <div className="table-row">
                <h1>
                  <span className="text-white">1</span>
                  <span className="text-white">.</span>
                  &nbsp;&nbsp; elec_team
                </h1>
                <div className="second text-white">
                  <h1>4</h1>
                  <h1>10000</h1>
                </div>
              </div>
              <div className="table-row">
                <h1>
                  <span className="text-white">1</span>
                  <span className="text-white">.</span>
                  &nbsp;&nbsp; elec_team
                </h1>
                <div className="second text-white">
                  <h1>4</h1>
                  <h1>10000</h1>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
