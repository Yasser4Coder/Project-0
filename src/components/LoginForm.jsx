const LoginForm = () => {
  return (
    <form className="w-[1120px] rounded-9xl bg-gray-100 box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-16 px-5 pb-[111px] gap-[67px] max-w-full z-[1] text-center text-56xl text-gainsboro-200 font-bord-demo border-[3px] border-solid border-blueviolet-200 mq450:gap-[17px_67px] mq750:gap-[33px_67px] mq750:pt-[42px] mq750:pb-[72px] mq750:box-border">
      <div className="w-[742px] flex flex-col items-start justify-start gap-[48px] max-w-full mq750:gap-[24px_48px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 Bord h-20 w-[400px] relative text-inherit tracking-[0.1em] font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(83.88deg,_#7d26cd,_#e2e2e2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 max-w-full mq450:text-26xl mq750:text-41xl">
            LoGin
          </h1>
        </div>
        <div className="self-stretch rounded-13xl bg-gray-200 box-border flex flex-row items-start justify-start py-8 px-[39px] max-w-full border-[2px] border-solid border-blueviolet-200">
          <div className="h-24 w-[742px] relative rounded-13xl bg-gray-200 box-border hidden max-w-full border-[2px] border-solid border-blueviolet-200" />
          <input
            className="w-full Segoe [border:none] [outline:none] font-segoe-ui-variable text-xl bg-[transparent] h-8 relative tracking-[0.1em] text-gainsboro-200 text-left inline-block max-w-full p-0 z-[1] mq450:text-base"
            placeholder="Team Name (Elec_team)"
            type="text"
          />
        </div>
      </div>
      <div className="w-[742px] flex flex-row items-start justify-start pt-0 px-0 pb-3 box-border max-w-full text-left text-5xl font-segoe-ui-variable">
        <div className="flex-1 rounded-13xl bg-gray-200 box-border flex flex-row items-start justify-start pt-[29px] px-[39px] pb-[35px] max-w-full border-[2px] border-solid border-blueviolet-200">
          <div className="h-24 w-[742px] relative rounded-13xl bg-gray-200 box-border hidden max-w-full border-[2px] border-solid border-blueviolet-200" />
          <input
            className="w-full Segoe [border:none] [outline:none] font-segoe-ui-variable text-xl bg-[transparent] h-8 relative tracking-[0.1em] text-gainsboro-200 text-left inline-block max-w-full p-0 z-[1] mq450:text-base"
            placeholder="Password"
            type="text"
          />
        </div>
      </div>
      <div className="w-[742px] flex flex-row items-start justify-center max-w-full">
        <button
          type="submit"
          className="cursor-pointer py-3.5 px-5 bg-[transparent] w-[362px] rounded-6xl [background:linear-gradient(92.09deg,_#7d26cd,_#171717)] box-border overflow-hidden shrink-0 flex flex-row items-start justify-center max-w-full border-[1px] border-solid border-gainsboro-100 hover:bg-silver-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100"
        >
          <div className="relative Bord text-21xl tracking-[0.16em] font-bord-demo text-white text-center cursor-pointer mq450:text-5xl mq750:text-13xl">
            LoGin
          </div>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
