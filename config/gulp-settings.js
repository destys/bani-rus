// Отримуємо ім'я папки проекту
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// Шляхи до папки з вихідними даними та папки з результатом
const buildFolder = `./dist`;
const srcFolder = `./src`;

// Шляхи до папок та файлів проекту
export const path = {
	build: {
		html: `${buildFolder}/`,
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`
	},
	src: {
		html: `${srcFolder}/*.html`,
		pug: `${srcFolder}/pug/*.pug`,
		js: `${srcFolder}/js/app.js`,
		scss: `${srcFolder}/scss/style.scss`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		fonts: `${srcFolder}/fonts/*.*`,
		files: `${srcFolder}/files/**/*.*`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	rootFolder: rootFolder,
	srcFolder: srcFolder,
	// Шлях до потрібної папки на віддаленому сервері.
	ftp: `/teploipar.ru/public_html/wp-content/themes/smdv`
	// Приклад: завантажити в папку 2022 далі в папку з назвою проєкту
	// ftp: `2022/${rootFolder}`
};

// Налаштування FTP з'єднання
export const configFTP = {
	host: "baniru7x.beget.tech", // Адреса FTP сервера
	user: "baniru7x_dev", // Ім'я користувача
	password: "E*D0jwnM", // Пароль
	parallel: 5 // Кількість одночасних потоків
}