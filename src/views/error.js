const error =()=>{
    const div = document.createElement('div');
    div.classList.add('error')
    div.textContent='Error 404'
    return div;
}

export default error;
