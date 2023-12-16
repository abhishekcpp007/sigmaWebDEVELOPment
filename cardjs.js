function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewstr;

    if (views < 1000000) {
        viewstr = views / 1000 + "K";
    } else if (views >= 1000000) {
        viewstr = views / 1000000 + "M";
    }

    let html = `
        <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="text">
                    <h1>${title}</h1>
                    <p>${cName} . ${viewstr} views . ${monthsOld} months ago</p>
                </div>
            </div>
        </div>
    `;

    document.querySelector(".container").innerHTML += html;
}

createCard("Introduction to Backend| Sigma web Development #2", "codeWithAbhishek", 5600000, 7, "32:22", "https://www.1jour1actu.com/wp-content/uploads/2021/12/VIDEO_Harry_Potter.jpeg");
createCard("Introduction to Backend| Sigma web Development #2", "codeWithAbhishek", 5600000, 7, "32:22", "https://www.1jour1actu.com/wp-content/uploads/2021/12/VIDEO_Harry_Potter.jpeg");
