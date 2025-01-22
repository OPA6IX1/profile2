import opa6 from "../assets/images/PORTFOLIO (2).jpg";
import Skill from "../components/profile/Skills";

function Profile() {
  return (
    <main className="">
      <div className="bg-gradient-to-r from-blue-500 to-blue-200 to-50% w-full h-screen text-white flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-semibold">Hello 👋</h2>
          <h1 className="text-6xl font-bold">I'm Opakunle Sodiq</h1><br/>
          <p className="text-2xl">And I'm a Frontend developer. 😉 </p>
        </div>

        <div className="">
          <img
            src={opa6}
            alt=""
            className="rounded-full border-4 border-white w-80 h-80 shadow-2xl shadow-sky-800"
          />
        </div>
      </div>

      <div className="h-screen w-full bg-gradient-to-l from-blue-500 to-blue-200 from-50% text-white flex flex-col items-center gap-12">
        <h1 className="text-4xl font-semibold text-center">My Skills</h1>

        <div className="flex gap-8 flex-wrap justify-center ">
          <Skill skill="HTML5" />
          <Skill skill="CSS3" />
          <Skill skill="JavaScript" />
          <Skill skill="React" />
          <Skill skill="Next.js" />
          <Skill skill="Tailwind CSS" />
          <Skill skill="Bootstrap" />
          <Skill skill="Redux" />
          <Skill skill="Wordpress" />
        </div>
      </div>
    </main>
  );
}

export default Profile;
