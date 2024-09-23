import React from "react";
import Lists from "./List";
import CreateList from "./components/CreateList"; 


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

    createPost = (postData) => {
      fetch('http://localhost:5001/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
      .then(response => response.json())
      .then(() => this.getLists())  // Refresh list after creating
      .catch(error => console.error('Error creating post:', error));
    };

    updatePost = (postData, id) => {
      fetch(`http://localhost:5001/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
      .then(response => response.json())
      .then(() => this.getLists())  // Refresh list after updating
      .catch(error => console.error('Error updating post:', error));
    };

    deletePost = (id) => {
      fetch(`http://localhost:5001/posts/${id}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(() => this.getLists())  // Refresh list after deleting
      .catch(error => console.error('Error deleting post:', error));
    };


    render() {
      const { loading, alldata } = this.state;
      const listTable = loading ? (<span>Loading data...</span>) : (<Lists  alldata={alldata} updatePost={this.updatePost} deletePost={this.deletePost} getLists={this.getLists}/>);
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
            <CreateList createPost={this.createPost} /> 
              </span>
              {listTable}
              
          </div>
      );
  }
  
   }

export default App;


