import { meditations } from "@/data/meditations";
import Image from "next/image";

const Meditation: React.FC = () => {
  // Assuming you select the meditations for a specific group, e.g., 'group1'.
  // const selectedMeditations: Meditation[] = meditations["group1"];

  return (
    <div>
      <h1 className="text-zinc-700 text-3xl font-medium ">Meditations 🧘‍♀️</h1>
      {/* <MeditationList meditations={selectedMeditations} /> */}

      <div className="p-4 shadow-md rounded-md bg-slate-700">
        <Image
          src={
            meditations.popular.length > 0 ? meditations.popular[0].image : ""
          }
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
              meditations.popular.length > 0 ? meditations.popular[0].uri : ""
            }
          />
        </audio>
      </div>
    </div>
  );
};

export default Meditation;
