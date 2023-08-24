import React from 'react'
import { showFormattedDate } from '../utils';
import CustomButton from './CustomButton';

function NoteItem({ title, date, body }) {
    return (
        <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{date}</p>
        <p className="note-item__body">{body}</p>
        </div>
    );
}

const NoteCard = ({id, title, createdAt, body, archived, onDelete, onArchived, onActive }) => {
    return (
        <div className="note-item">
            <NoteItem title={title} date={showFormattedDate(createdAt)} body={body} />
            <div className="note-item__action">
                <CustomButton title="Delete" id={id} onClick={onDelete} className="note-item__delete-button" />
                {
                    archived ?
                    <CustomButton title="Pindahkan" id={id} onClick={onActive} className="note-item__archive-button"/>
                    : 
                    <CustomButton title="Arsipkan" id={id} onClick={onArchived} className="note-item__archive-button"/>
                }
            </div>
        </div>
    )
}

export default NoteCard