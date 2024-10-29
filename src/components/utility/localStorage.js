const getStoredApplication = () => {
    const stored =  localStorage.getItem('job-application');
    if(stored){
        return JSON.parse(stored);
    }
    return [];
}

const saveApplicationToStorage = (id) => {
    const savedData = getStoredApplication();
    savedData.push(id);
    const stringified = JSON.stringify(savedData);
    localStorage.setItem('job-application', stringified);
}

export { saveApplicationToStorage, getStoredApplication };
    
