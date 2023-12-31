import React, { useEffect, useState } from "react";
import "./Repozitorij.css";

function Repozitorij({ username }) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const jsonResult = await result.json();
      setData(jsonResult);
    };
    fetchData();
  }, [username]);

  return (
    <div className="repo__container">
      {data?.length > 0 && (
        <ul className="data__container">
          {data?.map((data) => (
            <div key={crypto.randomUUID()} className="li__container">
              <li>{data.id}</li>
              <li>{data.name}</li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Repozitorij;
