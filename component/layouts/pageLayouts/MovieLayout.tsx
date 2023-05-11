import React from "react";

function MovieLayout({ children }: any) {
  return (
    <div>
      <ul>
        <li>list</li>
        <li>detail demo</li>
      </ul>
      {children}
    </div>
  );
}

export default MovieLayout;
