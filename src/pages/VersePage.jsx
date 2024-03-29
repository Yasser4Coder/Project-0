import React from "react";
import Header from "../components/Header";
import bgimage from "../public/images/background.png";
import LogoutButton from "../components/LogoutButton";
import Logout from "../components/Logout";

const VersePage = (props) => {
  return (
    <div
      style={{ backgroundImage: `url("${bgimage}")` }}
      className="w-full bg-no-repeat bg-cover  min-h-[100vh] relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-28 box-border gap-[112px] tracking-[normal] mq450:gap-[28px_112px] mq750:gap-[56px_112px]"
    >
      <Header image={<LogoutButton />} event={<Logout />} />
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">

        <div className="w-[1335px] ">
          {/* body content */}
            <div className="content flex flex-col gap-2">
                {/*  content */}
                {/* head of content */}
                <div className="flex flex-col">
                <h2 className="capitilize Bord text-[4rem]  !bg-clip-text [background:linear-gradient(83.88deg,#7d26cd,#e2e2e2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] m-0">{props.title}</h2>
                <p className=" text-[24px] Segoe-semi-bold tracking-wider text-white w-[1060px]">{props.para}</p>
                </div>

                {/* cards  */}

                <div className="cards grid grid-cols-3 gap-7">
                  <div className="bg-[#0D6842] border-[3px] border-solid border-[#26CD87] rounded-[2.5rem] h-[300px]"></div>
                  <div className="bg-[#2D0A4E] border-[3px] border-solid border-[#7D26CD] rounded-[2.5rem] h-[300px]"></div>
                  <div className="bg-[#2D0A4E] border-[3px] border-solid border-[#7D26CD] rounded-[2.5rem] h-[300px]"></div>
                  <div className="bg-[#2D0A4E] border-[3px] border-solid border-[#7D26CD] rounded-[2.5rem] h-[300px]"></div>
                  <div className="bg-[#2D0A4E] border-[3px] border-solid border-[#7D26CD] rounded-[2.5rem] h-[300px]"></div>
                  <div className="bg-[#2D0A4E] border-[3px] border-solid border-[#7D26CD] rounded-[2.5rem] h-[300px]"></div>

                </div>

            </div>
        </div>

      </main>
    </div>
  );
};

export default VersePage;
