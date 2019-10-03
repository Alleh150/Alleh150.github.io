self.addEventlistener('install' , evt => {console.log('Service worker foi instalado.');
});

self.addEventlistener('activate', evt =>
{
console.log('Service worker foi ativado.');
});

self.addEventlistener('fetch' , evt => {
	 console.log('Service worker capturou um evento do tipo fetch.');
});