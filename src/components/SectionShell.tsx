import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  align?: "left" | "center";
};

function SectionShell({ id, title, children }: SectionShellProps) {
  return (
    <section
      id={id}
      className="flex min-h-screen items-center border-b border-white/10 text-zinc-300"
    >
      <div className="w-full h-full flex flex-col justify-center">
        {title ? (
          <h2 className="text-2xl font-semibold text-zinc-100">{title}</h2>
        ) : null}
        <div>{children}</div>
      </div>
    </section>
  );
}

export default SectionShell;
