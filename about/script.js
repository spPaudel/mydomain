const splash_div = document.getElementsByClassName("about-me-splash");

const edu_body = document.createElement("div");
const education = document.createElement("div");
education.classList.add("body_content");
education.innerHTML = "<h3>Education</h3><li>Bachelor </li>";
edu_body.appendChild(education);
splash_div[0].appendChild(edu_body);

const skill_body = document.createElement("div");
const skills = document.createElement("div");
skills.classList.add("body_content");
skills.innerHTML = "<h3>Skills</h3><li></li>";
skill_body.appendChild(skills);
splash_div[0].appendChild(skill_body);

const proj_body = document.createElement("div");
const projects = document.createElement("div");
projects.classList.add("body_content");
projects.innerHTML = "<h3>Projects</h3><li></li>";
proj_body.appendChild(projects);
splash_div[0].appendChild(proj_body);

function ShowEdu() {
    
    edu_body.classList.toggle("body");
    education.classList.toggle("visible");    
}

function ShowSkills() {
    skill_body.classList.toggle("body");
    skills.classList.toggle("visible");      
}

function ShowProj() {
    proj_body.classList.toggle("body");
    projects.classList.toggle("visible");
}