#!/bin/bash

source activate /home/ubuntu/anaconda3/envs/test
cd /home/ubuntu/textToArt/
uvicorn api2:app --port 8000 --host 0.0.0.0

