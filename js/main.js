function createNASAimage(picObj) {
  return `
        <section>
            <ul>
                <li><h3>NASA Image of the Day</h3></li>
                <li><img src="${picObj.url}"></li>
                <li>Date:${picObj.date}</li>
                <li>Summary:${picObj.explanation}</li>
                <li>Title:${picObj.title}</li>
                <li>Copywright:${picObj.copyright}</li>
            </ul>
        </section>
    `;
}

const nasaContainer = document.querySelector("#imageHolder");

function addNasaToDom(htmlNasa) {
  nasaContainer.innerHTML += htmlNasa;
}

fetch(
  "https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx"
)
  .then(pics => pics.json())
  .then(parsedPics => {
    console.table(parsedPics);
    const nasaAsHTML = createNASAimage(parsedPics);
    addNasaToDom(nasaAsHTML);
  });
