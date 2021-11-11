#!/bin/sh
# adding FLASK_ENV=development to the start of this command, acts as a debugger and refreshes the local host automatically.
FLASK_ENV=development FLASK_APP=webserver.app python -m flask run
# Run this by cd'ing into conway and typing ./run-flask.sh