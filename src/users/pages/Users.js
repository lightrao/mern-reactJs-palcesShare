import React from "react";

import UsersList from "../components/UsersList";

// stateful component
const Users = () => {
  // dummy data
  const USERS = [
    {
      id: "u1",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/1920px-FullMoon2010.jpg",
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
