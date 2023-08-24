import React from 'react'
import InputNote from './InputNote'
import ListNote from './ListNote'

const Home = ({notes, onAddNote, onDelete, onActive, onArchived, querySearch}) => {

    const notesActive = notes.filter((note) => note.archived === false && note.title.toLowerCase().includes(querySearch.toLowerCase().trim()))
    const notesArchive = notes.filter((note) => note.archived === true && note.title.toLowerCase().includes(querySearch.toLowerCase().trim()))

    return (
        <div className="note-app__body">
            <InputNote onAddNote={onAddNote}/>
            <h2>Catatan Aktif</h2>
            <ListNote notes={notesActive} onDelete={onDelete} onArchived={onArchived}/>
            <h2>Arsip</h2>
            <ListNote notes={notesArchive} onDelete={onDelete} onActive={onActive}/>
        </div>
    )
}

export default Home