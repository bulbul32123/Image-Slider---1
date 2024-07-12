document.getElementById('next').onclick = async function () {
    // Disable the button
    this.disabled = true;

    // Move the first item to the end of the list
    let lists = document.querySelectorAll('.item');
    console.log(lists);
    document.getElementById('slide').appendChild(lists[0]);

    // Re-enable the button after 1000 milliseconds
    setTimeout(() => {
        this.disabled = false;
    }, 1000);
}

document.getElementById('prev').onclick = async function () {
    // Disable the button
    this.disabled = true;

    // Move the last item to the beginning of the list
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);

    // Re-enable the button after 1000 milliseconds
    setTimeout(() => {
        this.disabled = false;
    }, 1000);
}
