# Variables
BACKEND_DIR = server
FRONTEND_DIR = client

# Phony targets
.PHONY: install run clean

# Default target
all: install run

# Install dependencies
install:
	@echo "Installing backend dependencies..."
	cd $(BACKEND_DIR) && pnpm install
	@echo "Installing frontend dependencies..."
	cd $(FRONTEND_DIR) && pnpm install

# Run the application
run:
	@echo "Starting the backend..."
	cd $(BACKEND_DIR) && ./run.sh &
	@echo "Starting the frontend..."
	cd $(FRONTEND_DIR) && pnpm run dev

# Clean up
clean:
	@echo "Cleaning up..."
	rm -rf $(BACKEND_DIR)/node_modules
	rm -rf $(FRONTEND_DIR)/node_modules
	@echo "node_modules directories removed."