@echo off
echo Setting up QR Code Generator...

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo Python is not installed! Please install Python from https://www.python.org/downloads/
    pause
    exit /b 1
)

REM Create virtual environment if it doesn't exist
if not exist "venv" (
    echo Creating virtual environment...
    python -m venv venv
)

REM Activate virtual environment
call venv\Scripts\activate

REM Install requirements
echo Installing requirements...
pip install -r requirements.txt

REM Run the Flask application
echo Starting the application...
echo.
echo Please open your web browser and go to: http://localhost:5000
echo.
echo Press Ctrl+C to stop the server when you're done.
echo.
python app.py

REM Deactivate virtual environment (this will only run if the user manually closes the script)
deactivate
