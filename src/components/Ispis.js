import React, { useEffect, useState } from "react";
import Repozitorij from "./Repozitorij";
import "./Ispis.css";

function Ispis({ username }) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://api.github.com/users/${username}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer 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`,
        },
      });
      const jsonResult = await result.json();
      setData(jsonResult);
    };
    fetchData();
  }, [username]);

  return (
    <div className="ispis__container">
      <ul className="list__container">
        <li>
          <img alt="Avatar" className="avatar" src={data?.avatar_url} />
        </li>
        <li>{data?.name}</li>
        <li>{data?.location}</li>
        <li>{data?.bio}</li>
      </ul>
      <Repozitorij username={username} />
    </div>
  );
}

export default Ispis;
