import Card from "./card";

import data from "../data/data.json";
import { DataType } from "../types";
import Filter from "./filter";
import { useEffect, useState } from "react";

const MainContainer = () => {
  const _data: DataType[] = JSON.parse(JSON.stringify(data));

  const [filterList, setFilterList] = useState<string[]>([]);
  const [jobList, setJobList] = useState<DataType[]>(_data);

  useEffect(() => {
    const handleFilterJobs = () => {
      if (filterList.length === 0) setJobList(_data);
      console.log(filterList);
      let newJobList: DataType[] = [];
      filterList.map((f) => {
        const d = _data.filter((d) => d.languages.includes(f));
        console.log(d);
        newJobList = [...d];
      });
      if (newJobList.length === 0) return;
      setJobList([...newJobList]);
      console.log(jobList);
    };

    handleFilterJobs();
  }, [filterList]);

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

  return (
    <main className="bg-light-grayish-cyan-bg relative container flex flex-col justify-center space-y-10 p-5 py-24">
      {filterList.length >= 1 && (
        <Filter badges={filterList} handleRemoveFilter={handleRemoveFilter} />
      )}
      {jobList.map((job) => (
        <Card key={job.company} data={job} handleSetFilter={handleSetFilter} />
      ))}
    </main>
  );
};
export default MainContainer;
