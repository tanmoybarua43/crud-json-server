import React from "react";
import Lists from "./List";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        alldata: [],
        singledata: {
          title: "",
          author: ""
        }
      };
    }
    getLists = () => {
      this.setState({ loading: true });
      fetch("http://localhost:5001/posts")
        .then(response => response.json())
        .then(data => {
          this.setState({
            alldata: data,
            loading: false
          });
        })
        .catch(console.log);
    };
    render() {
      const listTable = this.state.loading ? (<span>Loading data...</span>) : (<Lists alldata={this.state.alldata} />);
      return (
          <div className="container">
              <span className="title-bar">
                  <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={this.getLists}
                  >
                      Get Lists
                  </button>
              </span>
              {listTable}
          </div>
      );
  }
  
  }

export default App;