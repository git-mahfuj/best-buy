import { cn } from "@/lib/utils";
export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`w-full max-w-[1200px] mx-auto px-4`, className)}>
      {children}
    </div>
  );
};
