import { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../../context/socket';

const Client = () => {
  const socket = useContext(SocketContext);
  const [numberOfClickOrange, setNumberOfClickOrange] = useState(0);
  const [numberOfClickBlue, setNumberOfClickBlue] = useState(0);

  useEffect(() => {
    socket.emit('orange', numberOfClickOrange);
    socket.emit('blue', numberOfClickBlue);
  }, [numberOfClickBlue, numberOfClickOrange])

  const handleClickOrangeButton = () => {
    setNumberOfClickOrange(numberOfClickOrange + 1);
  }
  const handleClickBlueButton = () => {
    setNumberOfClickBlue(numberOfClickBlue + 1);
  }
  return (
    <div>
      <button style={{ backgroundColor: 'orange', margin: '10px' }} onClick={() => handleClickOrangeButton()}>Orange</button>
      <button style={{ backgroundColor: 'blue', margin: '10px' }} onClick={() => handleClickBlueButton()}>Blue</button>
    </div>
  )
}

export default Client;