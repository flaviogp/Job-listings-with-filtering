import Card from "./card";

import data from "../data/data.json";
import { DataType } from "../types";
import Filter from "./filter";
import { useState } from "react";

const MainContainer = () => {
  const [filterList, setFilterList] = useState<string[]>([]);

  const handleSetFilter = (badge: string) => {
    const hasBadge = filterList?.find((value) => value === badge);
    if (hasBadge) return;
    setFilterList((prev) => [...(prev as string[]), badge]);
  };

  const handleRemoveFilter = (badge: string) => {
    const oldFilterList = [...filterList];
    const newList = oldFilterList.filter((item) => item !== badge);
    setFilterList(newList);
  };

  const _data: DataType[] = JSON.parse(JSON.stringify(data));
  return (
    <main className="bg-light-grayish-cyan-bg relative container flex flex-col justify-center space-y-10 p-5 py-24">
      {filterList.length >= 1 && (
        <Filter badges={filterList} handleRemoveFilter={handleRemoveFilter} />
      )}
      {_data.map((job) => (
        <Card key={job.company} data={job} handleSetFilter={handleSetFilter} />
      ))}
    </main>
  );
};
export default MainContainer;
