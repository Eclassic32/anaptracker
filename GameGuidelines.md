# Game Package Guidelines
This documentation is for setting guidelines when it comes to game bundles.
Archipelago can handle a very large variety of games, from platforms games to litteraly gambling.

We want to have a simililar tracker structure for every game, as much as we can.
It is recommended to rely on a Poptracker pack, as you get images and all of a game settings.

## Game Package Layout

Here a sample of a Game Package layout component :
````
	<div>
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Goal</div>

            <img title="Item 1" src="/img/item1png" :class="{ 'opacity-25': !hasJob('Item 1')  }" />
            <img title="Item 2" src="/img/item2.png" :class="{ 'opacity-25': !hasJob('Item 2')  }" />
            <img title="Item 3" src="/img/item3.png" :class="{ 'opacity-25': !hasJob('Job - Rogue')  }" />
        </div>
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Misc</div>

            <img title="Item 4" src="/img/item4.png" :class="{ 'opacity-25': !hasJob('Item 4')  }" />
        <span v-if="condition()" class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Item 5')  }"><img title="Grub" src="/img/item5.png" />x{{ getNumberItemsFromName('Item 5') }} </span> / {{ item5Required() }}</span>

	</div>

````

We simply display icons, and separate them into a bunch of blocks.
We want to respect that strucure on as many games as possible, so people don't feel lost when they check the app.

## List of items

Key Items are separated into 3 packs

1. Goal Items. That list can differ depending on the goal set by the player. We want to have a clear idea of what a player needs to finish their game. A Goal Item is an item required to complete the game (like Power Stars on Super Mario 64, or a Dreamer on Hollow Knight). If the game doesn't have that kind of items, we display the highest value key items here, or the main inventory.
2. Major Key items/Abilities. Should contains the items that allows a player to pass major walls. Abilities will almost always be here (unless you're playing a high skill ceiling game, like Super Metroid)
3. Minor Key items. Items that unlocks a moderate bunch of checks. We don't want to put too many of them on that slot, it mainly depend on how much space we can take.

You can have more than 3 packs of items. In that case, thoses packs follow the same rules as the third pack (thoses are usually key items that are treated as a specific group)


## General Behavior

You want to have a consistent layout.
The first pack of icons is usually dedicated to the goal of the game, and can change depending on the goal settings.
The others packs of icons should stays the same, unless you have a setting that add an important item (like splitting Claws for Hollow Knight, or an abiility to swim in Ocarina of Time)
In order to know goal settings and item settings, we are using the game slot data. However, that data can be unavailable sometimes. So you also have to plan a "safe mode".

**What to do when slot data is broken ?**

When the slot data call fails, you should display the most common goal items (it is recommended to display everything minus the gimmicky items).
Items that you can get through a uncommon setting should not be displayed at all. However, if the player get one of thoses, you can display it (it will change the layout, but nothing serious).

**Example with Splitted Claws on Hollow Knight**
- **By default** : Display the Mantis Claw icon
- **If we got slot data and split_mantis_claw is activated** : display the two Mantis Claw icons (splitted)
- **If we don't have slot data** : Display only 1 Mantis Claw icon (default behavior)
	- **If we got Left_Mantis_Claw or Right_Mantis_Claw** : swap to the splitted Mantis Claw setting

That behavior shoud be used consistently.


## Goal Settings

On a later update.