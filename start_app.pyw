import subprocess
import sys
import os
import webbrowser
import time
from threading import Thread

def run_flask():
    # Get the directory containing this script
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Activate virtual environment if it exists
    if os.path.exists(os.path.join(current_dir, 'venv')):
        if sys.platform == 'win32':
            python_path = os.path.join(current_dir, 'venv', 'Scripts', 'python.exe')
        else:
            python_path = os.path.join(current_dir, 'venv', 'bin', 'python')
    else:
        python_path = sys.executable

    # Run the Flask application
    subprocess.Popen([python_path, 'app.py'], 
                    cwd=current_dir,
                    creationflags=subprocess.CREATE_NO_WINDOW)  # Hide console window

def open_browser():
    # Wait for Flask to start
    time.sleep(2)
    webbrowser.open('http://localhost:5000')

if __name__ == '__main__':
    # Start Flask in a separate thread
    Thread(target=run_flask).start()
    
    # Open the browser
    Thread(target=open_browser).start()
