const Skill = ({ skill }: { skill: string }) => {
  return (
    <h1 className="bg-blue-50 text-blue-600 text-2xl font-semibold h-10 flex items-center justify-center px-4 rounded">
      {skill}
    </h1>
  );
};

export default Skill;
