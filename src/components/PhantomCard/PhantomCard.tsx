import { useEffect, useState } from "react";
import { MoreDotsSVG } from "../Logo/MoreDots";
import Toggle from "react-toggle";
import "./phantomCard.css";
import { IPhantom } from "../../data/phantoms";
import Button from "../Button/Button";

interface PhantomCardProps {
  phantomCard: IPhantom;
  handleDeletePhantom: (id: string) => void;
}

const PhantomCard = ({
  phantomCard,
  handleDeletePhantom,
}: PhantomCardProps) => {
  const [isToggleMenuOpen, setToggleMenuOpen] = useState(false);
  const [isLaunched, setIsLaunched] = useState(false);
  const [timeRemain, setTimeRemain] = useState<number>(
    phantomCard.nextLaunchIn || 0
  );

  const formatTimeRemain = (timeRemain: number) => {
    const hours = Math.floor(timeRemain / 3600);
    const minutes = Math.floor((timeRemain % 3600) / 60);
    const remainingSeconds = timeRemain % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (timeRemain > 0) {
  //       setTimeRemain(timeRemain - 1);
  //     } else {
  //       if (phantomCard.nextLaunchIn) {
  //         setTimeRemain(phantomCard.nextLaunchIn);
  //       }
  //     }
  //   }, 1000);
  //   return () => clearTimeout(timeout);
  // }, [timeRemain]);

  const toggleMenu = () => {
    setToggleMenuOpen(!isToggleMenuOpen);
  };

  const onDeletePhantom = (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Phantom ?"
    );
    if (confirmDelete) {
      handleDeletePhantom(id);
    }
    setToggleMenuOpen(!isToggleMenuOpen);
  };
  const handleLaunchChange = () => {
    setIsLaunched(!isLaunched);
  };

  const dropDownMenu = (
    <div className='relative'>
      <label
        data-testid='dropDownMenu'
        tabIndex={0}
        className=''
        onClick={toggleMenu}
      >
        <MoreDotsSVG className='w-4 hover:cursor-pointer' />
      </label>
      {isToggleMenuOpen && (
        <ul
          className='shadow-3xl absolute right-2 ml-4 p-4 rounded-md border-red flex flex-col gap-2'
          tabIndex={0}
        >
          <li>
            <button data-testid='dropDownMenu-rename'>Rename</button>
          </li>
          <li>
            <label data-testid='dropDownMenu-duplicate'>Duplicate</label>
          </li>

          <li>
            <label
              data-testid='dropDownMenu-delete'
              onClick={() => onDeletePhantom(phantomCard.id)}
              className=' text-error '
            >
              Delete
            </label>
          </li>
        </ul>
      )}
    </div>
  );

  return (
    <div className='bg-bcg-white px-5 flex flex-col shadow-md p-3 rounded-xl w-full hover:shadow-2xl h-[14.625rem]'>
      <div className='h-2/5 mb-3 flex items-center justify-between hover:cursor-grab'>
        <div className='flex gap-10'>
          {phantomCard.manifest.tags.categories.map((category) => (
            <Button
              key={category}
              className='border rounded-xl p-3 text-bcg-filter font-bold'
            >
              {category}
            </Button>
          ))}
        </div>
        <span>{dropDownMenu}</span>
      </div>
      <div className='h-2/5 mb-3 hover:cursor-pointer'>
        <span className='text-secondary-text'>{phantomCard.script}</span>
        <h2 className='font-bold text-xl'>{phantomCard.name}</h2>
      </div>
      <div className='h-2/5 flex items-center justify-between space-x-1 '>
        <div className='flex gap-5 text-secondary-text'>
          <Toggle
            className='toggle'
            defaultChecked={isLaunched}
            onChange={handleLaunchChange}
            icons={false}
            id='cheese-status'
          />
          <p className={` ${isLaunched ? "text-bcg-filter font-bold" : ""}`}>
            {isLaunched ? "on" : "off"}
          </p>
          <p>{phantomCard.launchType}</p>
          <p>{phantomCard.nextLaunchIn && formatTimeRemain(timeRemain)}</p>
        </div>
        <p>slot</p>
      </div>
    </div>
  );
};

export default PhantomCard;
