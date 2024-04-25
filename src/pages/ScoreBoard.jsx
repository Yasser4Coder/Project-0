import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import bgimage from "../public/images/background.png";
import "../fonts/bord-demo/Bord.otf";
import LogoutButton from "../components/LogoutButton";
import Logout from "../components/Logout";
import axios from "axios";
import Cookies from "js-cookie";

const ScoreBoard = () => {
  const [first, setFirst] = useState({});
  const [second, setSecond] = useState({});
  const [third, setThird] = useState({});
  const [fourth, setFourth] = useState({});
  const [fifth, setFifth] = useState({});
  const [sixth, setSixth] = useState({});
  const [seventh, setSeventh] = useState({});
  const [eighth, setEighth] = useState({});


  const token = Cookies.get("token");
  useEffect(() => {
    const getScore = async () => {
      try {
        const response = await axios.get("api/scoreboard", {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        setFirst(response.data[0]);
        setSecond(response.data[1]);
        setThird(response.data[2]);
        setFourth(response.data[3]);
        setFifth(response.data[4]);
        setSixth(response.data[5]);
        setSeventh(response.data[6]);
        setEighth(response.data[7]);
      } catch (err) {
        console.log(err)
      }
    };
    getScore();
  }, []);
  return (
    <div>
      <div
        style={{ backgroundImage: `url("${bgimage}")` }}
        className="bg w-full bg-no-repeat bg-cover  h-full relative  min-h-screen max-w-full bg-gray-100 overflow-auto flex flex-col items-start justify-start pt-0 px-0 pb-[93px] box-border gap-[64px] tracking-[normal] mq450:gap-[16px_64px] mq750:gap-[32px_64px]"
      >
        <Header image={<LogoutButton />} event={<Logout />} />
        <div className="w-full max-w-[1050px] shrink mx-auto flex justify-center">
          <section className="w-[1200px] z-[5] bg-gradient-to-r from-[#7D26CD] to-[#E2E2E2] px-[4px] py-[4px] bg-blue-600 mx-[20px] rounded-9xl border-solid box-border">
            <div className="w-full rounded-6xl flex flex-col justify-starth-full pb-[90px] shrink px-[30px] ok bg-gray-100 items-center text-center text-45xl text-blueviolet-200 box-border mq750:gap-[28px_57px] mq750:pt-[23px] mq750:pb-[73px] mq750:box-border">
              <h1 className="Bord text-[60px] tracking-[0.12em] font-normal text-transparent !bg-clip-text [background:linear-gradient(83.88deg,_#7d26cd,_#e2e2e2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 max-w-full mq450:text-19xl">
                Score Board
              </h1>
              <div className="flex-col table Segoe-semi-bold">
                <div className="table-row">
                  <h1>Team Name</h1>
                  <div className="text-white second">
                    <h1>Badges</h1>
                    <h1>Score</h1>
                  </div>
                </div>
                {first && (
                  <div className="table-row">
                    <h1>
                      <span className="text-white one">1</span>
                      <span className="text-white one">.</span>
                      &nbsp;&nbsp; {first.name}
                    </h1>
                    <div className="text-white second">
                      <h1 className="one">{first.nbBadge}</h1>
                      <h1>{first.score}</h1>
                    </div>
                  </div>
                )}
                {second && (
                  <div className="table-row">
                    <h1>
                      <span className="text-white tow">2</span>
                      <span className="text-white tow">.</span>
                      &nbsp;&nbsp; {second.name}
                    </h1>
                    <div className="text-white second">
                      <h1 className="tow">{second.nbBadge}</h1>
                      <h1>{second.score}</h1>
                    </div>
                  </div>
                )}
                {third && (
                  <div className="table-row">
                    <h1>
                      <span className="text-white three">3</span>
                      <span className="text-white three">.</span>
                      &nbsp;&nbsp; {third.name}
                    </h1>
                    <div className="text-white second">
                      <h1 className="three">{third.nbBadge}</h1>
                      <h1>{third.score}</h1>
                    </div>
                  </div>
                )}
                {fourth && (
                  <div className="table-row">
                    <h1>
                      <span className="text-white three">4</span>
                      <span className="text-white three">.</span>
                      &nbsp;&nbsp; {fourth.name}
                    </h1>
                    <div className="text-white second">
                      <h1 className="three">{fourth.nbBadge}</h1>
                      <h1>{fourth.score}</h1>
                    </div>
                  </div>
                )}
                {fifth && (
                  <div className="table-row">
                    <h1>
                      <span className="text-white three">5</span>
                      <span className="text-white three">.</span>
                      &nbsp;&nbsp; {fifth.name}
                    </h1>
                    <div className="text-white second">
                      <h1 className="three">{fifth.nbBadge}</h1>
                      <h1>{fifth.score}</h1>
                    </div>
                  </div>
                )}
                {sixth && (
                  <div className="table-row">
                    <h1>
                      <span className="text-white three">6</span>
                      <span className="text-white three">.</span>
                      &nbsp;&nbsp; {sixth.name}
                    </h1>
                    <div className="text-white second">
                      <h1 className="three">{sixth.nbBadge}</h1>
                      <h1>{sixth.score}</h1>
                    </div>
                  </div>
                )}
                {seventh && (
                  <div className="table-row">
                    <h1>
                      <span className="text-white three">7</span>
                      <span className="text-white three">.</span>
                      &nbsp;&nbsp; {seventh.name}
                    </h1>
                    <div className="text-white second">
                      <h1 className="three">{seventh.nbBadge}</h1>
                      <h1>{seventh.score}</h1>
                    </div>
                  </div>
                )}
                {eighth && (
                  <div className="table-row">
                    <h1>
                      <span className="text-white three">8</span>
                      <span className="text-white three">.</span>
                      &nbsp;&nbsp; {eighth.name}
                    </h1>
                    <div className="text-white second">
                      <h1 className="three">{eighth.nbBadge}</h1>
                      <h1>{eighth.score}</h1>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
