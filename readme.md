# Test App

This project has been generated using the `express` for back end integration, `vite-typescript` for front end integration

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `18`. If you're using nvm, run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Using NPM

- Run `npm i` to install the project dependencies

### Using Yarn

- Run `yarn` to install the project dependencies

## Test your service

This code base does not use any API since we are sending event through SocketIO. Please refer to this:

- http://18.136.210.152:4173/client: for two buttons code frontend
- http://18.136.210.152:4173/dashboard: to see the changes made by the client

### Locally

In order to test the function locally, run the following command:

- `npm run dev` if you're using NPM
- `yarn dev` if you're using Yarn

### Code base structure

```
+-- dist
+-- src
| +-- pages // pages for dashboard and client
| | +-- client
| | +-- dashboard
| +-- context // storing the socket context
| | +-- context.ts
| +-- test // storing test cases for the front end
| | +-- client.spec.tsx
| | +-- dashboard.spec.tsx
| +-- main.tsx
| +-- App.tsx
```

### 3rd party libraries

- Socket.IO - using socket.io for communication between client and the dashboard as the backend act as a middleman
- vite - using to build React application
- express - using to build the backend
