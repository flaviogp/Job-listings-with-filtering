import Card from "./card";

import data from "../data/data.json";
import { DataType } from "../types";

const Main = () => {
  const _data: DataType[] = JSON.parse(JSON.stringify(data));
  return (
    <main className="bg-light-grayish-cyan-bg container flex flex-col justify-center space-y-5 p-5">
      {_data.map((job) => (
        <Card {...job} />
      ))}
    </main>
  );
};
export default Main;
