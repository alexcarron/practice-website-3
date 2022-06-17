const website_info = (function() {
	let name = "Meme Museum",
		description = "At our website, you'll find the most up to date memes and learn about their origin. No other site has the accuracy and sources we do.",
		pages = ['Home', 'Current Memes', 'Contact Us'],
		phone_number = "(122) 001-0002",
		email = "customersupport@mememuseum.com",
		logo = "../images/meme_museum_logo.png",
		footer = [
			{
				heading: "COPYRIGHT",
				description: "&copy;Meme Museum 2022",
			},
			{
				heading: "PHONE NUMBER",
				description: `<a href="tele:${phone_number}">${phone_number}</a>`,
			},
			{
				heading: "EMAIL",
				description: `<a href="mailto:${email}">${email}</a>`,

			},
		]
	
	return {name, description, pages, logo, footer}
})();



export default website_info