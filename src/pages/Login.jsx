import clsx from "clsx";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    position: "Backend Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2022 - Present",
    responsibilities: [
      "Developed and maintained RESTful APIs using Node.js and Express.",
      "Integrated third-party services such as payment gateways.",
      "Collaborated with front-end teams to ensure seamless integration.",
    ],
  },
  {
    position: "Junior Developer",
    company: "Innovative Apps",
    duration: "Jun 2020 - Dec 2021",
    responsibilities: [
      "Assisted in the development of client-side and server-side logic.",
      "Worked on improving database performance for queries.",
      "Wrote unit and integration tests to ensure code quality.",
    ],
  },
];
function Login() {
  return (
    <div className="mt-10  dark:border-gray-600 mx-auto box-content h-auto w-96 p-10 border-2 ...">
      <div className="neu inline-block p-2 border-r-card-foreground">
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
      <div className="flex mb-7 container justify-center items-center">
        <img
          src="https://th.bing.com/th?id=OIP.g5E6zK095Qp9AqePxruFgAHaFj&w=288&h=216&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.1&pid=3.1&rm=2"
          className="w-52 h-52 rounded-full border-4 border-green-300"
        />
      </div>
      <Tabs defaultValue="skill" className=" w-[400px] ">
        <TabsList className="flex justify-center neu">
          <TabsTrigger value="skill">Skill</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="project">Project</TabsTrigger>
        </TabsList>
        <TabsContent value="skill" className="neu p-2">
          <div className=" inline-block">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="neu inline-block p-2 border-r-card-foreground m-2"
              >
                <Button>{skill}</Button>
              </div>
            ))}
          </div>
          <div className="flex gap-5 mt-10 m-2">
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
        <TabsContent value="about" className="neu p-2">
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
        <TabsContent value="experience" className="neu p-2">
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
        <TabsContent value="project" className="neu p-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae soluta
          commodi distinctio magni mollitia ad, suscipit velit maxime id
          eligendi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Vitae soluta commodi distinctio magni mollitia ad, suscipit velit
          maxime id eligendi! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Vitae soluta commodi distinctio magni mollitia ad,
          suscipit velit maxime id eligendi!
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
