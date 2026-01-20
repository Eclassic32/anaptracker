<template>
    <div class="inline-block">
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Coins</div>

            <img title="Sand Coin" src="/img/ffmq/coins/coin_sand.png" :class="{ 'opacity-25': !getNumberItemsFromName('Sand Coin')  }" />
            <img title="River Coin" src="/img/ffmq/coins/coin_river.png" :class="{ 'opacity-25': !getNumberItemsFromName('River Coin')  }" />
            <img title="Sun Coin" src="/img/ffmq/coins/coin_sun.png" :class="{ 'opacity-25': !getNumberItemsFromName('Sun Coin')  }" />
            <span v-if="skyFragmentMode() && skyFragmentCount()" class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Sky Fragment')  }"><img title="Sky Fragment" src="/img/ffmq/coins/coin_sky_shard.png" />x{{ getNumberItemsFromName('Sky Fragment') }} </span> / {{ skyFragmentCount() }}</span>
            <span v-else-if="skyFragmentMode()" class="text-xs mr-1 font-bold"><img title="Sky Fragment" src="/img/ffmq/coins/coin_sky_shard.png" />x{{getNumberItemsFromName('Sky Fragment')}}</span>
            <img v-else-if="skyCoinMode()" title="Sky Coin" src="/img/ffmq/coins/coin_sky.png" :class="{ 'opacity-25': !getNumberItemsFromName('Sky Coin')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Equipment</div>

            <img v-if="getNumberItemsFromName('Progressive Sword') > 2" title="Excalibur" src="/img/ffmq/weapons/sword3.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Sword') > 1" title="Knight Sword" src="/img/ffmq/weapons/sword2.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Sword') > 0" title="Steel Sword" src="/img/ffmq/weapons/sword1.png" />
            <img v-else-if="getNumberItemsFromName('Excalibur')" title="Excalibur" src="/img/ffmq/weapons/sword3.png" />
            <img v-else-if="getNumberItemsFromName('Knight Sword')" title="Knight Sword" src="/img/ffmq/weapons/sword2.png" />
            <img v-else title="Steel Sword" src="/img/ffmq/weapons/sword1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Steel Sword')  }" />

            <img v-if="getNumberItemsFromName('Progressive Axe') > 2" title="Giant's Axe" src="/img/ffmq/weapons/axe3.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Axe') > 1" title="Battle Axe" src="/img/ffmq/weapons/axe2.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Axe') > 0" title="Axe" src="/img/ffmq/weapons/axe1.png" />
            <img v-else-if="getNumberItemsFromName('Giant\'s Axe')" title="Giant's Axe" src="/img/ffmq/weapons/axe3.png" />
            <img v-else-if="getNumberItemsFromName('Battle Axe')" title="Battle Axe" src="/img/ffmq/weapons/axe2.png" />
            <img v-else title="Axe" src="/img/ffmq/weapons/axe1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Axe')  }" />

            <img v-if="getNumberItemsFromName('Progressive Bomb') > 2" title="Mega Grenade" src="/img/ffmq/weapons/bomb3.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Bomb') > 1" title="Jumbo Bomb" src="/img/ffmq/weapons/bomb2.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Bomb') > 0" title="Bomb" src="/img/ffmq/weapons/bomb1.png" />
            <img v-else-if="getNumberItemsFromName('Mega Grenade')" title="Mega Grenade" src="/img/ffmq/weapons/bomb3.png" />
            <img v-else-if="getNumberItemsFromName('Jumbo Bomb')" title="Jumbo Bomb" src="/img/ffmq/weapons/bomb2.png" />
            <img v-else title="Bomb" src="/img/ffmq/weapons/bomb1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bomb')  }" />

            <img v-if="getNumberItemsFromName('Progressive Claw') > 2" title="Dragon Claw" src="/img/ffmq/weapons/claw3.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Claw') > 1" title="Charm Claw" src="/img/ffmq/weapons/claw2.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Claw') > 0" title="Cat Claw" src="/img/ffmq/weapons/claw1.png" />
            <img v-else-if="getNumberItemsFromName('Dragon Claw')" title="Dragon Claw" src="/img/ffmq/weapons/claw3.png" />
            <img v-else-if="getNumberItemsFromName('Charm Claw')" title="Charm Claw" src="/img/ffmq/weapons/claw2.png" />
            <img v-else title="Cat Claw" src="/img/ffmq/weapons/claw1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Cat Claw')  }" />
            <span class="mr-2"></span>


            <img v-if="getNumberItemsFromName('Progressive Helm') > 2" title="Apollo Helm" src="/img/ffmq/armor/helmet3.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Helm') > 1" title="Moon Helm" src="/img/ffmq/armor/helmet2.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Helm') > 0" title="Steel Helm" src="/img/ffmq/armor/helmet1.png" />
            <img v-else-if="getNumberItemsFromName('Apollo Helm')" title="Apollo Helm" src="/img/ffmq/armor/helmet3.png" />
            <img v-else-if="getNumberItemsFromName('Moon Helm')" title="Moon Helm" src="/img/ffmq/armor/helmet2.png" />
            <img v-else title="Steel Helm" src="/img/ffmq/armor/helmet1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Steel Helm')  }" />

            <img v-if="getNumberItemsFromName('Progressive Armor') > 1" title="Gaia's Armor" src="/img/ffmq/armor/armor3.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Armor') > 0" title="Noble Armor" src="/img/ffmq/armor/armor2.png" />
            <img v-else-if="getNumberItemsFromName('Gaia\'s Armor')" title="Gaia's Armor" src="/img/ffmq/armor/armor3.png" />
            <img v-else-if="getNumberItemsFromName('Noble Armor')" title="Noble Armor" src="/img/ffmq/armor/armor2.png" />
            <img v-else title="Steel Armor" src="/img/ffmq/armor/armor1.png" />

            <img v-if="getNumberItemsFromName('Progressive Shield') > 2" title="Aegis Shield" src="/img/ffmq/armor/shield3.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Shield') > 1" title="Venus Shield" src="/img/ffmq/armor/shield2.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Shield') > 0" title="Steel Shield" src="/img/ffmq/armor/shield1.png" />
            <img v-else-if="getNumberItemsFromName('Aegis Shield')" title="Aegis Shield" src="/img/ffmq/armor/shield3.png" />
            <img v-else-if="getNumberItemsFromName('Venus Shield')" title="Venus Shield" src="/img/ffmq/armor/shield2.png" />
            <img v-else title="Steel Shield" src="/img/ffmq/armor/shield1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Steel Shield')  }" />

            <img title="Cupid Locket" v-if="getNumberItemsFromName('Progressive Accessory') > 2" src="/img/ffmq/armor/cupidlocket.png" />
            <img title="Magic Ring" v-else-if="getNumberItemsFromName('Progressive Accessory') > 1" src="/img/ffmq/armor/magicring.png" />
            <img title="Charm" v-else-if="getNumberItemsFromName('Progressive Accessory') > 0" src="/img/ffmq/armor/charm.png" />
            <img title="Cupid Locket" v-else-if="getNumberItemsFromName('Cupid Locket')" src="/img/ffmq/armor/cupidlocket.png" />
            <img title="Magic Ring" v-else-if="getNumberItemsFromName('Magic Ring')" src="/img/ffmq/armor/magicring.png" />
            <img title="Charm" v-else src="/img/ffmq/armor/charm.png" :class="{ 'opacity-25': !getNumberItemsFromName('Charm')  }" />
            <span class="mr-2"></span>

            <img title="Exit Book" src="/img/ffmq/magic/exit.png" :class="{ 'opacity-25': !getNumberItemsFromName('Exit Book')  }" />
            <img v-if="getNumberItemsFromName('Life Book')" title="White Book - Life" src="/img/ffmq/magic/life.png" />
            <img v-else-if="getNumberItemsFromName('Cure Book')" title="White Book - Cure" src="/img/ffmq/magic/cure.png" />
            <img v-else src="/img/ffmq/magic/heal.png" title="White Book - Heal" :class="{ 'opacity-25': !getNumberItemsFromName('Heal Book')  }" />

            <img v-if="getNumberItemsFromName('Aero Book')" title="Black Book - Aero" src="/img/ffmq/magic/aero.png" />
            <img v-else-if="getNumberItemsFromName('Blizzard Book')" title="Black Book - Blizzard" src="/img/ffmq/magic/blizzard.png" />
            <img v-else-if="getNumberItemsFromName('Fire Book')" title="Black Book - Fire" src="/img/ffmq/magic/fire.png" />
            <img v-else src="/img/ffmq/magic/quake.png" title="Black Book - Quake" :class="{ 'opacity-25': !getNumberItemsFromName('Quake Book')  }" />

            <img v-if="getNumberItemsFromName('Flare Seal')" title="Wizard Seal - Flare" src="/img/ffmq/magic/flare.png" />
            <img v-else-if="getNumberItemsFromName('Meteor Seal')" title="Wizard Seal - Meteor" src="/img/ffmq/magic/meteor.png" />
            <img v-else-if="getNumberItemsFromName('White Seal')" title="Wizard Seal - White" src="/img/ffmq/magic/white.png" />
            <img v-else src="/img/ffmq/magic/thunder.png" title="Wizard Seal - Thunder" :class="{ 'opacity-25': !getNumberItemsFromName('Thunder Seal')  }" />

        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Key Items</div>

            <img title="Libra Crest" src="/img/ffmq/crests/crest_libra.png" :class="{ 'opacity-25': !getNumberItemsFromName('Libra Crest')  }" />
            <img title="Gemini Crest" src="/img/ffmq/crests/crest_gemini.png" :class="{ 'opacity-25': !getNumberItemsFromName('Gemini Crest')  }" />
            <img title="Mobius Crest" src="/img/ffmq/crests/crest_mobius.png" :class="{ 'opacity-25': !getNumberItemsFromName('Mobius Crest')  }" />
            <span class="mr-2"></span>
            <img v-if="!getNumberItemsFromName('Tree Wither')" title="Kaeli's Quest" src="/img/ffmq/inventory/treewither.png" class="opacity-25" />
            <img v-else-if="!getNumberItemsFromName('Elixir')" title="Tree Wither" src="/img/ffmq/inventory/treewither.png" />
            <img v-else title="Tree Wither & Elixir" src="/img/ffmq/inventory/elixir.png" />
            <img title="Wakewater" src="/img/ffmq/inventory/wakewater.png" :class="{ 'opacity-25': !getNumberItemsFromName('Wakewater')  }" />
            <img title="Venus Key" src="/img/ffmq/inventory/venuskey.png" :class="{ 'opacity-25': !getNumberItemsFromName('Venus Key')  }" />
            <img title="Multi Key" src="/img/ffmq/inventory/multikey.png" :class="{ 'opacity-25': !getNumberItemsFromName('Multi Key')  }" />
            <img v-if="!getNumberItemsFromName('Thunder Rock')" title="Mac's Quest" src="/img/ffmq/inventory/thunderrock.png" class="opacity-25" />
            <img v-else-if="!getNumberItemsFromName('Captain\'s Cap')" title="Thunder Rock" src="/img/ffmq/inventory/thunderrock.png" />
            <img v-else title="Thunder Rock & Captain's Cap" src="/img/ffmq/inventory/captaincap.png" />
        </div>
    </div>
    <!--
        <div v-if="data.extended" class="font-normal text-xs mt-1">
            <div v-if="getRemainingsFromZone('Focus Tower -')" class="inline-block bg-red-200/40 rounded-xs p-[2px] px-[4px] pb-[4px] mx-2 bg-opacity-25">
                Focus Tower : <b>{{ getRemainingsFromZone('Focus Tower -') }}</b>
            </div>
            <div v-if="getRemainingsFromZone('Foresta -')" class="inline-block bg-red-200/40 rounded-xs p-[2px] px-[4px] pb-[4px] mx-2 bg-opacity-25">
                Foresta : <b>{{ getRemainingsFromZone('Foresta -') }}</b>
            </div>
            <div v-if="getRemainingsFromZone('Aquaria -')" class="inline-block bg-red-200/40 rounded-xs p-[2px] px-[4px] pb-[4px] mx-2 bg-opacity-25">
                Aquaria : <b>{{ getRemainingsFromZone('Aquaria -') }}</b>
            </div>
            <div v-if="getRemainingsFromZone('Fireburg -')" class="inline-block bg-red-200/40 rounded-xs p-[2px] px-[4px] pb-[4px] mx-2 bg-opacity-25">
                Fireburg : <b>{{ getRemainingsFromZone('Fireburg -') }}</b>
            </div>
            <div v-if="getRemainingsFromZone('Windia -')" class="inline-block bg-red-200/40 rounded-xs p-[2px] px-[4px] pb-[4px] mx-2 bg-opacity-25">
                Windia : <b>{{ getRemainingsFromZone('Windia -') }}</b>
            </div>
            <div v-if="getRemainingsFromZone('Level Forest')" class="inline-block bg-red-200/40 rounded-xs p-[2px] px-[4px] pb-[4px] mx-2 bg-opacity-25">
                Level Forest : <b>{{ getRemainingsFromZone('Level Forest') }}</b>
            </div>
            <div v-if="getRemainingsFromZone('Bone Dungeon')" class="inline-block bg-red-200/40 rounded-xs p-[2px] px-[4px] pb-[4px] mx-2 bg-opacity-25">
                Bone Dungeon : <b>{{ getRemainingsFromZone('Bone Dungeon') }}</b>
            </div>
            <div v-if="getRemainingsFromZone('Wintry Cave')" class="inline-block bg-red-200/40 rounded-xs p-[2px] px-[4px] pb-[4px] mx-2 bg-opacity-25">
                Wintry Cave : <b>{{ getRemainingsFromZone('Wintry Cave') }}</b>
            </div>
            <div v-if="getRemainingsFromZone('Falls Basin')" class="inline-block bg-red-200/40 rounded-xs p-[2px] px-[4px] pb-[4px] mx-2 bg-opacity-25">
                Falls Basin : <b>{{ getRemainingsFromZone('Falls Basin') }}</b>
            </div>
            <div v-if="(getRemainingsFromZone('Ice Pyramid') - 1) > 0" class="inline-block bg-red-200/40 rounded-xs p-[2px] px-[4px] pb-[4px] mx-2 bg-opacity-25">
                Ice Pyramid : <b>{{ getRemainingsFromZone('Ice Pyramid') - 1 }}</b>
            </div>
            <div v-if="getRemainingsFromZone('Mine -')" class="inline-block bg-red-200/40 rounded-xs p-[2px] px-[4px] pb-[4px] mx-2 bg-opacity-25">
                Mine : <b>{{ getRemainingsFromZone('Mine -') }}</b>
            </div>
            <div v-if="getRemainingsFromZone('Volcano -')" class="inline-block bg-red-200/40 rounded-xs p-[2px] px-[4px] pb-[4px] mx-2 bg-opacity-25">
                Volcano : <b>{{ getRemainingsFromZone('Volcano -') }}</b>
            </div>
            <div v-if="getRemainingsFromZone('Lava Dome')" class="inline-block bg-red-200/40 rounded-xs p-[2px] px-[4px] pb-[4px] mx-2 bg-opacity-25">
                Lava Dome : <b>{{ getRemainingsFromZone('Lava Dome') }}</b>
            </div>
            <div v-if="getRemainingsFromZone('Alive Forest')" class="inline-block bg-red-200/40 rounded-xs p-[2px] px-[4px] pb-[4px] mx-2 bg-opacity-25">
                Alive Forest : <b>{{ getRemainingsFromZone('Alive Forest') }}</b>
            </div>
            <div v-if="getRemainingsFromZone('Giant Tree')" class="inline-block bg-red-200/40 rounded-xs p-[2px] px-[4px] pb-[4px] mx-2 bg-opacity-25">
                Giant Tree : <b>{{ getRemainingsFromZone('Giant Tree') }}</b>
            </div>
            <div v-if="getRemainingsFromZone('Mount Gale')" class="inline-block bg-red-200/40 rounded-xs p-[2px] px-[4px] pb-[4px] mx-2 bg-opacity-25">
                Mount Gale : <b>{{ getRemainingsFromZone('Mount Gale') }}</b>
            </div>
            <div v-if="getRemainingsFromZone('Pazuzu\'s Tower')" class="inline-block bg-red-200/40 rounded-xs p-[2px] px-[4px] pb-[4px] mx-2 bg-opacity-25">
                Pazuzu's Tower :<b>{{ getRemainingsFromZone('Pazuzu\'s Tower') }}</b>
            </div>
            <div v-if="getRemainingsFromZone('Mac\'s Ship')" class="inline-block bg-red-200/40 rounded-xs p-[2px] px-[4px] pb-[4px] mx-2 bg-opacity-25">
                Mac's Ship : <b>{{ getRemainingsFromZone('Mac\'s Ship') }}</b>
            </div>
            <div v-if="getRemainingsFromZone('Doom Castle')" class="inline-block bg-red-200/40 rounded-xs p-[2px] px-[4px] pb-[4px] mx-2 bg-opacity-25">
                Doom Castle : <b>{{ getRemainingsFromZone('Doom Castle') }}</b>
            </div>
    </div>
    -->
