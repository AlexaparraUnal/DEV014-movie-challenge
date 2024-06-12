import Movies from "../components/Movies.js";

const home =()=>{
    const div = document.createElement('div');
        div.appendChild(Movies());
    return div;
}

export default home;




