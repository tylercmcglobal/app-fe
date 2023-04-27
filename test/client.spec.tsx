import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Client from '../src/pages/client';
import * as MockedSocket from 'socket.io-mock';
import { SocketContext } from '../src/context/socket';

jest.mock('socket.io-client');

describe("test client UI", () => {
    afterEach(() => {
        jest.clearAllMocks();
    })

    test('should render button with name Orange', () => {
        render(<Client />);
        expect(screen.getByText('Orange')).toBeInTheDocument();
    });

    test('should render button with name Blue', () => {
        render(<Client />);
        expect(screen.getByText('Blue')).toBeInTheDocument();
    });

    test('should emit message socket orange', (done) => {
        let socket: any;
        socket = new MockedSocket();
        const TestComponent = () => ( 
            <SocketContext.Provider value={socket.socketClient}>
                <Client />
            </SocketContext.Provider>
        )
        render(<TestComponent />)

        socket.on('orange', (message: string) => {
            expect(message).toBe('click');
            done();
        });

        fireEvent.click(screen.getByText('Orange'));
    });

    test('should emit message socket blue', (done) => {
        let socket: any;
        socket = new MockedSocket();
        const TestComponent = () => ( 
            <SocketContext.Provider value={socket.socketClient}>
                <Client />
            </SocketContext.Provider>
        )
        render(<TestComponent />)

        socket.on('blue', (message: string) => {
            expect(message).toBe('click');
            done();
        });

        fireEvent.click(screen.getByText('Blue'));
    });
});