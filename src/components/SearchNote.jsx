
import React from 'react';

class SearchNote extends React.Component {

    constructor(props){
        super(props)
        this.state = { query: ''}
        this.onQueryChangeHandler = this.onQueryChangeHandler.bind(this)
    }

    onQueryChangeHandler(ev){
        this.setState({query: ev.target.value}, () => {
            return this.props.onSearch(this.state);
        })
    }

    render(){
        return(
            <div className="note-search">
                <input type="text" placeholder="Cari notes ..... " value={this.state.query} onChange={this.onQueryChangeHandler} />
            </div>
        )
    }
}

export default SearchNote