import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  // dummy data
  const USERS = [
    {
      id: "u1",
      image: "imge url1",
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
