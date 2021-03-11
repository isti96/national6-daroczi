console.log("JavaScript - AJAX");
console.log("CRUD Operation - Read");

const articleListHtml = document.querySelector(".article-list");


document.getElementById("get-data").addEventListener("click", getData);

function getData() {
  fetch("https://simple-json-server-scit.herokuapp.com/posts")
    .then(handleFetchResponse)

    .then(useJSONResponse);
}

function handleFetchResponse(response) {
  console.log("response", response);

  return response.json();
}

function useJSONResponse(json) {
 console.log(json);

  renderArticles(json);
}

function renderArticles(articleList) {
  articleListHtml.innerText = "";

  for (const articleData of articleList) {
   console.log(articleData);
    renderArticle(articleData);
  }
}

function renderArticle(articleData) {
  fetch(
    `https://simple-json-server-scit.herokuapp.com/comments?postId=${articleData.id}`
  )
    .then(handleFetchResponse)

    .then((comments) => {
      // renderArticle(articleData, comments);

      const article = document.createElement("div");
      const articleTitle = document.createElement("h3");
      const articleContent = document.createElement("p");
      const commentsList = document.createElement("div");
      commentsList.className = "comments-list";

      for (let i = 0; i < comments.length; i++) {
        const comment = document.createElement("div");
        const commentUser = document.createElement("h4");
        const commentContent = document.createElement("p");

        commentsList.appendChild(comment);
        comment.appendChild(commentUser);
        comment.appendChild(commentContent);

        comment.className = "comment";
        commentUser.className = "comment-username";
        commentContent.className = "comment-content";
        comment.style = "padding-left: 20px";

        commentUser.innerText = comments[i].username;
        commentContent.innerText = comments[i].content;
      }

      article.appendChild(articleTitle);
      article.appendChild(articleContent);

      articleListHtml.appendChild(article);
      console.log(articleData.title);
      console.log(articleData.content);
      console.log(commentsList);
      article.appendChild(commentsList);

      articleTitle.innerText = articleData.title;
      articleContent.innerText = articleData.content;
    });
}
