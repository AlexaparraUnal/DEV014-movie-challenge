const filterYear = () => {
    const filter = document.createElement('select');
    filter.setAttribute('id', 'filterYear');
    filter.innerHTML = `
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
        `;
    return filter
};
export default filterYear;