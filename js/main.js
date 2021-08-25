(function(){

  const array = [{
    id:'header',
    content:`<nav class="nav">
      <div class="nav__container">
        <div class="nav__name">
        </div>
      </div>
      <div class="nav__links">
        containes links
      </div>
      <div class="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
    <div class="menu-overlay"></div>
    <div class="menu">
      containes links
    </div>
    <nav class="nav__bottom hide">
      <ul class="social">
        <li><a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png"></a></li>
        <li><a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png"></a></li>
        <li><a href="#"><img src="https://i.ibb.co/ySwtH4B/instagram.png"></a></li>
      </ul>
      <a class="btn" href="index.html#services">Register</a>
    </nav>`
  },{
    id:'footer',
    content:`<div class="footer__links">
      <a href="#main">Main</a>
      <a href="https://kandksoftware.github.io/macro-terminal-pro/product.html">Product</a>
      <a href="https://kandksoftware.github.io/macro-terminal-pro/knowledge.html">Knowledge</a>
      <a href="#">Contact</a>
      <a href="https://kandksoftware.github.io/macro-terminal-pro/faq.html">FAQ</a>
    </div>
    <div class="footer__copy">
      <a href="#!">Copyright © 2021 Batumi. All rights reserved.</a> 
      <a href="privacy-policy">Privacy Policy</a>
    </div>`
  }]

  const components = [{
    n:'nav',
    id:'.nav__links'
  },{
    n:'menu',
    id:'.menu'
  },{
    n:'footer',
    id:'.footer__links'
  }]

  const menu = [{
    type:['nav','menu','footer'],
    link:'index.html#main',
    desc:'Main'
  },{
    type:['nav','menu','footer'],
    link:'index.html#services',
    desc:'Services'
  },{
    type:['nav','menu','footer'],
    link:'index.html#about',
    desc:'About us'
  },{
    type:['nav','menu','footer'],
    link:'index.html#contact',
    desc:'Contact'
  },{
    type:['footer'],
    link:'#!',
    desc:'FAQ'
  },{
    type:['footer'],
    link:'#!',
    desc:'Covid'
  },{
    type:['nav'/*,'menu'*/],
    link:'index.html#services',
    //dec:['btn btn-red btn-purchase'],
    dec:['btn'],
    desc:'Register'
  }]

  APP.injectTemplates(array)

  APP.buildMenu(
    components,
    menu
  )

  APP.listenMenu()
  
  const nc = document.querySelector('.nav__container')
  const att = document.createAttribute('onclick')
  att.value = "location.href='index.html'"
  nc.setAttributeNode(att)

  APP.initPurchaseBtnListener()
  
  APP.createElement('div','m-b')

  const app = document.querySelector('#app')
  if(app){
    app.classList.remove('hide')
  }

})();

