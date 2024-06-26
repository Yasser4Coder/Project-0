import React, { useEffect , useState } from "react";
import Header from "../components/Header";
import bgimage from "../public/images/background.png";
import LogoutButton from "../components/LogoutButton";
import Logout from "../components/Logout";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const VersePage = (props) => {
  const [verse, setVerse] = useState();
  
  useEffect(() => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.documentElement.scrollTop = 0;
    }
  }, []);
  const token = Cookies.get("token");
  const { id } = useParams();
  useEffect(() => {
    const getVerse = async () => {
      try {
        const response = await axios.get(`/api/verse/${id}`, {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        console.log(response.data)
        setVerse(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getVerse();
  }, [id]);
  return (
    <div
      style={{ backgroundImage: `url("${bgimage}")` }}
      className="w-full bg-no-repeat bg-cover  min-h-screen relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-28 box-border gap-[72px] tracking-[normal] mq450:gap-[28px_112px] mq750:gap-[56px_112px]"
    >
      <Header image={<LogoutButton />} event={<Logout />} />
      <main className="box-border flex flex-row items-start self-stretch justify-center max-w-full px-5 py-0">
        <div className="container">
          {/* body content */}
          <div className="flex flex-col gap-2 content">
            {/*  content */}
            {/* head of content */}
            <div className="flex flex-col">
              <h2 className="capitilize Bord text-[4rem]  !bg-clip-text [background:linear-gradient(83.88deg,#7d26cd,#e2e2e2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] m-0">
                {id == 1
                  ? "One Piece"
                  : id ==2
                  ? "Sherlock HOlmes"
                  : id == 3
                  ? "WatcH DOgS"
                  : id == 4
                  ? "Dr StrangE"
                  : ""}
              </h2>
              <p className=" text-[24px] Segoe-semi-bold tracking-wider text-white w-[1060px]">
                {id == 1
                  ? "Vegapunk resolved to create the solution's mind and discovered that the Gorosei held the relevant data."
                  : id == 2
                  ? "At Vegapunk's request, Sherlock set off on a mission to track down five renowned scientists: Marie Curie, Nikola Tesla, Guglielmo Marconi, James Moriarty, and Charles Babbage, in order to build a quantum computer."
                  : id == 3
                  ? "Aiden Pearce, who was initially uninterested, became involved after making a deal with Doctor Strange. Pearce pledged to find top-tier hacker defense measures in his reality in exchange for information on his daughter's murderers. Doctor Strange insisted on this precaution to preserve the technology they were developing."
                  : id == 4
                  ? "Doctor Strange's powers dwindled following the tragedy, and his attempts to reclaim them led him to recollect a forgotten spell. To master it, he needed to gather certain components and knowledge."
                  : ""}
              </p>
            </div>

            {/* cards  */}

            {verse && verse.challenges ? (
              <div className="cards mt-[30px] grid grid-cols-3 gap-7">
                {verse.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="cursor-pointer bg-[#0D6842] border-[3px] border-solid border-[#7D26CD] rounded-[2.5rem] h-[300px]"
                  >
                  </div>
                ))}
              </div>
            ) : (
              <p className=" text-[20px] Segoe-meduim tracking-wider text-white w-[1060px]">No challenges available for this verse. Wait for the wave to come!</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default VersePage;



