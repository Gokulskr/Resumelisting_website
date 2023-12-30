function loadFiles() {
  fetch("files.json")
    .then((response) => response.json())
    .then((data) => {
      var key1 = "key1";
      var key2 = "key2";
      var key3 = "key3";

      var file_list = document.getElementById("file_list");
      var ul = document.createElement("ul");

      var files = data.files;

      var li1 = document.createElement("li");
      li1.innerHTML = files[key1].name;
      li1.setAttribute("onclick", "openFile('" + files[key1].path + "')");
      ul.appendChild(li1);

      var li2 = document.createElement("li");
      li2.innerHTML = files[key2].name;
      li2.setAttribute("onclick", "openFile('" + files[key2].path + "')");
      ul.appendChild(li2);

      var li3 = document.createElement("li");
      li3.innerHTML = files[key3].name;
      li3.setAttribute("onclick", "openFile('" + files[key3].path + "')");
      ul.appendChild(li3);

      file_list.appendChild(ul);
    });
}

function openFile(file) {
  var iframe = document.createElement("iframe");
  iframe.setAttribute("src", file);
  var file_content = document.getElementById("file_content");
  file_content.innerHTML = "";
  file_content.appendChild(iframe);
}
