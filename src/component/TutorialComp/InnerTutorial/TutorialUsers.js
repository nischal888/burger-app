import HOC from "../../../container/HOC/Hoc";
import useFetch from "../../../container/HOC/useFetch";
const Users = () => {
  const { filterData, input } = useFetch("users");
  // const { filter } = props;
  const filterUser = filterData.map((name) => {
    return <p key={name.id}>{name.name}</p>;
  });
  return (
    <div>
      {input}
      {filterUser}
    </div>
  );
};

//export default HOC(Users, "users");
export default Users;
