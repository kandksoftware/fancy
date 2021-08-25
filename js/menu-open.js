(function(app){
  'use strict'
  app.listenMenu = () => {
    //for the listeners
    const ham = document.querySelector('.hamburger')
    const links = document.querySelectorAll('.menu a')
    const overlay = document.querySelector('.menu-overlay')
    const desc = document.querySelector('.homepage__desc')
    const navBottom = document.querySelector('.nav__bottom')
    //action
    const cl = ['.menu-overlay','.menu','.menu a','.hamburger','body']
    const commitAction = (at,cl) => {
      cl.forEach(cn => document.querySelector(cn).classList[at]('active'))
    }

    ham.addEventListener('click',function(){
      if(ham.classList.contains('active')){//close
        commitAction('remove',cl)
        closeOther()
        
      }else{//open
        commitAction('add',cl)
        desc.classList.add('hide')
        navBottom.classList.remove('hide')
      }
      window.scroll({top: 0})
    })

    const closeOther = () => {
      desc.classList.remove('hide')
      navBottom.classList.add('hide')
    }

    overlay.addEventListener('click',() => {
      closeOther()
      commitAction('remove',cl)
    })//close
    
    for(let i = 0,l = links.length;i < l;i++){
      links[i].addEventListener('click',() => {
        commitAction('remove',cl)
        closeOther()
      })
    }

    //commitAction('add',cl)
  }
})(APP);

