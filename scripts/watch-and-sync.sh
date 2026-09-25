#!/bin/bash
# Real-time background auto-watcher and GitHub sync script

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"

echo "👀 Auto-Git sync watcher active!"

while true; do
  if [[ -n $(git status -s) ]]; then
    sleep 4
    if [[ -n $(git status -s) ]]; then
      git add .
      TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
      git commit -m "Auto update: $TIMESTAMP"
      git push origin main >/dev/null 2>&1
      echo "🎉 Auto-synced changes to GitHub at $TIMESTAMP!"
    fi
  fi
  sleep 6
done
