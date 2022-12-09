const BookDetail = (bookDetail) => {
let html = `
       
              <div id="bookDetail" class="max-w-sm rounded overflow-hidden shadow-lg
              rounded-xl bg-gradient-to-tr from-red-600 to-red-100  h-screen">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Titel: ${bookDetail.title}</div>
          <p class="text-gray-700 text-base">
                Information om boken du sökt på: 
                
                <div class="detailed__list">
                <ul class="list">
                <li>Författare: ${bookDetail.author}</li>
                <li>Sidor: ${bookDetail.pages}</li>
                <li>År: ${bookDetail.releaseDate}</li>
                </ul>
                </div> 
          </p>
        </div>
        {/* <img class="w-full" src="${bookDetail.coverImage}" alt="Cover img missing"> */}
    </div>`;
    return html;
  };