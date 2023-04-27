import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-chartjs-2', () => ({
    Bar: () => null
}));

global.setImmediate = jest.useRealTimers as unknown as typeof setImmediate;