</template>
    
<script>
/**
 *  Final Fantasy Mystic Quest
 * 
 * Unfortunately, i'm very restricted on what I can do.
 * The game doesn't have Slot Data so I cannot add any goal information.
 * Also, the game always starts with a Steel Armor and one weapon (a Steel Sword per default)
 * 
 */ 
export default {
        name: "gDataFFMysticQuest",
        props: {
            data: Object,
            gamedata: Object,
            index: Number,
            checks_done: Number,
            total_checks: Number,
            player_name: String,
            player_game: String
  },
  data: function () {
    return {
    };
  },

        methods: {
            getImageClass: function () {
                return this.$parent.getImageClass();
            },
            getNumberItemsFromName: function (name) {
                return this.$parent.getNumberItemsFromName(name);
            },
            skyCoinMode: function () {
                if (this.data.slot_data.hasOwnProperty('sky_coin_mode')) {
                    return this.data.slot_data.sky_coin_mode == 0;
                }
                return !this.getNumberItemsFromName('Sky Fragment');
                
            },
            skyFragmentMode: function () {
                if (this.data.slot_data.hasOwnProperty('sky_coin_mode')) {
                    return (this.data.slot_data.sky_coin_mode == 3);
                }
                return this.getNumberItemsFromName('Sky Fragment');

            },
            skyFragmentCount: function () {
                if (this.data.slot_data.hasOwnProperty('shattered_sky_coin_quantity')) {
                    return this.data.slot_data.shattered_sky_coin_quantity;
                }
                return 0;

            }
            /*
            getRemainingsFromZone: function (name) {
                var res = 0;
                if (this.gamedata && this.gamedata.location_name_to_id) {
                    for (var key in this.gamedata.location_name_to_id) {
                        if (key.startsWith(name)) {
                            res++;
                            var id = this.gamedata.location_name_to_id[key];
                            for (var x = 0; x < this.data.tracker_data.player_checks_done.length; x++) {
                                if (this.data.tracker_data.player_checks_done[x] == id)
                                    res--;
                            }
                        }
                    }
                }
                return res;
            },
            getLocationsFromZone: function (name) {
                var res = 0;
                if (this.gamedata && this.gamedata.location_name_to_id) {
                    for (var key in this.gamedata.location_name_to_id) {
                        if (key.startsWith(name)) {
                            var id = this.gamedata.location_name_to_id[key];
                            for (var x = 0; x < this.data.tracker_data.player_checks_done.length; x++) {
                                if (this.data.tracker_data.player_checks_done[x] == id)
                                    res++;
                            }
                        }
                    }
                }
                return res;
            },
            getTotalFromZone: function (name) {
                var res = 0;
                if (this.gamedata && this.gamedata.location_name_to_id) {
                    for (var key in this.gamedata.location_name_to_id) {
                        if (key.startsWith(name))
                            res++;
                    }
                }
                return res;
            },
            */
        },
  components: {
  },
};
</script>
