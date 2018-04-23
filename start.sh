#!/usr/bin/env bash

echo "Running Fractal and Gulp"
fractal start --watch --sync &
gulp
