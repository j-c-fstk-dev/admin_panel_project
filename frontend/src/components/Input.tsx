import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="w-full" data-oid="u266xty">
      {label &&
      <label
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        data-oid="fa.nkc1">

          {label}
        </label>
      }
      <input
        className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                    transition-colors duration-200 ${className}`}
        {...props}
        data-oid="ymfs4pa" />


      {error &&
      <p
        className="mt-1 text-sm text-red-600 dark:text-red-400"
        data-oid=".s47mll">

          {error}
        </p>
      }
    </div>);

}