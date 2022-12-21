
import { Backdrop, Button, Grid, modalClasses } from '@mui/material';
import { Container, Box } from '@mui/system';
import style from '../components/Hall_members.module.css';
import { useState } from 'react';
import { Modal, Typography } from '@mui/material';
import Popup from './Modal.js';
const Room = ({ rooms }) => {
    // const rooms=props.rooms;

    const [show, setShow] = useState(0);
    const [check, setCheck] = useState(false);
    const handle = (id, condition) => {
        setShow(id);
        if (condition)
            setCheck(!condition);
        else {
            setCheck(condition);
            // setShow(0);
        }
    }
    return (
        <Container>
            <Grid container>
                {rooms.map((room) => (
                    <Grid item xs={4} md={3} >
                        <div className={style.card} >
                            <p key={room.id} onClick={() => handle(room.id, true)}>{room.room}</p>
                            {/* <Popup room={room} show={show} check={handle} /> */}
                            <Modal open={true ? room.id == show : false} onClose={() => setShow(false)}>
                                <Box position="absolute" top="50%" left="50%" color="textSecondary" className={style.modal_box}>
                                    <h1 className={style.modal_title}>{room.room}</h1>
                                    <Grid container spacing={2} className={style.modal_grid}>
                                        {room.boarder.map((student)=>(
                                            <Grid item className={style.modal_card}>
                                                <p className={style.boarder}>{student.boarder1}</p>
                                                <p className={style.department}>{student.department}</p>
                                                <p className={style.rollno}>{student.rollno}</p>
                                            </Grid>
                                        ))}
                                    </Grid>
                                    <Button varient="contained" color='error' onClick={() => setShow(false)}>click me</Button>
                                </Box>

                            </Modal>

                        </div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Room;