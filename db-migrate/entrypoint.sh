#!/bin/sh

# script exit immidiately if any command return non-zero value
set -e

# run wait-for script
POSTGRES_URL=$POSTGRES_HOST:$POSTGRES_PORT
echo "Checking connection to database $POSTGRES_URL..."
./wait-for $POSTGRES_URL -- echo "Database is up"

# run all commands pass to this script
echo "Start migrating..."
exec migrate "$@"
