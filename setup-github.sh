#!/bin/bash

# WorthView Website - GitHub Setup Script
# Run this after creating the repo on GitHub

echo "🚀 Setting up WorthView Website repository..."

cd "/Users/dmytrolozynskyi/Documents/Regent App/worthview-website"

# Add remote (replace with your actual repo URL if different)
git remote add origin git@github.com:lozynskyidv/worthview-website.git

# Push to GitHub
git push -u origin main

echo "✅ Website pushed to GitHub!"
echo ""
echo "Next steps:"
echo "1. Go to https://app.netlify.com/"
echo "2. Click 'Add new site' → 'Import an existing project'"
echo "3. Select 'worthview-website' repository"
echo "4. Click 'Deploy site'"
echo ""
echo "🎉 Done!"
