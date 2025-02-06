

async function fetchprofileData() {
    const url = 'https://raw.githubusercontent.com/Guilherme-R-Santos/Portifolio/refs/heads/main/data/profile.json?token=GHSAT0AAAAAAC5WFOPVL433YTCRUCIXIYXUZ5EC3TA';
    const fetching = await fetch(url);
    return await fetching.json();
}


