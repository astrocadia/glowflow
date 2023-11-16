#### Running GlowFlow with pm2

1. navigate to the scripts folder and run: ./setup.sh
2. once the installation is complete run: ./start.sh
3. pm2 can be used to monitor the status of the services i.e. "pm2 status" or "pm2 logs"
4. to stop the services from running run: ./stop.sh

NOTE: The ESP32_IP_ADDRESS in glowflow-ws-service/index.js is currently hard-coded, this should be moved to a dotenv var.
