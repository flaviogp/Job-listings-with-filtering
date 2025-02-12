import { RxCross2 } from "react-icons/rx";

interface FilterProps {
  badges: string[];
  handleRemoveFilter: (badge: string) => void;
  handleClearFilterList: () => void;
}

const Filter = ({
  badges,
  handleRemoveFilter,
  handleClearFilterList,
}: FilterProps) => {
  return (
    <div className="scroll-style absolute top-[-28px] right-0 left-0 mx-5 flex min-h-14 max-w-[1000px] justify-between gap-4 overflow-x-auto rounded-lg bg-white p-4 shadow-2xl">
      <div className="flex gap-4">
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
      <button
        className="text-very-dark-grayish-cyan hover:text-desaturated-dark-cyan invisible cursor-pointer font-bold hover:underline md:visible"
        onClick={() => handleClearFilterList()}
      >
        Clear
      </button>
    </div>
  );
};

export default Filter;
