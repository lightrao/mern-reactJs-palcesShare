import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphoto.tuchong.com%2F34176%2Ff%2F4099742.jpg&refer=http%3A%2F%2Fphoto.tuchong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673751815&t=4a3a631b7af609cdb0f79be6f6795de6",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.3704051,
      lng: -104.5743473,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://en.wikipedia.org/wiki/Empire_State_Building#/media/File:Empire_State_Building_(aerial_view).jpg",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.3704051,
      lng: -104.5743473,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
