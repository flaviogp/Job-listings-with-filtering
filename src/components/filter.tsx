import { RxCross2 } from "react-icons/rx";

interface FilterProps {
  badges: string[];
  handleRemoveFilter: (badge: string) => void;
}

const Filter = ({ badges, handleRemoveFilter }: FilterProps) => {
  return (
    <div className="scroll-style absolute top-[-28px] right-0 left-0 mx-5 flex min-h-14 gap-4 overflow-x-auto rounded-lg bg-white p-4 shadow-2xl">
      {badges.map((badge) => (
        <div
          key={badge}
          className="bg-light-grayish-cyan flex h-7 items-center gap-2 rounded-md pl-2"
        >
          <p className="text-dark-grayish-cyan ont-bold">{badge}</p>
          <button
            className="text-light-grayish-cyan bg-dark-grayish-cyan hover:bg-very-dark-grayish-cyan flex h-full w-7 cursor-pointer items-center justify-center rounded-r-md"
            onClick={() => handleRemoveFilter(badge)}
          >
            <RxCross2 size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Filter;
