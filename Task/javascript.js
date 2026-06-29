function saveData() {
    const title = document.getElementById("title").value;
    const username = document.getElementById("username").value;

    const data = {
        title: title,
        username: username
    };

    localStorage.setItem("userData", JSON.stringify(data));

    displayData();
}

function displayData() {
    const data = JSON.parse(localStorage.getItem("userData"));

    if (data) {
        document.getElementById("output").innerHTML = `
            <table>
                <tr>
                    <!-- <th>SNO</th> -->
                    <th>Title</th>
                    <th>User</th>
                </tr>
                <tr>
                    <td>${data.title}</td>
                    <td>${data.username}</td>
                </tr>
            </table>
        `;
    }
}

displayData();