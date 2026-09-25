#!/bin/bash
# Auto-sync script to stage, commit, and push all changes to GitHub

cd "$(dirname "$0")/.."

if [[ -z $(git status -s) ]]; then
  echo "✅ No changes to commit. Everything is up to date."
  exit 0
fi

git add .

TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
COMMIT_MSG="${1:-Auto update portfolio: $TIMESTAMP}"

git commit -m "$COMMIT_MSG"

if git remote | grep -q "origin"; then
  echo "🚀 Pushing changes to GitHub..."
  git push origin main
  echo "🎉 Successfully uploaded changes to GitHub!"
else
  echo "⚠️ Local changes committed successfully!"
  echo "📌 Note: Remote URL not configured yet. Add your GitHub URL once with:"
  echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
fi
