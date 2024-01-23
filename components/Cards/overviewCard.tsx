import React from "react";

type Iprops={
    icon:React.ReactNode;
    heading:string;
    amount:string|number
}

const OverviewCards = ({icon,heading,amount}:Iprops) => {
    return ( 
    <div className="bg-neutral-commonBg min-w-[15.7rem] max-w-[15.7rem] border shadow border-border-secondary hover:border-brand-primary 2xl:max-w-[18rem] rounded">
        <div className="px-[0.94rem] flex flex-col gap-[1.44rem] py-[0.69rem]">
            <div className="p-[0.38rem] bg-neutral-greyBg rounded max-w-[2.25rem]">
                {icon}
            </div>
            <div className="">
                <h2 className="text-lg font-semibold">
               {heading}
                </h2>
                <p className="mt-[0.5rem] text-sm text-text-sub capitalize">
               {heading=="Account Balance" && <span>&#8358;</span>  }  {amount}
                </p>
            </div>
        </div>

    </div> );
}
 
export default OverviewCards;