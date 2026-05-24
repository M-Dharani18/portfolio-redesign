export const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-sm">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-clash text-3xl md:text-5xl text-center mt-6 text-white">
        {title}
      </h2>
      {description && (
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          {description}
        </p>
      )}
    </>
  );
};
