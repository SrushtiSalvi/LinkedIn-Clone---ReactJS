import React, { useState, useEffect } from 'react'
import './style/feed.css'
import CreateIcon from '@mui/icons-material/Create'
import { Image, Subscriptions, EventNote, CalendarViewDay } from '@mui/icons-material'
import { selectUser } from '../features/userSlice'

import InputOption from './InputOption'
import Post from './Post'
import { db } from '../db'
import firebase from 'firebase/app';
import { useSelector } from 'react-redux'
import FlipMove from 'react-flip-move'


function Feed() {

    const user = useSelector(selectUser);

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    // const [data, setData] = useState({
    //     name: 'xyz',
    //     description: 'post',
    //     message:' ssup mf',
    //     photoUrl: ''
    // })

    useEffect(() => {
       db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => (
           setPosts(snapshot.docs.map(doc => (
               {
                   id: doc.id,
                   data: doc.data(),
               }
           )))
       ))
    }, [])
    

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput('')
    };
    return (
        <div className='feed'>
            <div className='feed_inputContainer'>
                <div className='feed_input'>
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type='text'/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className='feed_inputOptions'>
                    <InputOption Icon={Image} title="Photo" color='#70B5F9'/>
                    <InputOption Icon={Subscriptions} title='Video' color='E7A33E'/>
                    <InputOption Icon={EventNote} title='Event' color='#C0CBCD' />
                    <InputOption Icon={CalendarViewDay} title='Write Article' color="#7FC15E"/>
                </div>
            </div>

            {/* {posts} */}
            <FlipMove>
            {posts.map(({id, data: { name, description, message, photoUrl }}) => {
                return(
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
                )
            })}
            </FlipMove>
        </div>
    )
}

export default Feed
