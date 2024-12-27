import { Certification, Education, Experience, Project, TechnicalSkills, Workshop } from './data.js';


async function faexCertification() {

 let senvith = await Certification()
     
     console.log (senvith);



    
}

faexCertification();




// function createSectionItem(data, containerId, formatter) {
//     const container = document.getElementById(containerId);
//     data.forEach(item => {
//         const itemDiv = document.createElement('div');
//         itemDiv.classList.add('data-item');
//         itemDiv.innerHTML = formatter(item);
//         container.appendChild(itemDiv);
//     });
// }

// // Formatters for each data type
// const formatCertification = (item) => `
//     <p><strong>Certification:</strong> ${item.certification}</p>
//     <p><strong>Organization:</strong> ${item.organization}</p>
//     <p><strong>Completion Date:</strong> ${item.completion_date}</p>
//     <p><a href="${item.certificate_link}" target="_blank" class="link">View Certificate</a></p>
//     <img src="${item.image_link}" alt="${item.certification}" style="max-width: 100px;">
// `;

// const formatEducation = (item) => `
//     <p><strong>Institution:</strong> ${item.institution}</p>
//     <p><strong>Degree:</strong> ${item.degree}</p>
//     <p><strong>Start Date:</strong> ${item.start_date}</p>
//     <p><strong>End Date:</strong> ${item.end_date}</p>
// `;

// const formatExperience = (item) => `
//     <p><strong>Company:</strong> ${item.company}</p>
//     <p><strong>Position:</strong> ${item.position}</p>
//     <p><strong>Start Date:</strong> ${item.start_date}</p>
//     <p><strong>End Date:</strong> ${item.end_date}</p>
//     <p><strong>Description:</strong> ${item.description}</p>
// `;

// const formatProject = (item) => `
//     <p><strong>Project Name:</strong> ${item.project_name}</p>
//     <p><strong>Description:</strong> ${item.description}</p>
//     <p><strong>Technologies:</strong> ${item.technologies.join(', ')}</p>
//     <p><strong>Completion Date:</strong> ${item.completion_date}</p>
//     <p><a href="${item.project_link}" target="_blank" class="link">View Project</a></p>
// `;

// const formatTechnicalSkill = (item) => `
//     <p><strong>Skill:</strong> ${item.skill}</p>
//     <p><strong>Details:</strong> ${item.details.join(', ')}</p>
// `;

// const formatWorkshop = (item) => `
//     <p><strong>Title:</strong> ${item.title}</p>
//     <p><strong>Description:</strong> ${item.description}</p>
//     <p><strong>Date:</strong> ${item.date}</p>
//     <p><strong>Location:</strong> ${item.location}</p>
//     <p><a href="${item.video_link}" target="_blank" class="link">Watch Video</a></p>
// `;

// // Fetch and display all data
// (async () => {
//     try {
//         const certificationData = await Certification();
//         createSectionItem(certificationData, 'certifications', formatCertification);

//         const educationData = await Education();
//         createSectionItem(educationData, 'education', formatEducation);

//         const experienceData = await Experience();
//         createSectionItem(experienceData, 'experience', formatExperience);

//         const projectData = await Project();
//         createSectionItem(projectData, 'projects', formatProject);

//         const technicalSkillsData = await TechnicalSkills();
//         createSectionItem(technicalSkillsData, 'technical-skills', formatTechnicalSkill);

//         const workshopData = await Workshop();
//         createSectionItem(workshopData, 'workshops', formatWorkshop);
//     } catch (error) {
//         console.error('Error loading data:', error);
//     }
// })();
