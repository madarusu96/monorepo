#!/bin/bash

echo "Removing existing node_modules folders..."
find . -name "node_modules" -type d -exec rm -rf {} +

echo "Installing dependencies..."
npm install

echo "Building packages..."
npm run build

echo "Building Tailwind CSS..."
npx tailwindcss build -i ./shared-configs/styles.css -o ./shared-configs/output.css

echo "Starting the project..."
npm start
