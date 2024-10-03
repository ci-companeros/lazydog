#!/bin/bash
# init_tasks.sh
#
# This script provides setup tasks for development environments.
# It checks if the script is running in a Gitpod environment and customizes the workspace:
# 1. Personalizes the greeting by replacing USER_NAME in the README.md with the actual Gitpod user name.
# 2. Sets up a configuration file for SQLite (.sqliterc) with useful defaults.
# 3. Displays a friendly message when the setup is complete.
# 
# If not running in Gitpod, it skips Gitpod-specific tasks and still creates the SQLite configuration.
#
# Author: JaqiKal (based on original work by Matt Rudge, Code Institute)

# Check if running in Gitpod
if [ -z "$GITPOD_REPO_ROOT" ]; then
    echo "This script is designed for Gitpod. Skipping Gitpod-specific tasks."
else
    echo "Setting the greeting"
    sed -i "s/USER_NAME/$GITPOD_GIT_USER_NAME/g" ${GITPOD_REPO_ROOT}/README.md
fi

# SQLite configuration for both environments
echo "Creating .sqliterc file"
echo ".headers on" > ~/.sqliterc
echo ".mode column" >> ~/.sqliterc

echo "Your workspace is ready to use. Happy coding!"
