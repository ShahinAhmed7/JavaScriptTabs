const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e) {
    //console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    if(id) {    
        //Remove active class from other button
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        // Hide other all article and visible active article
        articles.forEach(function(article){
            article.classList.remove('active');
        })
        const tabContent = document.getElementById(id);
        tabContent.classList.add('active');
    }
})