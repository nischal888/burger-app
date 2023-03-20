import { useState, useEffect } from "react";
const useFetch = (entity) => {
  const [data, setData] = useState([]);
  const [inputValues, setInputValues] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${entity}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const filterData = data.filter((dta) => {
    if (entity === "users") {
      const { name } = dta;
      return name.includes(inputValues);
    }
    if (entity === "todos") {
      const { title } = dta;
      return title.includes(inputValues);
    }
  });
  console.log(data);
  const input = (
    <div>
      <input
        type="text"
        value={inputValues}
        onChange={(e) => setInputValues(e.target.value)}
      />
    </div>
  );

  return { filterData, input };
};

export default useFetch;
