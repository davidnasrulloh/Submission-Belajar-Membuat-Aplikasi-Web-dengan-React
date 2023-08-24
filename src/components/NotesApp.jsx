import React from "react";
import { getInitialData } from '../utils';
import HeaderApp from "./HeaderApp";
import Home from './Home';

class NotesApp extends React.Component {
    constructor(props){
        super(props);

        const notes = getInitialData()

        this.state = {
            notes: notes,
            querySearch: ''
        }

        this.onActivedHandler = this.onActivedHandler.bind(this)
        this.onArchivedHandler = this.onArchivedHandler.bind(this)
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
        this.onSearchHandler = this.onSearchHandler.bind(this)
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
    }

    onAddNoteHandler({title, body}){
        this.setState((prev)=>{
            return {
                notes: [
                    ...prev.notes,
                    {
                        id: +new Date(),
                        title, 
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false
                    }
                ]
            }
        });
    }

    onSearchHandler({query}){
        this.setState(()=>{
            return {
                querySearch : query
            }
        })
    }

    onDeleteHandler(id){
        this.setState({
            notes: this.state.notes.filter((note)=>note.id !== id)
        })
    }

    onArchivedHandler(id){
        this.setState({
            notes: this.state.notes.map((note) => note.id === id ? {...note, archived: true} : note)
        })
    }

    onActivedHandler(id){
        this.setState({
            notes: this.state.notes.map((note) => note.id === id ? {...note, archived: false} : note)
        })
    }

    render(){
        return(
            <>
                <HeaderApp onSearch={this.onSearchHandler}/>
                <Home notes={this.state.notes} onAddNote={this.onAddNoteHandler} onDelete={this.onDeleteHandler} onActive={this.onActivedHandler} onArchived={this.onArchivedHandler} querySearch={this.state.querySearch} />
            </>
        )
    }
}

export default NotesApp;