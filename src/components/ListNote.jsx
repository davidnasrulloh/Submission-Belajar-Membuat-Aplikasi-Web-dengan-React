import React from 'react'
import NoteCard from './NoteCard'

const ListNote = ({notes, onDelete, onActive, onArchived }) => {
    if(notes.length === 0){
        return(
            <p className="notes-list__empty-message">Tidak ada catatan</p>
        )
    }
    
    return (
        <div className="notes-list">
            {
                notes.map((note)=>(
                    <NoteCard key={note.id} {...note} onDelete={onDelete} onArchived={onArchived} onActive={onActive}/>
                ))
            }
        </div>
    )
}

export default ListNote