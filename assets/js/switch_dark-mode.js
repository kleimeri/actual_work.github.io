let active_dark_mode = document.querySelector ('#active_dark-mode')
let sun = document.querySelector ('.inner_header__lover-boxs-dark_mode-sun')
let htmlTag = document.querySelector('html');
let add_bg_in_body = document.querySelector('body')


active_dark_mode.addEventListener('click',()=>{
     if(  sun.style.height === '35px') {
          sun.style.height = '0px'
          sun.style.transition = '0.3s'
          htmlTag.classList.add('light')
          htmlTag.classList.remove('dark')
          
     }
     else{
          htmlTag.classList.remove('light')
          htmlTag.classList.add('dark')
          sun.style.transition = '0.3s'
          sun.style.height = '35px'
          
          
     }
})

let sec_2_path_svg = document.querySelector('#sec_2')
let sec_2_1_path_svg = document.querySelector('#sec_2_1')
setInterval(function() {
     if (htmlTag.classList.contains('dark')) {
          sun.style.height = '35px'
          add_bg_in_body.style.backgroundImage = 'url(../../assets/img/bg_body.png)'
          sec_2_path_svg.style.fill = 'white'
          sec_2_1_path_svg.style.fill = 'white'
        }
        else{
          sun.style.height = '0px'
          add_bg_in_body.style.backgroundImage = 'url()'
          sec_2_path_svg.style.fill = '#131721'
          sec_2_1_path_svg.style.fill = '#131721'
        }
   }, 1);


