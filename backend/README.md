# Backend - Express.js API

This is the backend server for the React Express Products application. It provides a REST API endpoint to fetch product data.

## Features

- Express.js server
- CORS enabled for frontend communication
- REST API endpoint for products

## API Endpoints

### GET /api/products

Returns a list of products with name and price.

**Response:**
```json
[
  { "name": "Apple", "price": 120 },
  { "name": "Banana", "price": 50 },
  { "name": "Orange", "price": 80 }
]
```

## Installation

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

### Production Mode
```bash
npm start
```

### Development Mode (with auto-restart)
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## Environment Variables

- `PORT` - Server port (default: 5000)

## Dependencies

- **express**: Web framework for Node.js
- **cors**: Enable CORS for cross-origin requests

## Testing the API

Once the server is running, you can test the API endpoint:

```bash
curl http://localhost:5000/api/products
```

Or open your browser and navigate to: `http://localhost:5000/api/products`
