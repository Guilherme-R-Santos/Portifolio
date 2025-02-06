

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
    phone.innerText = profileData.phone;
    phone.href = `tel:${profileData.phone}`;

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

(async () => {
    const profileData = await fetchprofileData();
    updateProfileInfo(profileData);
    
})();
