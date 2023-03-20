import { Component } from "react";
const HOC = (WrappedComponent, entity) => {
  return class extends Component {
    state = {
      data: [],
      inputValues: "",
    };
    componentDidMount() {
      fetch(`https://jsonplaceholder.typicode.com/${entity}`)
        .then((res) => res.json())
        .then((json) => this.setState({ ...this.state, data: json }));
    }
    render() {
      const { data, inputValues } = this.state;
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

      return (
        <div>
          <input
            type="text"
            value={this.state.inputValues}
            onChange={(e) =>
              this.setState({ ...this.state, inputValues: e.target.value })
            }
          />
          <WrappedComponent filter={filterData} />
        </div>
      );
    }
  };
};

export default HOC;
