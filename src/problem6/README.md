## Features

- Submit a user action to update their score.
- Secure, authenticated score submission.
- Maintain and retrieve top 10 highest scores.
- Real-time broadcasting of leaderboard changes via WebSocket.

## Architecture

- REST API for score updates.
- WebSocket server for real-time leaderboard push.
- Persistent storage for user scores.
- Leaderboard service to compute and cache top 10 scores.

## Technology Stack

- Node.js / TypeScript
- WebSocket (ws or socket.io)
- Redis (for leaderboard cache)
- PostgreSQL / MongoDB (persistent storage)
- JWT authentication


