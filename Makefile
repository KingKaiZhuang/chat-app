.PHONY: all server client socket

all: server client socket

server:
	@echo "Starting server with nodemon..."
	@cd server && nodemon

client:
	@echo "Starting client with npm run dev..."
	@cd client && npm run dev

socket:
	@echo "Starting socket with nodemon..."
	@cd socket && nodemon
