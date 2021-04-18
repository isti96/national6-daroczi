export function getApiPostData(breedsListHtml, i, callback) {
  getApiData(
    `https://dog.ceo/api/breed/${breedsListHtml[i].innerText}/images`,
    callback
  );
}

export function getApiDataLS(callback) {
  getApiData(
    `https://dog.ceo/api/breed/${localStorage.getItem("breed")}/images`,
    callback
  );
}

export function getFirstData(callback1, callback2) {
  getApiData("https://dog.ceo/api/breeds/list/all", callback1).then(callback2);
}

function getApiData(url, callback) {
  return fetch(url)
    .then((r) => r.json())
    .then(callback);
}