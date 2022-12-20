import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect } from 'react';
import { useState } from 'react';
import style from '../components/Hall_members.module.css';
import Room from './Room';

const Hall_members = () => {

    const [rooms, setRooms] = useState([])
    const [Brooms, setBrooms] = useState([])
    const [Crooms, setCrooms] = useState([])
    const [Drooms, setDrooms] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/A-block')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:8000/B-block')
            .then(res => res.json())
            .then(data => setBrooms(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:8000/C-block')
            .then(res => res.json())
            .then(data => setCrooms(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:8000/C-block')
            .then(res => res.json())
            .then(data => setDrooms(data))
    }, [])

    return (
        <div className={style.hall}>
            <h1>Nehru Hall</h1>
            <div className={style.block}>
                <h1 className={style.block_name}>A-Block</h1>
                <div className={style.ground}>
                    <h1>Ground Floor</h1>
                    <Container>

                        <Room rooms={rooms.filter((room) => room.id < 200)} />

                    </Container>
                </div>
                <div className={style.first}>
                    <h1>First Floor</h1>
                    <Container>

                        <Room rooms={rooms.filter((room) => (room.id < 300 && room.id >= 200))} />

                    </Container>
                </div>
                <div className={style.top}>
                    <h1>Top Floor</h1>
                    <Container>

                        <Room rooms={rooms.filter((room) => (room.id < 400 && room.id >= 300))} />

                    </Container>
                </div>
            </div>
            <div className={style.block}>
                <h1 className={style.block_name}>B-Block</h1>
                <div className={style.ground}>
                    <h1>Ground Floor</h1>
                    <Container>

                        <Room rooms={Brooms.filter((room) => room.id < 200)} />

                    </Container>
                </div>
                <div className={style.first}>
                    <h1>First Floor</h1>
                    <Container>

                        <Room rooms={Brooms.filter((room) => (room.id < 300 && room.id >= 200))} />

                    </Container>
                </div>
                <div className={style.top}>
                    <h1>Top Floor</h1>
                    <Container>

                        <Room rooms={Brooms.filter((room) => (room.id < 400 && room.id >= 300))} />

                    </Container>
                </div>
            </div>
            <div className={style.block}>
                <h1 className={style.block_name}>C-Block</h1>
                <div className={style.ground}>
                    <h1>Ground Floor</h1>
                    <Container>

                        <Room rooms={Crooms.filter((room) => room.id < 200)} />

                    </Container>
                </div>
                <div className={style.first}>
                    <h1>First Floor</h1>
                    <Container>

                        <Room rooms={Crooms.filter((room) => (room.id < 300 && room.id >= 200))} />

                    </Container>
                </div>
                <div className={style.top}>
                    <h1>Top Floor</h1>
                    <Container>

                        <Room rooms={Crooms.filter((room) => (room.id < 400 && room.id >= 300))} />

                    </Container>
                </div>
            </div>
            <div className={style.block}>
                <h1 className={style.block_name}>D-Block</h1>
                <div className={style.ground}>
                    <h1>Ground Floor</h1>
                    <Container>

                        <Room rooms={Drooms.filter((room) => room.id < 200)} />

                    </Container>
                </div>
                <div className={style.first}>
                    <h1>First Floor</h1>
                    <Container>

                        <Room rooms={Drooms.filter((room) => (room.id < 300 && room.id >= 200))} />

                    </Container>
                </div>
                <div className={style.top}>
                    <h1>Top Floor</h1>
                    <Container>

                        <Room rooms={Drooms.filter((room) => (room.id < 400 && room.id >= 300))} />

                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Hall_members;