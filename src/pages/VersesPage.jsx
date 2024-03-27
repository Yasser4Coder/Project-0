import React from "react";
import Header from "../components/Header";
import "../fonts/bord-demo/Bord.otf";
import bgimage from "../public/images/background.png";
import LogoutButton from "../components/LogoutButton";
import Logout from "../components/Logout";

import MissionExplanationTech from "../components/MissionExplanationTech";

const VersesPage = () => {
  return (
    <div>
      <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[202px] box-border gap-[79px] tracking-[normal] mq450:gap-[20px_79px] mq750:gap-[39px_79px]">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={bgimage}
        />
        <Header image={<LogoutButton />} event={<Logout />} />
        <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <MissionExplanationTech />
        </main>
      </div>
    </div>
  );
};

export default VersesPage;