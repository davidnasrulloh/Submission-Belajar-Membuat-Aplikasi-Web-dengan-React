import React from 'react';

class InputNote extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: '',
            maxChar: 50,
        }

        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this)
        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onTitleChangeHandler(ev){
        this.setState(()=>{
            return {
                title: ev.target.value.slice(0, this.state.maxChar),
            }
        });
    }

    onBodyChangeHandler(ev){
        this.setState(()=>{
            return {
                body: ev.target.value,
            }
        });
    }

    onSubmitHandler(ev){
        ev.preventDefault();
        this.props.onAddNote(this.state)

        this.setState(()=>{
            return {
                title: '',
                body: ''
            }
        })
    }

    render(){
        return(
            <div className="note-input">
                <h2>Buat catatan</h2>
                <form onSubmit={this.onSubmitHandler}>
                    <p className="note-input__title__char-limit">Sisa karakter: {this.state.maxChar - this.state.title.length}</p>
                    <input className="note-input__title" type="text" placeholder="Ini adalah judul ... " value={this.state.title} onChange={this.onTitleChangeHandler} required/>
                    <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyChangeHandler} required></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }

}

export default InputNote;