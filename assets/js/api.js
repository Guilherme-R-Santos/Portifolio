

async function fetchprofileData() {
    const url = 'https://raw.githubusercontent.com/Guilherme-R-Santos/Portifolio/refs/heads/main/data/profile.json?token=GHSAT0AAAAAAC5WFOPUGT6SUHOO7THX2HSGZ5D7W5A';
    const fetching = await fetch(url);
    return await fetching.json();
}


