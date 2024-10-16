(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')
  var style = document.createElement('style');
  document.head.appendChild(style);
  style.textContent = "body { background-color: #aaaaa; }";
  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    answer.innerHTML = "Loading...";
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        let html = "<ul>";
        posts.forEach((post) => {
          html += `
            <li>
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            </li>
          `;
        });
        html += "</ul>";
        answer.innerHTML = html;
      })
      .catch((error) => {
        console.error("Błąd:", error);
      });
  });


  cw2.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((post) => {
        let html = "<ul>";
        html += `
          <li>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </li>
        `;
        html += "</ul>";
        answer.innerHTML = html;
      })
      .catch((error) => {
        console.error("Błąd:", error);
      });
  });


  cw3.addEventListener("click", function () {
    answer.innerHTML = "Processing...";
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: "Nowy post",
        body: "Treść nowego posta",
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((post) => {
        answer.innerHTML = `Dodano nowy post o ID = ${post.id}`;
      })
      .catch((error) => {
        answer.innerHTML = "Błąd podczas dodawania nowego posta";
        console.error("Błąd:", error);
      });
  });

  function changeStyle() {
    var element = document.getElementById("myElement");
    element.style.backgroundColor = "blue";
  };
  
})();
