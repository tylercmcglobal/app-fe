import { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../../context/socket';

const Client = () => {
    const socket = useContext(SocketContext);
    let [numberOfClickOrange, setNumberOfClickOrange] = useState(0);
    let [numberOfClickBlue, setNumberOfClickBlue] = useState(0);

    useEffect(() => {
        socket.emit('orange', numberOfClickOrange);
        socket.emit('blue', numberOfClickBlue);
    }, [numberOfClickBlue, numberOfClickOrange])

    const handleClickButton = (color: string) => {
        if (color === 'orange') {
            setNumberOfClickOrange(++numberOfClickOrange);
        } else {
            setNumberOfClickBlue(++numberOfClickBlue);
        }
    }
    return (
        <div>
            <button style={{backgroundColor:'orange', margin: '10px'}} onClick={() => handleClickButton('orange')}>Orange</button>
            <button style={{backgroundColor:'blue', margin: '10px'}} onClick={() => handleClickButton('blue')}>Blue</button>
        </div>
    )
}

export default Client;