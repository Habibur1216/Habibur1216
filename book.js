const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
}

// displaying search result
const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    // showing how many results are found
    document.getElementById('number-found').innerText = `Search Result Found: ${books.length}`;

    // looping every elements
    books?.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        const imgUrl = 'https://covers.openlibrary.org/b/id/' + book.cover_i + '-M.jpg'
        div.innerHTML = `
            <div class="card text-center shadow p-3 mb-5 rounded">
                <div class="card-body">
                    <h4 class="card-title text-primary">Book Name: ${book.title}</h4>
                    <h6 class="card-title mb-4">Author Name: ${book.author_name}</h6>
                    <img class="img-fluid" src="${imgUrl}" class="card-img-top" alt="...">
                    <h6 class="card-title mt-4">Publisher: ${book.publisher}</h6>
                    <h6 class="card-title">First Publish Year: ${book.first_publish_year}</h6>
                </div>
            </div>
        `
        searchResult.appendChild(div);
    });
}