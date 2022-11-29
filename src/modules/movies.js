export default class Movies {
    BASE_URL='https://jsonplaceholder.typicode.com/todos/1';
    constructor(){

    }

    static displayMovie= async() =>{
        const response = await fetch('https://api.tvmaze.com/seasons/1/episodes');
        console.log(response);
        const movies = await response.json();
        console.log("Movies:", JSON.stringify(movies))
        return movies;
        // const title="The Walking Dead";
        // return title;
    }
}