# Globoplay Extension

## Description
Globoplay Extension is a Chrome extension designed to enhance the viewing experience on the Globoplay website. It helps disable annoying overlays that appear when hovering the mouse over the web player.

## Installation
1. Clone the repository:
   ```
    git clone https://github.com/marcelosj3/globoplay-extension.git
   ```
2. Navigate to the project directory:
   ```
    cd globoplay-extension
   ```
3. Install the dependencies using Yarn:
   ```
    yarn install
   ```
## Usage
1. Generate a zip file of the extension:
   ```
    yarn zip-build
   ```
2. Open Google Chrome and go to `chrome://extensions`.

3. Enable the "Developer mode" toggle in the top-right corner.

4. Click on "Load unpacked" and select the `build` directory or the generated `build.zip` file from the project.

- If you choose to load the `build` directory:
  - Make sure to select the entire directory, not just its contents.
  - Click "Select Folder" to load the extension.

- If you choose to load the `build.zip` file:
  - Chrome will extract the contents of the zip file and load the extension.

5. The Globoplay Extension will be added to your Chrome browser.

6. Visit the Globoplay website and start enjoying an enhanced viewing experience without the annoying overlays.

## Development
If you want to contribute to the development of Globoplay Extension, follow these steps:

1. Fork the repository on GitHub.

2. Clone your forked repository:
   ```
    git clone https://github.com/your-username/globoplay-extension.git
   ```
3. Navigate to the project directory:
   ```
    cd globoplay-extension
   ```
4. Install the dependencies using Yarn:
   ```
    yarn install
   ```
5. Start the development server:
   ```
    yarn start
   ```
6. Make your changes and test them in your local environment.

7. Commit your changes and push to your forked repository.

8. Create a pull request on the original repository to propose your changes.

## Deployment
To deploy your Globoplay Extension to the Chrome Web Store, follow these steps:

1. Create a zip file of the build directory:
   ```
    yarn zip-build
   ```
2. Go to the [Chrome Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard).

3. Create a new item and upload the zip file generated in the previous step.

4. Fill in the required details, such as the extension's name, description, screenshots, and promotional images.

5. Submit the extension for review.

## License
This project is licensed under the [MIT License](LICENSE).
