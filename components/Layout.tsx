import React from "react";

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({ children = null }: LayoutProps) {
  return (
    <div className=" bg-gray-100  max-w-screen-lg mx-auto p-4 min-h-screen">
      <header>
        <p className="text-2xl text-blue-500">Dynamic Image</p>
      </header>
      <div>{children}</div>
    </div>
  );
}
