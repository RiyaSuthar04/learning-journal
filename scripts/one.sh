#!/bin/bash

# Stop if any command fails
set -e

# Project name
PROJECT_NAME=$1

# Check project name
if [ -z "$PROJECT_NAME" ]; then
    echo "Usage: ./bootstrap.sh <project-name>"
    exit 1
fi

echo "Creating project: $PROJECT_NAME"

# Create project directory
mkdir "$PROJECT_NAME"

# Enter project directory
cd "$PROJECT_NAME"

# Initialize Node.js project
npm init -y

# Create basic folders
mkdir src
mkdir src/controllers
mkdir src/routes
mkdir src/models

# Create basic files
touch src/server.js
touch .env
touch .gitignore
touch README.md

# Add node_modules to gitignore
echo "node_modules/" >> .gitignore
echo ".env" >> .gitignore


echo ""
echo "Project created successfully!"


echo ""
echo "Next steps:"
echo "cd $PROJECT_NAME"
echo "npm install"
echo "node src/server.js"