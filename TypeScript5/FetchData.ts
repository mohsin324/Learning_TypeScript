console.log('Hello world!!!');
const url = `https://www.course-api.com/react-tours-project`;
async function fetchData(url:string) {
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP Error! status: ${response.status}`)
        }
        const data = await response.json();
        console.log(data);
        return data

    }catch(error){
        console.log(error);
        const errorMsg = error instanceof Error ? error.message : 'there was an error...';
        console.log(errorMsg);
        return [];
    }
    
}
fetchData(url)