
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;

    const job = document.getElementById('profile.job');
    job.innerText = profileData.job;

    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;

    const phone = document.getElementById('profile.phone');
    phone.innerHTML = profileData.phone;
    phone.href = `https://wa.me/5521989811561`;

    const email = document.getElementById('profile.email');
    email.innerHTML = profileData.email;
    email.href = `mailto:${profileData.email}`;

    const github = document.getElementById('profile.github');
    github.href = profileData.github;
    github.innerHTML = profileData.githubUsername;

    const linkedin = document.getElementById('profile.linkedin');
    linkedin.href = profileData.linkedin;
    linkedin.innerHTML = profileData.linkedinUsername;

}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(languages => `<li>${languages}</li>`).join('');
}

function updatePortifolio(profileData) {
    const portifolio = document.getElementById('profile.portfolio')
    portifolio.innerHTML = profileData.portfolio.map(portfolio => {
        return `
                <li>
                    <h3 ${portfolio.github ? 'class="title github"' : 'class="title'}>${portfolio.name}</h3>
                    <a href="${portfolio.url}" target="_blank">${portfolio.url}</a>
                </li>
                `
    }).join('')
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(professionalExperience => {
        return `
            <li>
                <h3 class="title">${professionalExperience.name}</h3>
                <span class="period">${professionalExperience.period}</span>
                <p>${professionalExperience.description}</p>
            </li>
        `
    }).join('');
}

(async () => {
    const profileData = await fetchprofileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortifolio(profileData);
    updateProfessionalExperience(profileData);

})();
