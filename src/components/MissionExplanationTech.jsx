import React from "react";
const MissionExplanationTech = () => {
  return (
    <div className="conatiner relative z-[9] w-[1350px] m-auto flex flex-col items-center text-center ">
      <div className="titel bg-red-600 mq975:text-[24px] Bord m-0 Bord text-inherit tracking-[0.12em] font-inherit text-transparent !bg-clip-text [background:linear-gradient(83.88deg,_#7d26cd,_#e2e2e2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
        <h1 className="text-[65px] lg:text-[55px] mq975:text-[44px]">
          Intro To The mISSIon
        </h1>
      </div>
      <div className="per relative top-[-50px] Segoe text-[30px] lg:text-[20px] mq975:text-[17px] text-white">
        <p>Each character explains their part in saving the world.</p>
      </div>
      <div className="verses flex flex-col gap-[50px]">
        <div className="vers cursor-pointer text-[20px] lg:text-[10px] mq975:text-[8px] text-white Bord px-[20px] py-[20px] [background:linear-gradient(90deg,_#7d26cd,_#171717)] border-[3px] border-solid border-darkblue rounded-3xl">
          <h1>One Piece: Artificial intelligence </h1>
        </div>
        <div className="vers cursor-pointer text-[20px] lg:text-[10px] mq975:text-[8px] text-white Bord px-[20px] py-[20px] [background:linear-gradient(90deg,_#7d26cd,_#171717)] border-[3px] border-solid border-darkblue rounded-3xl">
          <h1>SheRlock HOlmEs: Problem Solving</h1>
        </div>
        <div className="vers cursor-pointer text-[20px] lg:text-[10px] mq975:text-[8px] text-white Bord px-[20px] py-[20px] [background:linear-gradient(90deg,_#7d26cd,_#171717)] border-[3px] border-solid border-darkblue rounded-3xl">
          <h1>OWAtch DOGs: Cyber Security </h1>
        </div>
        <div className="vers cursor-pointer text-[20px] lg:text-[10px] mq975:text-[8px] text-white Bord px-[20px] py-[20px] [background:linear-gradient(90deg,_#7d26cd,_#171717)] border-[3px] border-solid border-darkblue rounded-3xl">
          <h1>Dr STRanGe: Design</h1>
        </div>
      </div>
    </div>
  );
};

export default MissionExplanationTech;
