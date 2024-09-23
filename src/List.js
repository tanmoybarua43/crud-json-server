import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateList from "./components/UpdateList";  
import DeleteList from "./components/DeleteList";  

function Lists({ alldata, updatePost, deletePost, getLists }) {
    let listrows = alldata.map(element => (
        <tr key={element.id}>
            <td>{element.id}</td>
            <td>{element.title}</td>
            <td>{element.author}</td>
            <td>
                <UpdateList updatePost={(postData) => updatePost(postData, element.id, getLists)} item={element} />
            </td>
            <td>
                <DeleteList deletePost={() => deletePost(element.id, getLists)} item={element} />
            </td>
        </tr>
    ));

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {listrows}
            </tbody>
        </table>      
    );
}

export default Lists;
