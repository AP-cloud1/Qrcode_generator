# QR Code Generator Web Application

A modern, user-friendly web application for generating QR codes with a clean interface and dark/light theme support.

![Python](https://img.shields.io/badge/python-3.8+-blue.svg)
![Flask](https://img.shields.io/badge/flask-2.3.3-green.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Features

- QR Code Generation
  - Support for text and URLs
  - Customizable generation parameters
  - PNG image output
- Modern User Interface
  - Responsive design
  - Dark/Light mode toggle
  - Gradient backgrounds
  - Glass morphism design elements
  - Smooth animations

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/qr-code-generator.git
cd qr-code-generator
```

2. Create and activate a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

## Usage

1. Start the application:
```bash
python app.py
```
Or use the provided launchers:
- `start_app.pyw` for silent launch
- `run_app.bat` for debug mode

2. Open your web browser and navigate to:
```
http://localhost:5000
```

3. Enter text or URL in the input field and click "Generate" to create a QR code.

## Dependencies

- Flask (2.3.3)
- qrcode (7.4.2)
- Pillow (10.2.0)

## Development

- Python 3.8 or higher required
- Virtual environment recommended
- Code follows PEP 8 style guide

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Troubleshooting

### Common Issues

1. **ModuleNotFoundError**: Make sure all dependencies are installed:
```bash
pip install -r requirements.txt
```

2. **Port already in use**: Change the port in `app.py` or close the application using that port.

3. **Image generation error**: Ensure Pillow is properly installed and up to date.

## Support

For support, please open an issue in the GitHub repository.
