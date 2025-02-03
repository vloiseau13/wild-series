import { useEffect, useState } from "react";

function Programs() {
  const [data, setData] = useState<null | dataI[]>(null);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((programs) => setData(programs));
  }, []);

  return (
    <>
      <h1>Hello La wild</h1>
      <div className="programs">
        {data?.map((el) => {
          return (
            <figure key={el.id}>
              <img src={el.poster} alt={`Pictures of ${el.title}`} />
              <figcaption>{el.title}</figcaption>
            </figure>
          );
        })}
      </div>
    </>
  );
}

export default Programs;
