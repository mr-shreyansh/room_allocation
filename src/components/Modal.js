import { Recommend } from '@mui/icons-material';
import style from '../components/Hall_members.module.css';
import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';


 const Popup = ({ room, show,check }) => {

    if (show != room.id) {
        return null;
    }
    
    
    return (
      
        <div className={style.modal}>
            <Modal open={true}>it worked</Modal>
                <h1>{room.id}</h1>
                <h2>{room.boarder}</h2>
                <h2>{room.boarder3}</h2>
                <h2>{room.boarder2}</h2>
                <button onClick={check(room.id,false)}>close</button>
            </div>
        
    );
}

export default Popup;
