#### Running GlowFlow with pm2

1. Install pm2 globally by running "npm install pm2 -g"
2. navigate to the scripts folder and run: ./setup.sh
3. once the installation is complete run: ./start.sh
4. pm2 can be used to monitor the status of the services i.e. "pm2 status" or "pm2 logs" and the frontend will be live at the vite default port: localhost:5173
5. to stop the services from running run: ./stop.sh

NOTE: The ESP32_IP_ADDRESS in glowflow-ws-service/index.js is currently hard-coded, this should be moved to a dotenv var.
