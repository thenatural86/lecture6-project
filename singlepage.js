function showPage(page){

    // hide all divs
    document.querySelectorAll('div').forEach(div => {
        div.style.display = 'none';
    });

    // show div provided in the arg
    document.querySelector(`#${page}`).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('button').forEach(button => {
        button.onclick = function(){ 
            showPage(this.dataset.page);
        }
    })
});