

async function fetchprofileData() {
    const url = 'https://raw.githubusercontent.com/Guilherme-R-Santos/Portifolio/refs/heads/main/data/profile.json?token=GHSAT0AAAAAAC5WFOPVEUB7XQUGQKL2ON2CZ5ECUKA';
    const fetching = await fetch(url);
    return await fetching.json();
}


