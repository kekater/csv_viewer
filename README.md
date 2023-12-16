# Project Description: CSV File Viewer

## Single Page Application

### Overview
This project is a simple CSV (Comma-Separated Values) file viewer implemented in HTML, CSS, and JavaScript. It allows users to upload CSV files, view their contents in a table format, and provides a drag-and-drop interface for a seamless experience.

### Features
1. CSV File Upload:

* Users can either select a CSV file using the file input button or drag and drop a CSV file onto the designated area.

2. CSV File Processing:

* Upon file selection or drop, the application reads the content of the CSV file, processes it, and stores the data in the browser's localStorage for persistent viewing.

3. Encoding Handling:

* The application attempts to handle different file encodings, specifically targeting CP1251 encoding for compatibility.

4. Table View:

* The processed data is displayed in a tabular format, showing various columns such as name, phone, email, birthday, and address.

5. Error Handling:

* If an invalid file or format is detected, an error screen is displayed to inform the user.

6. Responsive Design:

* The application provides a responsive design, adapting to different screen sizes and orientations.

### Usage
1. Uploading CSV File:

* Click the "Upload File" button to select a CSV file manually.
* Alternatively, drag and drop a CSV file onto the designated area for quick upload.

2. Viewing Table:

* The uploaded CSV file's data is displayed in a table format.
* If the table is not visible, click the "View Table" button to display the table.

3. Refreshing Data:

* To refresh the data and return to the upload screen, click the "Reload" button.

4. Handling Encoding Issues:

* If the application encounters issues with encoding, it attempts to handle CP1251 encoding. However, manual selection or additional encoding support may be needed in some cases.

### Project Structure
* HTML: index.html - The main HTML file containing the structure of the application.
* CSS: style.css - The stylesheet providing the visual styling for the application.
* JavaScript: app.js - The main JavaScript file containing the logic for file handling, data processing, and screen display.

### Dependencies
* None (pure HTML, CSS, and JavaScript).

### Notes
* The application handles CSV files with at least five columns (name, phone, email, birthday, and address).
* Feel free to contribute, report issues, or suggest improvements to enhance the functionality and usability of this CSV file viewer.