// Подключение функционала "Чертоги фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//========================================================================================================================================================
// Open sidebar on mobile devices

const openSidebarBtn = document.querySelector('.js-open-sidebar'),
    closeSidebarBtn = document.querySelector('.js-close-sidebar');

if (openSidebarBtn) {
    openSidebarBtn.addEventListener('click', () => document.body.classList.add('_sidebar-open'));
}

if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', () => document.body.classList.remove('_sidebar-open'));
}