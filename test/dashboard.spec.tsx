import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Dashboard from '../src/pages/dashboard';
import * as React from 'react';
import * as MockedSocket from 'socket.io-mock';
import { SocketContext } from '../src/context/socket';

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");
useStateSpy.mockImplementation((initialState: number = 0) => [initialState, setState]);

describe("test dashboard UI", () => {
    test('should render chart', () => {
        render(<Dashboard />);
        expect(screen.getByText('Bar Chart')).toBeInTheDocument();
    });

    test("should update state when listening event orange", () => {
        let socket: any;
        socket = new MockedSocket();
        const TestComponent = () => ( 
            <SocketContext.Provider value={socket.socketClient}>
                <Dashboard />
            </SocketContext.Provider>
        )
        render(<TestComponent />)
        socket.emit('orange', 10);
        expect(setState).toHaveBeenCalled()
    });

    test("should update state when listening event blue", () => {
        let socket: any;
        socket = new MockedSocket();
        const TestComponent = () => ( 
            <SocketContext.Provider value={socket.socketClient}>
                <Dashboard />
            </SocketContext.Provider>
        )
        render(<TestComponent />)
        socket.emit('blue', 10);
        expect(setState).toHaveBeenCalled()
    });
});