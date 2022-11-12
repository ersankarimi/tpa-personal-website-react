export default function BlogCard({ title, imgSource, blogUrl }) {
  return (
    <a href={blogUrl} className="w-full">
      <div className="m-auto flex h-full max-w-sm flex-col items-center justify-center gap-2">
        <img
          src={imgSource}
          alt={`${title} Poster`}
          className="w-full rounded-xl"
        />
        <h2 className="font-m-plus text-lg font-medium text-neutral-custom-100/90">
          {title}
        </h2>
      </div>
    </a>
  );
}
