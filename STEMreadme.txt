Self-Hosting the STEM Pathways Website Locally
You can easily host and view this website locally on your own computer. Here's a step-by-step guide:

Prerequisites
Node.js installed on your computer (version 14+ recommended)
Basic knowledge of the command line
Steps to Self-Host
1. Download the Project Files
First, download all the project files from Replit. You can do this by:

Clicking on the three dots (⋮) in the files panel
Selecting "Download as ZIP"
Extracting the ZIP file to a folder on your computer
2. Install Dependencies
Open a terminal or command prompt, navigate to the project folder, and run:

npm install express
This will install the Express.js server that the application uses.

3. Run the Server
In the same terminal, run:

node server.js
You should see this message:

STEM Pathways server running at http://0.0.0.0:5000
4. View the Website
Open your web browser and go to:

http://localhost:5000
You should now see the STEM Pathways website running locally on your computer!

Project Structure Overview
If you want to make changes, here's where to find everything:

html/ - Contains all the website files

index.html - Homepage
field.html - STEM field details page
subcategory.html - Subcategory details page
job.html - Job details page
css/styles.css - All styling for the website
js/data.js - All STEM fields, jobs, and certifications data
js/main.js - JavaScript functionality
server.js - Simple Express server that serves the static website files

Making Changes
To modify the content, edit html/js/data.js
To change the styling, edit html/css/styles.css
To alter the functionality, edit html/js/main.js
After making changes, simply refresh your browser to see them (no need to restart the server for HTML/CSS/JS changes).

