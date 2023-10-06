const homeContent = document.documentElement.outerHTML;

function loadAguaContent() {
    const contentDiv = document.getElementById('waterpage');
    const allContent = document.body;
    
    allContent.innerHTML = '';
  
    const aguaContent = `

      
      <div class="header">
      <div class="inner-header flex">
      
      <h2>Água</h2>
      <p>O fornecimento de água para os imóveis do Villas do Arraial é feito pela empresa privada FM Construtora,  que explora e dá manutenção no poço artesiano situado na Praça da Caixa D’Água.</p>
      <p>Cada morador ou proprietário de imóvel no Villas deve solicitar diretamente a esta empresa a instalação de hidrômetro e assinar seu contrato particular (contato na página inicial).</p>
      <p>Abaixo pode ser consultado o contrato entre a FM Construtora e a AMOVA, que tem uma pequena participação nas faturas pagas.</p>
      <p>Por força de contrato a água é submetida a análise de qualidade a cada 6 meses, e o resultado dos testes atualizado é publicado aqui nesta página.</p>
      <p>Para conferir a sua fatura  no final desta página há uma calculadora que dá o valor a ser pago de acordo com o volume de água consumido no mês, obedecendo à tabela de preços por faixa de consumo.</p>
      
      <div class="lower">
      <label for="aguaInput">Calculadora de água:</label>
      <input type="text" id="aguaInput" placeholder="Digitar consumo de água em m³">
      
      <h3>PDFs</h3>
      <ul>
        <li><a href="assets/Exame agua.pdf">Exame água</a></li>
        <li><a href="assets/TERMO DE ACORDO DA AGUA.pdf">Termo de acordo</a></li>
      </ul>
      </div>
      </h1>
      </div>
      
      <!--Waves Container-->
      <div>
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
      <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
      <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
      <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
      <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
      </g>
      </svg>
      </div>     
      </div>

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

    @import url(//fonts.googleapis.com/css?family=Lato:300:400);

body {
  margin:0;
}

h1 {
  font-family: 'Lato', sans-serif;
  font-weight:300;
  letter-spacing: 2px;
  font-size:48px;
}
p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size:14px;
  color: #333333;
}

.header {
  position:relative;
  text-align:center;
  background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);
  color:white;
}
.logo {
  width:50px;
  fill:white;
  padding-right:15px;
  display:inline-block;
  vertical-align: middle;
}

.inner-header {
  height:65vh;
  width:100%;
  margin: 0;
  padding: 0;
}

.flex { /*Flexbox for containers
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;*/
}

.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}

.content {
  position:relative;
  height:20vh;
  text-align:center;
  background-color: white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    margin-top: 22vh;
    height:40px;
    min-height:40px;
  }
  .content {
    height:290vh;
  }
  h1 {
    font-size:24px;
  }
}
    
    `;
    contentDiv.innerHTML = aguaContent;
    allContent.appendChild(contentDiv);
    allContent.appendChild(style)
  }
  window.addEventListener('popstate', () => {
    const route = window.location.hash.slice(1);
    if (route === 'agua') {
      loadAguaContent();
    }
    else {
      document.documentElement.innerHTML = homeContent;
    }
  });