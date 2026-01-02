# ANAPtracker
A Normal AP Tracker.

This project is a fancier version of the Mutiworld Archipelago tracker (available here : [https://archipelago.gg/] ).
The idea is to get specific data based on games, while keeping the minimalistic point of view.

The project uses Vue.js, mainly because it's my go-to frawemork when I want to do a small webapp.
It also has a Laravel API on the back to make things clean. The API is on a separate project (because it's my personnal website), but it's behavior is the same as the Archipelago WebHost API (and it has a storage static calls mechanism, in order to not spam the website with useless requests)


## How to use it : 
Copy paste the Archipelago room URL (or the room ID) on the main page input, and there you go !

What you'll be able to see or to do :
- Basic numbers on the list of players, such a checks done, % completion, also total completion numbers.
- Key items, depending if the game is actually supported by the tracker or not.
- Sorting and filtering data.


## Which games are supported ?
At the moment, a good chunk of very common games, such as Hollow Knight, Celeste, Pokemon games and some Zelda games. It also has some niche games that I enjoy to play (because I wanted a tracker on them first).

The game list is available on the Homepage. It loads the supported game list from the source data.

I do my best to add new games, and try to prioritize thoses who are popular at the moment.


## Can i deploy the app on my side ?

Not yet ! You can but you'll have to tweak a few things to make it fully usable.
Because the webapp is making API calls, you'll either have to enable CORS on your browser, or make a bridge API on your side.
If you're not familiar with building backend stuff, just enable CORS (using a browser extension).

Also, the app is one of my subwebsites, so it's supposed to run on a subdirectory (which should not be the case nowadays). 
You'll have to remove that line from `vite.config.js` :
`base: '/anaptracker',`

Then set the URL_WEBSITE from `src/hconfig.js` to localhost :
`URL_WEBSITE: 'http://localhost:5173',`

Then run the application by using npm (`npm run dev`).
Images are not yet on the repository, because I want to give credit to the cool artists who made them.


# App mechanics

## Call Order
- Data Room get first. Once you got a valid room data, you can make the others calls

- Slot Data. Has the information for every game slot (settings, goal, some randomized stuff related to the game).
- Static Tracker Data. Has static tracker information (totals checks).

- Gamedata Bundles calls. We only call the data related to supported games.

- Tracker Call. Every 10 seconds, we refresh the tracker by making this call. It has :
	- Items sents
	- Locations checked
	- Hints
	- Players status


## Data Structure
- Players
	- Tracker Data
		- Items recieved
		- Locations done
		- Activity Timer
		- Status
	- Static Data (not used atm)
	- Slot Data
	- Name
	- Alias
	- Game
	- ID
	- Total locations 
	- Group
- Datapackage
- Groups
- Total checks done
- Broken Slot Data indicator