const xhr = new XMLHttpRequest();
const url = './health_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.onload = function (){
    let articles = xhr.response.articles;
    let articlesDiv = document.getElementById("articles");

    articles.array.forEach(article => {
       const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        const title = document.createElement('h2');
        title.textContent = article.title;

        const description = document.createElement('p');
        description.textContent = article.description;

        const waysheader = docuemtn.createElement('h3');
        waysheader.textContent = 'Ways to Achieve:';

        const waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(way => {
            const listItem = document.createElement('li');
            listitem.textContent = way;
            waysList.appendChild(listItem);
        });

        const benefitsHeader = document.createElement('h3');
        benefitsHeader. textContent = 'Benefits';

        const benefitsList = document.createElement('ul');
        article.benefits.forEach( benefit =>{
            const listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);

        
    });
}
xhr.send();