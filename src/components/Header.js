import React, { Component } from 'react';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: props.items,
        };
    }

    searchInput(){
        const {setSearchValue} = this.props;
        return(
            <input className = "form-control" type = "text" onChange = {(event) => setSearchValue(event.target.value)}/>
        );
    }
    
    searchBtn(){
        const {handleSearch} = this.props;
        return(
            <input name="" id="" className="btn btn-primary" type="button" value="Search" onClick = {handleSearch}/>
        );
    }

    pagination(){
        return(
            <nav aria-label="Page navigation">
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link" href="/link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item active"><a class="page-link" href="/link">1</a></li>
                <li class="page-item"><a class="page-link" href="/link">2</a></li>
                <li class="page-item">
                  <a class="page-link" href="/link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
        );
    }

    filter(){
        return(
            <nav aria-label="Page navigation">
              <ul class="pagination">
                <li class="page-item active-filter"><a class="page-link" href="/index">Anything</a></li>
                <li class="page-item"><a class="page-link" href="/index">Movies</a></li>
                <li class="page-item"><a class="page-link" href="/index">TV</a></li>
                <li class="page-item"><a class="page-link" href="/indexcl">Episodes</a></li>
              </ul>
            </nav>
        );
    }

    render() {
        return (
            <table class="table">
                <tbody>
                    <tr>
                        <td className = "header-row page-select">{this.pagination()}</td>
                        <td className = "header-row search-text">{this.searchInput()}</td>
                        <td classname = "header-row search-btn">{this.searchBtn()}</td>
                        <td className = "header-row filter">{this.filter()}</td>
                    </tr>
                </tbody>
            </table>
            
        );
    };
}

export default Search;