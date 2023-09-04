var button = document.getElementById('btn_header');
var navigation = document.getElementById('navgation-links');
var banner = document.getElementById('banner');
var section2 = document.getElementById('container-cards');
var footer = document.getElementById('footer');
var sidebar = false;

function openSidebar() {
    sidebar = !sidebar;
    if (sidebar) {
        navigation.style.marginLeft = '-66vw';
        navigation.style.animationName = 'openSidebar';
        banner.style.filter = 'blur(2px)';
        section2.style.filter = 'blur(2px)';
        footer.style.filter = 'blur(2px)';
    } else {
        navigation.style.marginLeft = '-135vw';
        navigation.style.animationName = 'closeSidebar';
        banner.style.filter = '';
        section2.style.filter = '';
        footer.style.filter = '';
    }
}

function closeSidebar() {
    if (sidebar) {
        openSidebar();
    }
}

window.addEventListener('resize', function (event) {
    if (this.window.innerWidth > 768 && sidebar) {
        openSidebar();
    }
});