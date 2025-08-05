import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export default function Card({ children, className = "", title }: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 ${className}`}
      data-oid="od.y2zf">

      {title &&
      <div
        className="px-6 py-4 border-b border-gray-200 dark:border-gray-700"
        data-oid="xww63z6">

          <h3
          className="text-lg font-semibold text-gray-900 dark:text-gray-100"
          data-oid="9qkk35i">

            {title}
          </h3>
        </div>
      }
      <div className="p-6" data-oid="uljou15">
        {children}
      </div>
    </div>);

}