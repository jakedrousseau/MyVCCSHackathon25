# STEM Pathways

STEM Pathways is a career matching platform that connects STEM job seekers with relevant certifications required for their target positions.

## 📋 Overview

This platform helps users explore careers in Science, Technology, Engineering, and Mathematics fields. It provides information about different job roles, the certifications required for each position, and career progression pathways.

## 🚀 Features

- Browse jobs by STEM category (Science, Technology, Engineering, Mathematics)
- Explore subcategories and specific job types within each STEM field
- View detailed information about each job including skills required and salary range
- Discover certifications needed for specific career paths
- Learn about career pathways and progression opportunities

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, and vanilla JavaScript
- **Styling**: Custom CSS with variables for theming
- **Server**: Simple Express.js server for static file serving
- **Data Storage**: JavaScript objects in data.js

## 🏗️ Project Structure

```
├── html/                       # Main project directory
│   ├── css/                    # CSS stylesheets
│   │   └── styles.css          # Main CSS file with all styles
│   ├── js/                     # JavaScript files
│   │   ├── data.js             # Data storage for STEM fields, jobs, certifications
│   │   └── main.js             # Main JavaScript functionality
│   ├── images/                 # Image assets (if any)
│   ├── index.html              # Homepage
│   ├── field.html              # STEM field detail page
│   ├── subcategory.html        # Subcategory detail page
│   └── job.html                # Job detail page
└── server.js                   # Express server for serving static files
```

## 🔎 Data Structure

All data is stored in the `js/data.js` file as JavaScript objects. Here's an overview of the data structure:

### stemFields
Contains information about STEM fields and their subcategories:

```javascript
const stemFields = [
  {
    id: "science",
    name: "Science",
    description: "...",
    subcategories: [
      {
        id: "biology",
        name: "Biology",
        jobTypes: ["Microbiologist", "Biochemist", ...]
      },
      // More subcategories...
    ]
  },
  // More STEM fields...
];
```

### jobs
Contains job listings with their details:

```javascript
const jobs = [
  {
    id: 1,
    title: "Data Scientist",
    description: "...",
    category: "technology",
    subcategory: "data-science",
    level: "mid",
    duration: "full-time",
    skills: ["Python", "Machine Learning", ...],
    salary: "$90,000 - $120,000"
  },
  // More jobs...
];
```

### certifications
Contains certification details:

```javascript
const certifications = [
  {
    id: 1,
    name: "Certified Data Scientist (CDS)",
    provider: "Data Science Council of America",
    description: "...",
    duration: "6 months",
    cost: "$500",
    difficulty: "Advanced",
    category: "technology"
  },
  // More certifications...
];
```

### jobCertifications
Maps jobs to required certifications:

```javascript
const jobCertifications = [
  {
    id: 1,
    jobId: 1,
    certificationId: 1,
    importance: "Essential"
  },
  // More mappings...
];
```

### careerPaths
Contains career progression pathways:

```javascript
const careerPaths = [
  {
    id: 1,
    jobId: 1,
    title: "Data Scientist Career Path",
    description: "...",
    steps: [
      {
        title: "Junior Data Analyst",
        description: "...",
        skills: ["SQL", "Excel", ...]
      },
      // More steps...
    ]
  },
  // More career paths...
];
```

## 🔄 How to Add or Modify Data

All data modifications are done in the `html/js/data.js` file.

### Adding a New STEM Field Subcategory
1. Open `js/data.js`
2. Find the appropriate STEM field in the `stemFields` array
3. Add a new subcategory to its `subcategories` array:

```javascript
{
  id: "subcategory-id",
  name: "Subcategory Name",
  jobTypes: ["Job Type 1", "Job Type 2", ...]
}
```

### Adding a New Job
1. Add a new object to the `jobs` array:

```javascript
{
  id: [NEXT_AVAILABLE_ID],
  title: "Job Title",
  description: "Job description...",
  category: "technology|science|engineering|mathematics",
  subcategory: "subcategory-id",
  level: "entry|mid|senior",
  duration: "full-time|part-time|contract",
  skills: ["Skill 1", "Skill 2", ...],
  salary: "$XX,XXX - $XX,XXX"
}
```

### Adding a New Certification
1. Add a new object to the `certifications` array:

```javascript
{
  id: [NEXT_AVAILABLE_ID],
  name: "Certification Name",
  provider: "Certification Provider",
  description: "Description of certification...",
  duration: "Duration (e.g., '6 months')",
  cost: "$XXX",
  difficulty: "Beginner|Intermediate|Advanced",
  category: "technology|science|engineering|mathematics"
}
```

### Adding a New Career Path
1. Add a new object to the `careerPaths` array:

```javascript
{
  id: [NEXT_AVAILABLE_ID],
  jobId: [JOB_ID],
  title: "Career Path Title",
  description: "Description of the career path...",
  steps: [
    {
      title: "Step Title",
      description: "Description of this career step...",
      skills: ["Skill 1", "Skill 2", ...]
    },
    // More steps...
  ]
}
```

## 🎨 Modifying the Theme

The theme is controlled through CSS variables in the `html/css/styles.css` file. To modify the theme:

1. Open `css/styles.css`
2. Find the `:root` section at the top of the file
3. Modify the color variables to change the theme:

```css
:root {
  --primary: #255970;
  --primary-light: #9CD7E8;
  --primary-dark: #1B3F4E;
  --accent: #7BC7B9;
  /* More color variables... */
}
```

## 🧩 Page Structure and Functionality

### index.html (Homepage)
- Displays a hero section with a call-to-action
- Shows the four main STEM fields with interactive cards
- Featured job categories and certifications sections

### field.html
- Dynamic page that shows details about a specific STEM field
- Displays subcategories within that field
- Shows related job listings

### subcategory.html
- Details about a specific subcategory within a STEM field
- Displays job types within the subcategory
- Shows available job listings

### job.html
- Detailed information about a specific job
- Required skills and certifications
- Career progression pathway

## 🚀 Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/jakedrousseau/MYVCCSHackathon25.git
unzip CareerSkillMapperProduct.zip
cd CareerSkillMapperProduct
```

2. Install dependencies
```bash
npm install express
```

3. Start the server
```bash
node server.js
```

4. Open your browser and visit `http://localhost:5000

## 📱 Responsive Design

The website is fully responsive and works well on:
- Desktop (1200px and above)
- Tablet (768px to 1199px)
- Mobile (below 768px)

The layout adjusts automatically using CSS media queries defined in `styles.css`.

## 🔧 JavaScript Functions

The `main.js` file contains several useful functions:

- `getAllJobs()` - Returns all job listings
- `getJobById(id)` - Gets a job by its ID
- `getJobsByCategory(category)` - Filters jobs by STEM category
- `getFieldById(id)` - Gets a STEM field by its ID
- `getCertificationsForJob(jobId)` - Gets certifications required for a job
- `getCareerPathForJob(jobId)` - Gets the career path for a job

These functions can be called from the browser console for testing or used to build additional features.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.
created for the 2025 NOVA Hackathon by Jacob Rousseau and Jordyn Dixon
