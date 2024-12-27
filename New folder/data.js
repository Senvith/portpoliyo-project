export async function Certification() {
    let response = await fetch('Certification.json');
    const Certification = await response.json();
    return Certification;
}

export async function Education() {   
    let response = await fetch('education.json');
    const Education = await response.json();
    return Education;
}

export async function Experience() {    
    let response = await fetch('Experience.json');
    const Experience = await response.json();
    return Experience;
}

export async function Project() {
    let response = await fetch('Project.json');
    const Project = await response.json();
    return Project;
}

export async function TechnicalSkills() {
    let response = await fetch('TechnicalSkills.json');
    const TechnicalSkills = await response.json();
    return TechnicalSkills;
}

export async function Workshop() {    
    let response = await fetch('Workshop.json');
    const Workshop = await response.json();
    return Workshop;   
}
