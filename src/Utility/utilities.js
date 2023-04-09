
async function getAllJob() {
    const res = await fetch('Data.json');
    const data = await res.json();
    return data;
}



export { getAllJob };

