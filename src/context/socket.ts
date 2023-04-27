import * as socketio from "socket.io-client";
import * as React from 'react';

export const socket = socketio.io(process.env.REACT_APP_API_URL || 'http://localhost:4000');
export const SocketContext = React.createContext(socket);