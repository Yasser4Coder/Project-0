import React, { useEffect } from "react";
import Header from "../components/Header";
import bgimage from "../public/images/background.png";
import "../fonts/bord-demo/Bord.otf";
import LogoutButton from "../components/LogoutButton";
import Logout from "../components/Logout";
import axios from "axios";

const ScoreBoard = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url("${bgimage}")` }}
        className="bg w-full bg-no-repeat bg-cover  h-full relative  min-h-[100vh] max-w-full bg-gray-100 overflow-auto flex flex-col items-start justify-start pt-0 px-0 pb-[93px] box-border gap-[64px] tracking-[normal] mq450:gap-[16px_64px] mq750:gap-[32px_64px]"
      >
        <Header image={<LogoutButton />} event={<Logout />} />
        <div className="w-full max-w-[1200px] shrink mx-auto flex justify-center">
          <section className="w-[1200px] z-[5] bg-gradient-to-r from-[#7D26CD] to-[#E2E2E2] px-[4px] py-[4px] bg-blue-600 mx-[20px] rounded-9xl border-solid box-border">
            <div className="w-full rounded-6xl flex flex-col justify-starth-full pb-[90px] shrink px-[30px] ok bg-gray-100 items-center text-center text-45xl text-blueviolet-200 box-border mq750:gap-[28px_57px] mq750:pt-[23px] mq750:pb-[73px] mq750:box-border">
              <h1 className="Bord text-[60px] tracking-[0.12em] font-normal text-transparent !bg-clip-text [background:linear-gradient(83.88deg,_#7d26cd,_#e2e2e2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 max-w-full mq450:text-19xl">
                Score Board
              </h1>
              <div className="table Segoe-semi-bold  flex-col">
                <div className="table-row">
                  <h1>Team Name</h1>
                  <div className="second text-white">
                    <h1>Badges</h1>
                    <h1>Score</h1>
                  </div>
                </div>
                <div className="table-row">
                  <h1>
                    <span className="text-white one">1</span>
                    <span className="text-white one">.</span>
                    &nbsp;&nbsp; elec_team
                  </h1>
                  <div className="second text-white">
                    <h1 className="one">4</h1>
                    <h1>10000</h1>
                  </div>
                </div>
                <div className="table-row">
                  <h1>
                    <span className="text-white tow">2</span>
                    <span className="text-white tow">.</span>
                    &nbsp;&nbsp; l3s_m1n10ns
                  </h1>
                  <div className="second text-white">
                    <h1 className="tow">3</h1>
                    <h1>9500</h1>
                  </div>
                </div>
                <div className="table-row">
                  <h1>
                    <span className="text-white three">3</span>
                    <span className="text-white three">.</span>
                    &nbsp;&nbsp; h1m
                  </h1>
                  <div className="second text-white">
                    <h1 className="three">2</h1>
                    <h1>7000</h1>
                  </div>
                </div>
                <div className="table-row">
                  <h1>
                    <span className="text-white">4</span>
                    <span className="text-white">.</span>
                    &nbsp;&nbsp; 7h3_l4d13s
                  </h1>
                  <div className="second text-white">
                    <h1 className="">2</h1>
                    <h1>6500</h1>
                  </div>
                </div>
                <div className="table-row">
                  <h1>
                    <span className="text-white">5</span>
                    <span className="text-white">.</span>
                    &nbsp;&nbsp; m0mm13s
                  </h1>
                  <div className="second text-white">
                    <h1 className="">2</h1>
                    <h1>6250</h1>
                  </div>
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
