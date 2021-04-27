import React from 'react';
import {useState} from 'react'

const Add = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [count, setCount] = useState(0);
    const [author, setAuthor] = useState('');

    return (<div className={"addContainer"}>
        <form>
            <input type={'text'} placeholder={'Name'} onChange={setName}></input>
            <input type={'text'} placeholder={'Description'} onChange={setDescription}></input>
            <input type={'text'} placeholder={'Count'} onChange={setCount}></input>
            <input type={'text'} placeholder={'Author'} onChange={setAuthor}></input>

            <button onClick={() => props.addBook(name, description, count, author)}>Add</button>
        </form>
    </div>)
}

export default Add;