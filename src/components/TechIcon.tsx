import { twMerge } from "tailwind-merge";

export const TechIcon = ({
  component: Component,
}: {
  component: React.ElementType;
}) => {
  return (
    <Component className="size-10 fill-[url(#tech-icon-gradient)]">
      <defs>
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(110 231 183)" />
          <stop offset="100%" stopColor="rgb(56 189 248)" />
        </linearGradient>
      </defs>
    </Component>
  );
};
