const TikTokScraper = require('tiktok-scraper');
const { exec } = require('child_process')
const fs = require('fs')

// Exec

// User feed by username
async function TiktokProfile(name) { // Ambil Profile Tiktok user
	try {
	const user = await TikTokScraper.getUserProfileInfo(name);
        console.log(user);
        fs.writeFileSync('./TiktokProfile.json', JSON.stringify(user, null, '\t'))
    } catch (err) {
    	console.log(err)
    }
    }
 // Hastag Search
async function TiktokHastag(hastag) {
	try {
	const ht = await TikTokScraper.hashtag(hastag, {
		number: 1,
		sessionList: ['sid_tt=58ba9e34431774703d3c34e60d584475;']
	})
	console.log(ht)
	fs.writeFileSync('./TiktokHastag.json', JSON.stringify(ht, null, '\t'))
} catch (err) {
	console.log(err)
}
}

//Tiktok Dowload
exec(`tiktok-scraper video https://www.tiktok.com/@tiktok/video/6807491984882765062 -d`, (err) => {
	console.log("Done Dowload")
	console.log(err)
	 })