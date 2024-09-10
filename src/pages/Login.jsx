import clsx from "clsx";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlayButton from "./PlayButton";
import { ComboboxDemo } from "../components/ui/Combobox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Postgress",
  "laravel",
];
const sosmeds = ["instagram", "Tiktok", "github"];
const experiences = [
  {
    position: "Lab Asisten",
    company: "Universitas Gunadarma",
    duration: "6 mos",
    responsibilities: [
      "Guided students in completing lab assignments related to computer programming and software development.",
      "Maintained and troubleshooted lab computers, including software installations and updates.",
      "Monitored lab sessions to ensure students followed lab safety protocols and proper usage of equipment.",
      "Provided technical support during lab sessions, assisting students with coding errors and debugging.",
      "Prepared lab materials and assisted in conducting practical exams for students.",
    ],
  },
];
const projects = [
  {
    position: "Project Developer",
    company: "Personal Projects",
    duration: "2023",
    responsibilities: [
      "Developed a food ordering application with real-time order tracking.",
      "Built back-end services using Node.js and Express.js, with MongoDB as the database.",
      "Implemented a user-friendly interface for both customers and restaurant managers.",
      "Handled payment gateway integration and order management features.",
    ],
  },
];
function Login() {
  return (
    <div className=" dark:border-gray-600 mx-auto box-content h-auto w-xl p-10 border-2 ...">
      <div className="neu inline-block p-2 border-r-card-foreground ">
        <Button
          onClick={() => {}}
          className={clsx([
            "rounded mt-2 p-1 text-lg transition-colors md:black",
            "border border-gray-300 dark:border-gray-600",
            "text-gray-700 dark:text-gray-300",
            "bg-[#f2f7fc]  hover:bg-green-400 dark:bg-[#22272e] dark:hover:bg-gray-700",
          ])}
        >
          Profile
        </Button>
      </div>
      <PlayButton></PlayButton>

      <div className=" flex gap-5 neu container  justify-center items-center p-5 rounded-xl">
        <img
          src="tr.jpg"
          className="rounded-full bg-blue-500 w-16 h-16 border-1 border-green-300"
        />
        <div className="inline-block w-full m-2  text-2xl font-bold">
          <h1>Reza~</h1>
          <h1>Backend Developer</h1>
          {/* <h1 className="text-xl font-sans text-blue-600">
            im junior programmer using node js
          </h1> */}
        </div>
      </div>

      <div className=" mt-4 inline-block ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className=" neu inline-block p-2 border-r-card-foreground m-2 "
          >
            <Button className="bg-[#8dd8dc]  hover:bg-green-400">
              {skill}
            </Button>
          </div>
        ))}
      </div>
      <ComboboxDemo></ComboboxDemo>
      <Tabs defaultValue="skill" className=" w-[full] mt-10">
        <TabsList className="flex justify-center neu bg-[#8da3dc]  hover:bg-yellow-400">
          <TabsTrigger value="skill">Skill</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="project">Project</TabsTrigger>
          <TabsTrigger value="actifity">Actifity</TabsTrigger>
        </TabsList>
        <TabsContent value="skill" className="neu p-2 ">
          <div className=" inline-block ">
            {skills.map((skill, index) => (
              <div
                key={index}
                className=" neu inline-block p-2 border-r-card-foreground m-2 "
              >
                <Button>{skill}</Button>
              </div>
            ))}
          </div>
          <div className="flex gap-5 mt-10 m-2 ">
            {sosmeds.map((sosmed, index) => (
              <div key={index} className=" flex border-r-card-foreground">
                <Button
                  onClick={() => {}}
                  className={clsx([
                    "rounded mt-2 p-1 text-lg transition-colors md:black",
                    "border border-gray-300 dark:border-gray-600",
                    "text-gray-700 dark:text-gray-300",
                    "bg-[#f2f7fc]  hover:bg-green-400 dark:bg-[#22272e] dark:hover:bg-gray-700",
                  ])}
                >
                  {sosmed}
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="about" className="neu p-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae soluta
          commodi distinctio magni mollitia ad, suscipit velit maxime id
          eligendi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Vitae soluta commodi distinctio magni mollitia ad, suscipit velit
          maxime id eligendi! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Vitae soluta commodi distinctio magni mollitia ad,
          suscipit velit maxime id eligendi!
          <br />
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae soluta
          commodi distinctio magni mollitia ad, suscipit velit maxime id
          eligendi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Vitae soluta commodi distinctio magni mollitia ad, suscipit velit
          maxime id eligendi! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Vitae soluta commodi distinctio magni mollitia ad,
          suscipit velit maxime id eligendi!
        </TabsContent>
        <TabsContent value="experience" className="neu p-5">
          <div className="max-w-4xl mx-auto bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Work Experience
            </h2>
            {experiences.map((job, index) => (
              <div
                key={index}
                className="mb-6 p-4 border-l-4 border-blue-500 bg-gray-50 rounded-md shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {job.position}
                </h3>
                <p className="text-gray-600 mb-2">
                  {job.company} - {job.duration}
                </p>
                <ul className="list-disc list-inside">
                  {job.responsibilities.map((task, idx) => (
                    <li key={idx} className="text-gray-700">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="project" className="neu p-5">
          <div className="max-w-4xl mx-auto bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Projects</h2>
            {projects.map((job, index) => (
              <div
                key={index}
                className="mb-6 p-4 border-l-4 border-blue-500 bg-gray-50 rounded-md shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {job.position}
                </h3>
                <p className="text-gray-600 mb-2">
                  {job.company} - {job.duration}
                </p>
                <ul className="list-disc list-inside">
                  {job.responsibilities.map((task, idx) => (
                    <li key={idx} className="text-gray-700">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Button
        onClick={() => {}}
        className={clsx([
          "rounded mt-2 p-1 text-lg transition-colors md:black",
          "border border-gray-300 dark:border-gray-600",
          "text-gray-700 dark:text-gray-300",
          "bg-[#f2f7fc]  hover:bg-green-400 dark:bg-[#22272e] dark:hover:bg-gray-700",
        ])}
      >
        Connect!
      </Button>

      <div></div>
    </div>
  );
}

export default Login;
