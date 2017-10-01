$(document).ready(function() {
	
	var navData = {
		navList: [
			{ id: 'home', link: 'index.php', icon: 'fort-awesome', text: 'Home' },
			{ id: 'about', link: 'about.php', icon: 'info', text: 'About' },
			{ id: 'contact', link: 'contact.php', icon: 'phone', text: 'Contact' },
			{ id: 'folio', link: 'portfolio.php', icon: 'briefcase', text: 'Portfolio' }, 
			{ id: 'etc', link: 'etc.php', icon: 'ellipsis-h', text: 'Etc'}
		]
	};	
	var footerData = {},
			homeData = {},
			aboutData = {},
			contactData = {},
			folioData = {},
			etcData = {};

	var header = new Vue({
		el: '#theHeader',
		data: navData
	});

	var footer = new Vue({
		el: '#theFooter',
		data: footerData
	});
	
});