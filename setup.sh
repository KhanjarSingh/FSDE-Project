#!/bin/bash
echo "Setting up server..."
cd server && npm install
if [ ! -f ".env" ]; then echo "PORT=5001\nMONGO_URI=mongodb://localhost:27017/minishop\nJWT_SECRET=supersecret$(date +%s)" > .env; fi
echo "Setting up client..."
cd ../client && npm install
echo "Setup complete!"
