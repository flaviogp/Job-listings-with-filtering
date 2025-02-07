import Card from "./card";

import data from "../data/data.json";
import { DataType } from "../types";

const MainContainer = () => {
  const _data: DataType[] = JSON.parse(JSON.stringify(data));
  return (
    <main className="bg-light-grayish-cyan-bg container flex flex-col justify-center space-y-10 p-5 py-15">
      {_data.map((job) => (
        <Card data={job} />
      ))}
    </main>
  );
};
export default MainContainer;
