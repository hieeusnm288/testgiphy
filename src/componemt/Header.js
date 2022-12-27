import React from "react";
import { Tabs } from "antd";
import Search from "./Search";
import Favourites from "./Favourites";
const onChange = (key) => {
  // console.log(key);
};
function Header() {
  return (
    <div className="container">
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        items={[
          {
            label: `Search`,
            key: "1",
            children: <Search />,
          },
          {
            label: `Favourites`,
            key: "2",
            children: <Favourites />,
          },
        ]}
      />
    </div>
  );
}

export default Header;
