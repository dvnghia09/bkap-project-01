
		const $ = document.querySelector.bind(document)
        const $$ = document.querySelectorAll.bind(document)

		const btnMenu = $('.menu-mobile')
         const overlay = $('.nav-mobile-overlay')
         const navMobile = $('.nav-mobile')
         const navClose = $('.nav-close')


         
         
         
         
         const handleBtnMenu = () => {
             btnMenu.onclick = () => {
                console.log('anh yêu em')
                 overlay.classList.add('active-sub-mobile')
                 navMobile.classList.add('active-sub-mobile')
              
             }
         
             overlay.onclick = () => {
                 overlay.classList.remove('active-sub-mobile')
                 navMobile.classList.remove('active-sub-mobile')
             }
         
             navClose.onclick = () => {
                 overlay.classList.remove('active-sub-mobile')
                 navMobile.classList.remove('active-sub-mobile')
             }
         
            }

            handleBtnMenu()    



            