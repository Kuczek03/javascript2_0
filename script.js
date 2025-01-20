(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')
  const loadingPopup = document.getElementById("loading-popup");

  function showLoading() {
    loadingPopup.style.display = "block";
  }

  function hideLoading() {
    loadingPopup.style.display = "none";
  }

  example.addEventListener("click", function () {
    showLoading();
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    showLoading();
    answer.innerHTML = "Loading...";
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        hideLoading();
        console.log(posts);
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
        hideLoading();
        console.error("Błąd:", error);
      });
  });


  cw2.addEventListener("click", function () {
    showLoading();
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((post) => {
        hideLoading();
        console.log(post);
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
        hideLoading();
        console.error("Błąd:", error);
      });
  });


  cw3.addEventListener("click", function () {
    showLoading();
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
        hideLoading();
        console.log(post);
        answer.innerHTML = `Dodano nowy post o ID = ${post.id}`;
      })
      .catch((error) => {
        answer.innerHTML = "Błąd podczas dodawania nowego posta";
        console.error("Błąd:", error);
        hideLoading();
      });
  });
  
})();

fetch('https://my-json-server.typicode.com/Kuczek03/javascript2_0/db')
.then(response => response.json())
.then(data => {
  console.log('Dane pobrane:', data);
  // Możesz teraz przetwarzać dane, np. wyświetlić posty i komentarze
})
.catch(error => {
  console.error('Błąd podczas pobierania danych:', error);
});

fetch('https://my-json-server.typicode.com/Kuczek03/javascript2_0/db')
.then(response => response.json())
.then(data => {
  data.posts.forEach(post => {
    console.log('Post:', post.title);
    post.comments.forEach(comment => {
      console.log('Komentarz:', comment.text);
    });
  });
})
.catch(error => {
  console.error('Błąd podczas pobierania danych:', error);
});
