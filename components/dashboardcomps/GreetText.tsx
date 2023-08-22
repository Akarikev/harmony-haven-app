import { FC } from "react";
import { Videos } from "@/data/videos";
interface GreetTextProps {}

const GreetText: FC<GreetTextProps> = () => {
  return (
    <div>
      <h1 className="mt-4 px-9">Top Videos</h1>
      <div className="flex flex-col md:grid md:grid-cols-4 gap-4 md:gap-x-10 md:gap-y-14">
        {Videos.map((item) => {
          return (
            <div key={item.id}>
              <div className=" px-9">
                <iframe
                  src={item.embed}
                  allowFullScreen
                  className="rounded-md shadow-lg md:w-[250px] w-full h-[200px]"
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GreetText;
