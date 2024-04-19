import React from "react";
interface CardProps {
  headerTitle?: string;
  content: string;
}
const Card = ({ headerTitle, content }: CardProps) => {
  return (
    <div className="flex flex-col text-wrap w-full">
      {headerTitle && (
        <div className="w-full bg-primary text-ellipsis p-2 text-base font-semibold rounded-t-lg">
          {headerTitle}
        </div>
      )}
      <div
        className={`h-28 font-bold p-2 bg-white w-full break-words ${
          !headerTitle ? "rounded-lg" : "rounded-b-lg"
        }`}
      >
        <span className="line-clamp-4">{content}</span>
      </div>
    </div>
  );
};

export default Card;
