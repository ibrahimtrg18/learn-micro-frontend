HOST_NEXTJS_DIR=./host-nextjs
REMOTE_NEXTJS_DIR=./remote_nextjs
REMOTE_REACT_DIR=./remote_react
VITEJS_DIR=./remote_react

# Define commands to run each project
start-host-nextjs:
	cd $(HOST_NEXTJS_DIR) && npm install && npm run dev

start-remote_nextjs:
	cd $(REMOTE_NEXTJS_DIR) && npm install && npm run dev

start-remote_react:
	cd $(REMOTE_REACT_DIR) && npm install && npm run dev

# Run all projects simultaneously
start-all:
	$(MAKE) start-host-nextjs &
	$(MAKE) start-remote_nextjs &
	$(MAKE) start-remote_react &
	wait