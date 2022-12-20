
import { Backdrop, Grid, modalClasses } from '@mui/material';
import { Container } from '@mui/system';
import style from '../components/Hall_members.module.css';
import { useState } from 'react';
import Popup from './Modal.js';
const Room = ({ rooms }) => {
    // const rooms=props.rooms;

    const [show, setShow] = useState(0);
    const handle = (id)=>
    {   
    setShow(id);
    }
    return (
        <Container>
            <Grid container>
                {rooms.map((room) => (
                    <Grid item xs={4} md={3} >
                        <div className={style.card} >
                            <p key={room.id} onClick={()=>handle(room.id)}>{room.room}</p>
                            <Popup room={room} show={show}/>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Room;