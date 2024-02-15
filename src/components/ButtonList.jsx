import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const name = ['All','Tarak Mehta', 'Podcast','Akshay Saini','React','Thrillers','Comedy','Rohit Sharma','Javascript','Rohit','dsfs','dsfsdfds','History']
  return (
    <div className="flex w-full fixed py-3 flex-row whitespace-nowrap  overflow-x-scroll text-white bg-zinc-900 no-scrollbar">
     {
      name?.map((name)=> <Button name={name}/>)
     }
    </div>
  );
};

export default ButtonList;
