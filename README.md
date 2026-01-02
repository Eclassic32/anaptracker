# anaptracker
A Normal AP Tracker.

This project is a fancier version of the Mutiworld Archipelago tracker (available here : [https://archipelago.gg/] ).
The idea is to get specific data based on games, while keeping the minimalistic point of view.


# How to use it : 
Copy paste the Archipelago room URL (or the room ID) on the main page input, and there you go !

# Call Order
- Data Room get first. Once you got a valid room data, you can make the others calls

- Slot Data. Has the information for every game slot (settings, goal, some randomized stuff related to the game).
- Static Tracker Data. Has static tracker information (totals checks).

- Gamedata Bundles calls. We only call the data related to supported games.

- Tracker Call. Every 10 seconds, we refresh the tracker by making this call. It has :
	- Items sents
	- Locations checked
	- Hints
	- Players status

# Data Structure



- Players
	- 