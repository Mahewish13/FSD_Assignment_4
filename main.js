function getRepos() {
    var username = document.getElementById("username").value;
    var xhr = new XMLHttpRequest();
    var url = "https://api.github.com/users/" + username + "/repos";

    xhr.open("GET", url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var repos = JSON.parse(xhr.responseText);
            var tableBody = document.querySelector("#repoTable tbody");
            tableBody.innerHTML = "";

            repos.forEach(function(repo) {
                var row = "<tr>" +
                          "<td>" + repo.name + "</td>" +
                          "<td>" + (repo.description || "No description") + "</td>" +
                          "<td><a href='" + repo.html_url + "' target='_blank'>View Repo</a></td>" +
                          "</tr>";
                tableBody.innerHTML += row;
            });
        } else {
            alert("User not found or API error.");
        }
    };
    xhr.send();
}


function getUniversities() {
    var country = document.getElementById("country").value;
    var xhr = new XMLHttpRequest();
    var url = "http://universities.hipolabs.com/search?country=" + country;

    xhr.open("GET", url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var universities = JSON.parse(xhr.responseText);
            var tableBody = document.querySelector("#uniTable tbody");
            tableBody.innerHTML = "";

            universities.forEach(function(university) {
                var website = university.web_pages[0] || "N/A";
                var row = "<tr>" +
                          "<td>" + university.name + "</td>" +
                          "<td><a href='" + website + "' target='_blank'>" + website + "</a></td>" +
                          "</tr>";
                tableBody.innerHTML += row;
            });
        } else {
            alert("Error fetching data.");
        }
    };
    xhr.send();
}
