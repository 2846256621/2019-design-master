let curPageNum = localStorage.getItem('pageTo') || 0;
window.onload = ()=>{
    toggleMenu();
    let svg = document.getElementById('btn-hide');
    const allPages = document.querySelectorAll('.page');
    const allLinks = document.querySelectorAll('#linkBar li');
    const contain = document.querySelector('#container');

    allPages[0].classList.remove('curPage');
    allLinks[0].classList.remove('cur');
    allPages[curPageNum].classList.add('curPage');
    allLinks[curPageNum].classList.add('cur');

    allLinks.forEach((val,index,arr)=>{
        val.onclick = ()=>slidePage(allPages,allPages[index],index,arr,contain);
    });

    // 导航
    svg.onclick = toggleMenu;
};
function slidePage(allPages,nextPage,index,allLinks,contain){
    allLinks[curPageNum].classList.remove('cur');
    allLinks[index].classList.add('cur');

    let curPage = allPages[curPageNum];
    if(curPage === nextPage) return false;

    contain.style.backgroundColor = 'rgba(153, 142, 142, 0.2)';
    curPage.classList.remove('curPage');
    nextPage.classList.add('curPage');
    setAnimateClass(curPage,'pt-page-rotateSlideOut');
    setAnimateClass(nextPage,'pt-page-rotateSlideIn');
    setTimeout(()=>{
        curPage.classList.remove('pt-page-rotateSlideOut');
        nextPage.classList.remove('pt-page-rotateSlideIn');
    },1000);
    curPageNum = index;
}
function setAnimateClass(ele,newClass){
    ele.classList.add(newClass);
}
function toggleMenu(){
    let cat_img = document.getElementById("cat-img");
    let imgInCat = document.querySelector('#cat-img img');
    imgInCat.onclick = ()=>{
        window.location = '../index.html';
    };
    let cat_description = document.getElementById("cat-description");

    if( cat_description.style.opacity !== '0'){
        cat_img.style.transform = 'translate(calc(-100% - 40px)) rotate(-45deg)';
        cat_description.style.transform = 'translate(-100%)';
        cat_description.style.opacity= '0';
        cat_img.style.animation = 'cat .5s ease-in-out';
        cat_description.style.animation = 'cat-desc .5s ease-in-out'
    }
    else{
        cat_img.style.transform = '';
        cat_description.style.transform = '';
        cat_description.style.opacity= '1';
        cat_img.style.animation = 'cat-res .5s ease-in-out';
        cat_description.style.animation = 'cat-desc-res .5s ease-in-out'
    }
}