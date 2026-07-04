import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  align?: "left" | "center";
};

function SectionShell({ id, title, children }: SectionShellProps) {
  return (
    <section
      id={id}
      className="flex min-h-screen items-center border-b border-white/10 px-6 text-zinc-300 md:px-10"
    >
      <div className="w-full ">
        <h2 className="text-2xl font-semibold text-zinc-100">{title}</h2>
        <div className="mt-4">{children}</div>
      </div>
    </section>
  );
}

export default SectionShell;
