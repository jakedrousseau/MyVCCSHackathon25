// STEM Pathways - Main JavaScript

// DOM Content Loaded Event Listener
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  setupMobileMenu();
  
  // Get current page
  const currentPage = getCurrentPage();
  
  // Initialize the appropriate page
  switch(currentPage) {
    case 'index':
      initHomePage();
      break;
    case 'field':
      initFieldPage();
      break;
    case 'subcategory':
      initSubcategoryPage();
      break;
    case 'job':
      initJobPage();
      break;
    default:
      // Default initialization for all pages
      break;
  }
});

// Setup mobile menu functionality
function setupMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('collapsed');
    });
  }
}

// Get current page from URL
function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes('field.html')) {
    return 'field';
  } else if (path.includes('subcategory.html')) {
    return 'subcategory';
  } else if (path.includes('job.html')) {
    return 'job';
  } else {
    return 'index';
  }
}

// Get URL parameters helper function
function getUrlParams() {
  const params = {};
  const queryString = window.location.search.substring(1);
  const pairs = queryString.split('&');
  
  for (let i = 0; i < pairs.length; i++) {
    if (pairs[i] === '') continue;
    
    const pair = pairs[i].split('=');
    params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  
  return params;
}

// Helper function to make first letter uppercase
function firstLetterUppercase(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Homepage initialization
function initHomePage() {
  const stemCategoriesContainer = document.querySelector('.stem-category');
  if (stemCategoriesContainer) {
    renderStemFields(stemCategoriesContainer);
  }
  
  const popularJobsContainer = document.querySelector('.popular-jobs');
  if (popularJobsContainer) {
    renderPopularJobs(popularJobsContainer);
  }
  
  const popularCertificationsContainer = document.querySelector('.popular-certifications');
  if (popularCertificationsContainer) {
    renderPopularCertifications(popularCertificationsContainer);
  }
}

// Render STEM fields cards
function renderStemFields(container) {
  const fields = getAllFields();
  let html = '';
  
  fields.forEach(field => {
    html += `
      <div class="stem-field-card">
        <div class="stem-field-card__header">
          <h3>${field.name}</h3>
        </div>
        <div class="stem-field-card__body">
          <p>${field.description}</p>
          <p><strong>Subcategories:</strong> ${field.subcategories.length}</p>
        </div>
        <div class="stem-field-card__footer">
          <a href="field.html?id=${field.id}" class="button button-secondary">Explore ${field.name}</a>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

// Render popular jobs
function renderPopularJobs(container) {
  const popularCategories = getPopularJobCategories();
  let html = '<h2>Popular Job Categories</h2><div class="row">';
  
  popularCategories.slice(0, 3).forEach(category => {
    html += `
      <div class="col">
        <div class="card">
          <h3 class="card-title">${category.name}</h3>
          <div class="card-content">
            <p>${stemFields.find(field => field.id === category.id).description}</p>
            <p><strong>Available Jobs:</strong> ${category.count}</p>
          </div>
          <div class="card-footer">
            <a href="field.html?id=${category.id}" class="button">Explore Jobs</a>
          </div>
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  container.innerHTML = html;
}

// Render popular certifications
function renderPopularCertifications(container) {
  const popularCerts = getPopularCertifications();
  let html = '<h2>Popular Certifications</h2><div class="row">';
  
  popularCerts.slice(0, 3).forEach(cert => {
    html += `
      <div class="col">
        <div class="certification-item">
          <div class="certification-icon">
            <i class="cert-icon">🏆</i>
          </div>
          <div class="certification-content">
            <h4 class="certification-title">${cert.name}</h4>
            <div class="certification-provider">${cert.provider}</div>
            <p>${cert.description.substring(0, 100)}...</p>
            <div class="certification-details">
              <span class="certification-detail"><i class="detail-icon">⏱️</i> ${cert.duration}</span>
              <span class="certification-detail"><i class="detail-icon">💰</i> ${cert.cost}</span>
              <span class="certification-detail"><i class="detail-icon">📚</i> ${cert.difficulty}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  container.innerHTML = html;
}

// Field page initialization
function initFieldPage() {
  const params = getUrlParams();
  const fieldId = params.id;
  
  if (!fieldId) {
    window.location.href = 'index.html';
    return;
  }
  
  const field = getFieldById(fieldId);
  if (!field) {
    window.location.href = 'index.html';
    return;
  }
  
  // Update page title
  document.title = `${field.name} Field - STEM Pathways`;
  
  // Update field header
  const fieldHeader = document.querySelector('.field-header');
  if (fieldHeader) {
    fieldHeader.innerHTML = `
      <div class="container">
        <h1>${field.name}</h1>
        <p>${field.description}</p>
      </div>
    `;
  }
  
  // Render subcategories
  const subcategoriesContainer = document.querySelector('.subcategory-list');
  if (subcategoriesContainer) {
    let html = '';
    
    field.subcategories.forEach(subcategory => {
      html += `
        <li class="subcategory-item">
          <div class="card subcategory-card">
            <h3 class="card-title">${subcategory.name}</h3>
            <div class="subcategory-card__body">
              <p>${subcategory.description}</p>
              <h4>Job Types:</h4>
              <ul class="job-types-list">
                ${subcategory.jobTypes.map(job => `<li>${job}</li>`).join('')}
              </ul>
            </div>
            <div class="card-footer">
              <a href="subcategory.html?fieldId=${fieldId}&id=${subcategory.id}" class="button">Explore Subcategory</a>
            </div>
          </div>
        </li>
      `;
    });
    
    subcategoriesContainer.innerHTML = html;
  }
  
  // Render jobs in this field
  const jobsContainer = document.querySelector('.field-jobs');
  if (jobsContainer) {
    const fieldJobs = getJobsByCategory(fieldId);
    
    if (fieldJobs.length > 0) {
      let html = '<h2>Jobs in this Field</h2><div class="row">';
      
      fieldJobs.slice(0, 3).forEach(job => {
        html += `
          <div class="col">
            <div class="card">
              <h3 class="card-title">${job.title}</h3>
              <div class="card-content">
                <p>${job.description.substring(0, 150)}...</p>
                <p><strong>Level:</strong> ${firstLetterUppercase(job.level)}</p>
              </div>
              <div class="card-footer">
                <a href="job.html?id=${job.id}" class="button">View Details</a>
              </div>
            </div>
          </div>
        `;
      });
      
      html += '</div>';
      if (fieldJobs.length > 3) {
        html += `
          <div class="text-center" style="margin-top: 20px;">
            <a href="#" class="button button-secondary">View All ${fieldJobs.length} Jobs</a>
          </div>
        `;
      }
      
      jobsContainer.innerHTML = html;
    } else {
      jobsContainer.innerHTML = '<div class="alert">No jobs currently available in this field. Check back soon!</div>';
    }
  }
}

// Subcategory page initialization
function initSubcategoryPage() {
  const params = getUrlParams();
  const fieldId = params.fieldId;
  const subcategoryId = params.id;
  
  if (!fieldId || !subcategoryId) {
    window.location.href = 'index.html';
    return;
  }
  
  const field = getFieldById(fieldId);
  const subcategory = getSubcategoryById(fieldId, subcategoryId);
  
  if (!field || !subcategory) {
    window.location.href = 'index.html';
    return;
  }
  
  // Update page title
  document.title = `${subcategory.name} - STEM Pathways`;
  
  // Update subcategory header
  const subcategoryHeader = document.querySelector('.subcategory-header');
  if (subcategoryHeader) {
    subcategoryHeader.innerHTML = `
      <div class="container">
        <a href="field.html?id=${fieldId}" class="breadcrumb">${field.name}</a> &gt; 
        <h1>${subcategory.name}</h1>
        <p>${subcategory.description}</p>
      </div>
    `;
  }
  
  // Render job types
  const jobTypesContainer = document.querySelector('.job-types-container');
  if (jobTypesContainer) {
    let html = '<h2>Job Types</h2><div class="job-types-grid">';
    
    subcategory.jobTypes.forEach(jobType => {
      html += `
        <div class="job-type-card">
          <h3>${jobType}</h3>
        </div>
      `;
    });
    
    html += '</div>';
    jobTypesContainer.innerHTML = html;
  }
  
  // Render jobs in this subcategory
  const jobsContainer = document.querySelector('.subcategory-jobs');
  if (jobsContainer) {
    const subcategoryJobs = getJobsBySubcategory(subcategoryId);
    
    if (subcategoryJobs.length > 0) {
      let html = '<h2>Available Jobs</h2><div class="row">';
      
      subcategoryJobs.forEach(job => {
        html += `
          <div class="col">
            <div class="card">
              <h3 class="card-title">${job.title}</h3>
              <div class="card-content">
                <p>${job.description.substring(0, 150)}...</p>
                <p><strong>Level:</strong> ${firstLetterUppercase(job.level)}</p>
                <p><strong>Salary:</strong> ${job.salary}</p>
              </div>
              <div class="card-footer">
                <a href="job.html?id=${job.id}" class="button">View Details</a>
              </div>
            </div>
          </div>
        `;
      });
      
      html += '</div>';
      jobsContainer.innerHTML = html;
    } else {
      jobsContainer.innerHTML = '<div class="alert">No jobs currently available in this subcategory. Check back soon!</div>';
    }
  }
}

// Job page initialization
function initJobPage() {
  const params = getUrlParams();
  const jobId = params.id;
  
  if (!jobId) {
    window.location.href = 'index.html';
    return;
  }
  
  const job = getJobById(jobId);
  if (!job) {
    window.location.href = 'index.html';
    return;
  }
  
  const field = getFieldById(job.category);
  const subcategory = getSubcategoryById(job.category, job.subcategory);
  
  // Update page title
  document.title = `${job.title} - STEM Pathways`;
  
  // Update job header
  const jobHeader = document.querySelector('.job-header');
  if (jobHeader) {
    jobHeader.innerHTML = `
      <div class="container">
        <div class="breadcrumbs">
          <a href="field.html?id=${job.category}">${field.name}</a> &gt; 
          <a href="subcategory.html?fieldId=${job.category}&id=${job.subcategory}">${subcategory.name}</a>
        </div>
        <h1 class="job-title">${job.title}</h1>
        <div class="job-meta">
          <span class="job-meta-item"><i class="meta-icon">📊</i> ${firstLetterUppercase(job.level)} Level</span>
          <span class="job-meta-item"><i class="meta-icon">⏱️</i> ${firstLetterUppercase(job.duration)}</span>
          <span class="job-meta-item"><i class="meta-icon">💰</i> ${job.salary}</span>
        </div>
      </div>
    `;
  }
  
  // Job description
  const jobDescription = document.querySelector('.job-description');
  if (jobDescription) {
    jobDescription.innerHTML = `
      <div class="container">
        <div class="job-section">
          <h2 class="job-section-title">Job Description</h2>
          <p>${job.description}</p>
        </div>
      </div>
    `;
  }
  
  // Job skills
  const jobSkills = document.querySelector('.job-skills');
  if (jobSkills) {
    let html = `
      <div class="container">
        <div class="job-section">
          <h2 class="job-section-title">Required Skills</h2>
          <ul class="skills-list">
    `;
    
    job.skills.forEach(skill => {
      html += `<li class="skill-tag">${skill}</li>`;
    });
    
    html += `
          </ul>
        </div>
      </div>
    `;
    
    jobSkills.innerHTML = html;
  }
  
  // Job certifications
  const jobCertifications = document.querySelector('.job-certifications');
  if (jobCertifications) {
    const certifications = getCertificationsForJob(jobId);
    
    if (certifications.length > 0) {
      let html = `
        <div class="container">
          <div class="job-section">
            <h2 class="job-section-title">Required Certifications</h2>
      `;
      
      certifications.forEach(cert => {
        const importanceClass = cert.importance === 'Essential' ? 'importance-essential' : 
                              cert.importance === 'Recommended' ? 'importance-recommended' : 
                              'importance-optional';
        
        html += `
          <div class="certification-item ${importanceClass}">
            <div class="certification-icon">
              <i class="cert-icon">🏆</i>
            </div>
            <div class="certification-content">
              <div class="certification-importance">${cert.importance}</div>
              <h4 class="certification-title">${cert.name}</h4>
              <div class="certification-provider">${cert.provider}</div>
              <p>${cert.description}</p>
              <div class="certification-details">
                <span class="certification-detail"><i class="detail-icon">⏱️</i> ${cert.duration}</span>
                <span class="certification-detail"><i class="detail-icon">💰</i> ${cert.cost}</span>
                <span class="certification-detail"><i class="detail-icon">📚</i> ${cert.difficulty}</span>
              </div>
            </div>
          </div>
        `;
      });
      
      html += `
          </div>
        </div>
      `;
      
      jobCertifications.innerHTML = html;
    } else {
      jobCertifications.innerHTML = '<div class="container"><div class="alert">No specific certifications required for this job.</div></div>';
    }
  }
  
  // Career pathway
  const careerPathway = document.querySelector('.career-pathway');
  if (careerPathway) {
    const careerPath = getCareerPathForJob(jobId);
    
    if (careerPath) {
      let html = `
        <div class="container">
          <div class="job-section">
            <h2 class="job-section-title">Career Pathway</h2>
            <p>${careerPath.description}</p>
            <div class="career-path">
      `;
      
      careerPath.steps.forEach(step => {
        html += `
          <div class="career-path-item">
            <h3 class="career-path-title">${step.title}</h3>
            <p>${step.description}</p>
            <div class="skills-needed">
              <h4>Skills Needed:</h4>
              <ul class="skills-list">
                ${step.skills.map(skill => `<li class="skill-tag">${skill}</li>`).join('')}
              </ul>
            </div>
          </div>
        `;
      });
      
      html += `
            </div>
          </div>
        </div>
      `;
      
      careerPathway.innerHTML = html;
    } else {
      careerPathway.innerHTML = '<div class="container"><div class="alert">Career pathway information not available for this job.</div></div>';
    }
  }
  
  // Related jobs
  const relatedJobs = document.querySelector('.related-jobs');
  if (relatedJobs) {
    const categoryJobs = getJobsByCategory(job.category)
      .filter(j => j.id !== parseInt(jobId))
      .slice(0, 3);
    
    if (categoryJobs.length > 0) {
      let html = `
        <div class="container">
          <div class="job-section">
            <h2 class="job-section-title">Related Jobs</h2>
            <div class="row">
      `;
      
      categoryJobs.forEach(relatedJob => {
        html += `
          <div class="col">
            <div class="card">
              <h3 class="card-title">${relatedJob.title}</h3>
              <div class="card-content">
                <p>${relatedJob.description.substring(0, 100)}...</p>
                <p><strong>Level:</strong> ${firstLetterUppercase(relatedJob.level)}</p>
              </div>
              <div class="card-footer">
                <a href="job.html?id=${relatedJob.id}" class="button">View Details</a>
              </div>
            </div>
          </div>
        `;
      });
      
      html += `
            </div>
          </div>
        </div>
      `;
      
      relatedJobs.innerHTML = html;
    } else {
      relatedJobs.innerHTML = '';
    }
  }
}