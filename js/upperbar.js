// navigate between tabs

const homeContent = document.documentElement.outerHTML;

function loadWhoWeAreContent() {
    const contentDiv = document.getElementById('who-we-are-page');
    const allContent = document.body;
    
    allContent.innerHTML = '';
  
    const whoWeAreContent = `

      
      <div class="header">
      <div class="inner-header flex">
      
      <h2>Água</h2>
            
      

    `;
 
    const style = document.createElement("style");
    style.textContent=`
    html {
        background: #fff;
        margin: 0px;
    }
    
    body {
        ...
    }

    h2{
        padding: 1rem;
        margin-top : 0px;
    }

    h3{
        margin-bottom: 0px;
    }
    ul{
        margin-top: 0px;
    }

    p{
        margin: 1rem;
    }

    .lower{
        display: flex;
        justify-content: space-between;
        padding: 1rem;
    }

    @media screen and (max-width: 900px) {
        .lower{
            padding: 1rem;
            display: flex;
            flex-direction: column;
        }
    }

    

    
    `;
    contentDiv.innerHTML = whoWeAreContent;
    allContent.appendChild(contentDiv);
    allContent.appendChild(style)
  }
  window.addEventListener('popstate', () => {
    const route = window.location.hash.slice(1);
    if (route === 'quemsomos') {
      loadWhoWeAreContent();
    }
    else {
      document.documentElement.innerHTML = homeContent;
    }
  });