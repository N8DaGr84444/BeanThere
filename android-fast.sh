#!/usr/bin/env bash

set -e

echo "⚡ Fast Android update (web only)"

ionic build
ionic cap copy android
ionic cap open android

echo "✅ Fast update complete"
