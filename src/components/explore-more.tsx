import Image from "next/image";

const ExplorMoreOptions = [
  {
    id: 1,
    title: "Quizz Pack",
    desc: "Practice what you learned with bite-sized code challenges.",
    icon: "/tree.png",
  },
  {
    id: 2,
    title: "Video Courses",
    desc: "Learn with structured video lessons taught step-by-step.",
    icon: "/game.png",
  },
  {
    id: 3,
    title: "Community Project",
    desc: "Build real-world apps by collaborating with the community.",
    icon: "/growth.png",
  },
  {
    id: 4,
    title: "Talk with AI",
    desc: "Chat with AI to get help, explanations, and debugging tips.",
    icon: "/start-up.png",
  },
];

export default function ExploreMore() {
  return (
    <div className="mt-10">
      <h2 className="font-game text-3xl mb-2 capitalize">explore more</h2>
      <div className="grid grid-cols-2 gap-5">
        {ExplorMoreOptions.map((option, index) => {
          return (
            <div key={index} className="flex items-center gap-2 p-2 border bg-zinc-900 rounded-xl" >
              <Image
                src={option.icon}
                alt={option.title}
                width={80}
                height={80}
              />
              <div>
                <h2 className="font-medium font-game text-2xl">{option.title}</h2>
                <p className="font-game text-gray-400">{option.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
