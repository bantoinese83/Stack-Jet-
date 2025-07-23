#!/bin/bash

set -e

# Helper to create .env files if they don't exist
create_env_file() {
  local path="$1"
  local content="$2"
  if [ -f "$path" ]; then
    echo "✔ $path already exists, skipping."
  else
    echo "Creating $path"
    echo -e "$content" > "$path"
  fi
}

echo "=== Setting up backend environment files ==="
create_env_file "backend/.env.dev"  "PORT=3001\nJWT_SECRET=dev_secret_key"
create_env_file "backend/.env.test" "PORT=3002\nJWT_SECRET=test_secret_key"
create_env_file "backend/.env.prod" "PORT=80\nJWT_SECRET=prod_secret_key"

echo "=== Setting up frontend environment files ==="
create_env_file "frontend/.env.development" "VITE_API_URL=http://localhost:3001"
create_env_file "frontend/.env.test"        "VITE_API_URL=http://localhost:3002"
create_env_file "frontend/.env.production"  "VITE_API_URL=https://your-production-backend.com"

echo "=== Done! ==="
echo "You can now edit the .env files with your real secrets and URLs."
echo "Never commit these files with real secrets to version control." 