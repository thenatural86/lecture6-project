function showPage(page){

    // hide all divs
    document.querySelectorAll('div').forEach(div => {
        div.style.display = 'none';
    });

    // show div provided in the arg
    document.querySelector(`#${page}`).style.display = 'block';


}