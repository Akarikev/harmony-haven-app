import { meditations } from "@/data/meditations";
import Image from "next/image";

const Meditation: React.FC = () => {
  // Assuming you select the meditations for a specific group, e.g., 'group1'.
  // const selectedMeditations: Meditation[] = meditations["group1"];

  return (
    <div className="p-4">
      <h1 className="login_text text-[#0f172a] text-3xl font-medium ">
        Meditations 🧘‍♀️
      </h1>
      {/* <MeditationList meditations={selectedMeditations} /> */}

      <div className=" flex flex-col lg:flex lg:flex-row lg:gap-x-3">
        {/* <Image
          src={meditations.popular ? meditations.popular[2].image : ""}
          width={100}
          height={100}
          alt={
            meditations.popular.length > 0 ? meditations.popular[0].title : ""
          }
          className="object-contain"
        />

        <audio controls className="">
          <source
            src={
              meditations.popular.length > 0 ? meditations.popular.uri : ""
            }
          />
        </audio> */}

        {meditations.popular.map((item) => {
          return (
            <div key={item.id} className="border shadow-md rounded-md p-2 ">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full object-contain rounded-md"
              />
              <h1 className="text-center">{item.title}</h1>
              <audio controls className="  w-40 rounded-lg  ">
                <source src={item.uri} />
              </audio>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meditation;
