import type { ChildrenProps } from "~/server/validator/interfaces/interfaces.tableCarUi";

interface CardProps extends ChildrenProps {
  InnerPosition: "center" | "start";
  stepChildren?: React.ReactNode;
}

export default function Card({
  children,
  InnerPosition,
  stepChildren,
}: CardProps) {
  return (
    <div className="mt-10 flex justify-center p-6">
      <div
        className="card w-full bg-white shadow-xl"
        style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)" }}
      >
        <div className="card-body">
          {children}

          <div className={`card-actions justify-${InnerPosition}`}>
            {stepChildren}
          </div>
        </div>
      </div>
    </div>
  );
}
