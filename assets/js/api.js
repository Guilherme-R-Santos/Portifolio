

async function fetchprofileData() {
    const url = 'https://raw.githubusercontent.com/Guilherme-R-Santos/Portifolio/refs/heads/main/data/profile.json';
    const fetching = await fetch(url);
    return await fetching.json();
}


