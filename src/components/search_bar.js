import React, {Component} from 'react'
import "../style/style.css";

class SearchBar extends Component{

    constructor(props){
        super (props)
        this.state = {term: ''}
    };

    render(){
        return(
            <div className="search-bar">
                <input 
                onChange={ event => this.onInputChange(event.target.value)}
                /> 
            </div>   
            
        );

    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onTermChange(term);
    }

}

export default SearchBar