import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  // dummy data
  const USERS = [
    {
      id: "u1",
      image:
        "https://img0.baidu.com/it/u=2642223955,2176778396&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
      name: "Neo",
      places: 1,
    },
    {
      id: "u2",
      image: "imge url2",
      name: "Max",
      places: 4,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
