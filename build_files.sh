#!/bin/bash
# Install Python dependencies for Vercel
echo "Installing dependencies..."
pip install -r backend/requirements.txt

# Run migrations and collect static files
# In a real setup, handle migrations via CI/CD, but we include it here for standard practice.
echo "Running collectstatic..."
python3.11 backend/manage.py collectstatic --no-input --clear
