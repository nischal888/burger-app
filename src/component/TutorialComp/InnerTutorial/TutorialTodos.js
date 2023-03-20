//import HOC from "../../../container/HOC/Hoc";
import useFetch from "../../../container/HOC/useFetch";
const ToDos = () => {
  const { filterData, input } = useFetch("todos");
  const filterTodos = filterData.slice(0, 10).map((title) => {
    return <p key={title.id}>{title.title}</p>;
  });
  return (
    <div>
      {input}
      {filterTodos}
    </div>
  );
};

//export default HOC(ToDos, "todos");
export default ToDos;
