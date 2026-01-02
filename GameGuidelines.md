# Game Package Guidelines
This documentation is for setting guidelines when it comes to game bundles.
Archipelago can handle a very large variety of games, from platforms games to litteraly gambling.

We want to have a simililar tracker structure for every game, as much as we can.

## General Behavior

You want to have a consistent layout.
The first pack of icons is usually dedicated to the goal of the game, and can change depending on the goal settings.
The others packs of icons should stays the same, unless you have a setting that add an important item (like splitting Claws for Hollow Knight, or an abiility to swim in Ocarina of Time)
In order to know goal settings and item settings, we are using the game slot data. However, that data can be unavailable sometimes. So you also have to plan a "safe mode".

**What to do when slot data is broken ?**

When the slot data call fails, you should display the most common goal items (it is recommended to display everything minus the gimmicky items).
Items that you can get through a uncommon setting should not be displayed at all. However, if the player get one of thoses, you can display it (it will change the layout, but nothing serious).



## List of items

Key Items are separated into 3 packs

1. Goal Items. That list can differ depending on the goal set by the player. We want to have a clear idea of what a player needs to finish their game. A Goal Item is an item required to complete the game (like Power Stars on Super Mario 64, or a Dreamer on Hollow Knight). If the game doesn't have that kind of items, we display the highest value key items here, or the main inventory.
2. Major Key items/Abilities. Should contains the items that allows a player to pass major walls. Abilities will almost always be here (unless you're playing a high skill ceiling game, like Super Metroid)
3. Minor Key items. Items that unlocks a moderate bunch of checks. We don't want to put too many of them on that slot, it mainly depend on how much space we can take.

## Detailed list of items

Later.

## Goal Settings

Later.