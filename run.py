#!/usr/bin/env python3

from routes import app

if __name__ == '__main__':
    # SIGINT to stop (Ctrl + C)
    app.run(debug=True, port=4000)