import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MissionExplanationTech = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [verses, setVerses] = useState();
  useEffect(() => {
    const getVerses = async () => {
      try {
        const response = await axios.get("/api/verses", {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        setVerses(response.data);
      } catch (err) {
        navigate("/login");
      }
    };
    getVerses();
  }, []);
  return (
    <div className="conatiner relative z-[9] w-[1000px] mq1025:w-[750px] m-auto flex flex-col items-center text-center ">
      <div className="titel mq975:text-[24px] Bord m-0 Bord text-inherit tracking-[0.12em] font-inherit text-transparent !bg-clip-text [background:linear-gradient(83.88deg,_#7d26cd,_#e2e2e2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
        <h1 className="text-[55px] lg:text-[35px] mq975:text-[28px]">
          Intro To The mISSIon
        </h1>
      </div>
      <div className="per relative top-[-50px] Segoe text-[28px] lg:text-[20px] mq975:text-[17px] mq975:top-[-20px] text-white">
        <p>Each character explains their part in saving the world.</p>
      </div>
      <div className="verses w-full flex flex-col gap-[50px]">
        {verses &&
          verses.map((verse) => (
            <div
              key={verse.id}
              className="px-[3px] py-[3px] rounded-6xl bg-gradient-to-r from-[#7D26CD] to-[#E2E2E2]"
            >
              <div className="vers cursor-pointer text-[16px] lg:text-[10px] mq975:text-[8px] text-white Bord px-[10px] py-[10px] [background:linear-gradient(90deg,_#7d26cd,_#171717)] rounded-3xl">
                <h1>{verse.title}</h1>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MissionExplanationTech;
