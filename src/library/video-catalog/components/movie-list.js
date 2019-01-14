import React, { Component } from 'react';

class Movie extends Component{
    constructor(props){
  
        super(props);
        this.state = {
            items: props.items,
        };
  
    }
    deleteItem(){
        
    }
    getLineItems(){
        const {items} = this.props;
  
        return items.map(item => (
  
            <tr key = {item.id}>
                <td style={ { color: 'crimson', fontSize : '20px' } }>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.rating}</td>
                <td>{item.year}</td>
            <td><button className="btn btn-danger" onClick={this.deleteItem.bind( null, item )}>&times;</button></td>
        </tr>
      ));
    }
    render() {
        return (
            <div className="container">
                <hr />
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Year</th>
                            <th>Delete the item</th>
                        </tr>
                    </thead>
                <tbody>{this.getLineItems()}</tbody>
                </table>
            </div>
        );
    }
}
export default Movie;