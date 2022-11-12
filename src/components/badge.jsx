export default function Badge({ tech, id }) {
  const badgesColors = {
    react: "bg-blue-600/10 text-blue-600",
    tailwindcss: "bg-indigo-600/10 text-indigo-500",
    framermotion: "bg-violet-700/10 text-indigo-500",
    reactrouter: "bg-rose-600/10 text-rose-500",
    axios: "bg-fuchsia-700/10 text-fuchsia-300",
    nextjs: "bg-slate-700/40 text-slate-100",
    typescript: "bg-blue-700/10 text-blue-500",
    javascript: "bg-yellow-700/10 text-yellow-500",
  };

  return (
    <div key={tech + id} className={`${badgesColors[tech]} rounded-md p-2`}>
      {tech}
    </div>
  );
}
