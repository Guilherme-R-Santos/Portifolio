

async function fetchprofileData() {
    const url = '';
    const fetching = await fetch(url);
    return await fetching.json();
}


