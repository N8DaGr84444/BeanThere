#!/usr/bin/env bash

set -e

echo "🚀 Full Android build (UI + native)"

ionic build
ionic cap sync android
ionic cap build android
ionic cap open android

echo "✅ Full build complete"