#!/bin/bash
cd /opt/msgiq
npm install
bower install
echo "Starting Server"
nohup grunt serve >> logs/server.log 2>&1 &
