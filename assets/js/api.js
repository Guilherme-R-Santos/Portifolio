

async function fetchprofileData() {
    const url = 'https://raw.githubusercontent.com/Guilherme-R-Santos/Portifolio/refs/heads/main/data/profile.json?token=GHSAT0AAAAAAC5WFOPVBEZFATYQ5FH36UB6Z5CX36Q';
    const fetching = await fetch(url);
    return await fetching.json();
}


