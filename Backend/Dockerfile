# Use an official Python runtime as the base image
FROM python:3.11-slim

# Set working directory in the container
WORKDIR /app

# First copy ONLY requirements.txt to leverage Docker cache
COPY Backend/requirements.txt .

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libgl1-mesa-glx \
    libglib2.0-0 \
    libpng-dev \
    libjpeg-dev \
    libtiff-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire backend project into the container
COPY Backend/ .

# Expose port 7000 as specified
EXPOSE 7000

# Define the entrypoint
ENTRYPOINT ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "7000"]