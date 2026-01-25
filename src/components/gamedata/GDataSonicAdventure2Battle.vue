<template>
    <div class="inline-block">
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Chaos Emeralds</div>


            <img v-if="chaosEmeraldRequired()" title="White Chaos Emerald" src="/img/sa2b/ap_emerald_white.png" :class="{ 'opacity-25': !getNumberItemsFromName('White Chaos Emerald')  }" />
            <img v-if="chaosEmeraldRequired()" title="Red Chaos Emerald" src="/img/sa2b/ap_emerald_red.png" :class="{ 'opacity-25': !getNumberItemsFromName('Red Chaos Emerald')  }" />
            <img v-if="chaosEmeraldRequired()" title="Cyan Chaos Emerald" src="/img/sa2b/ap_emerald_cyan.png" :class="{ 'opacity-25': !getNumberItemsFromName('Cyan Chaos Emerald')  }" />
            <img v-if="chaosEmeraldRequired()" title="Purple Chaos Emerald" src="/img/sa2b/ap_emerald_purple.png" :class="{ 'opacity-25': !getNumberItemsFromName('Purple Chaos Emerald')  }" />
            <img v-if="chaosEmeraldRequired()" title="Green Chaos Emerald" src="/img/sa2b/ap_emerald_green.png" :class="{ 'opacity-25': !getNumberItemsFromName('Green Chaos Emerald')  }" />
            <img v-if="chaosEmeraldRequired()" title="Yellow Chaos Emerald" src="/img/sa2b/ap_emerald_yellow.png" :class="{ 'opacity-25': !getNumberItemsFromName('Yellow Chaos Emerald')  }" />
            <img v-if="chaosEmeraldRequired()" title="Blue Chaos Emerald" src="/img/sa2b/ap_emerald_blue.png" :class="{ 'opacity-25': !getNumberItemsFromName('Blue Chaos Emerald')  }" />
            <span v-if="chaosEmeraldRequired()" class="mr-2"></span>
            <span v-if="emblemsNumber()" class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Emblem')  }"><img title="Emblem" src="/img/sa2b/emblem.png" />x{{ getNumberItemsFromName('Emblem') }} </span> / {{ emblemsNumber() }}</span>
            <span v-else class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Emblem')  }"><img title="Emblem" src="/img/sa2b/emblem.png" />x{{ getNumberItemsFromName('Emblem') }} </span></span>
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Abilities</div>

            <img title="Sonic - Light Shoes" src="/img/sa2b/sonic_light_shoes.png" :class="{ 'opacity-25': !getNumberItemsFromName('Sonic - Light Shoes')  }" />
            <img title="Sonic - Bounece Bracelet" src="/img/sa2b/sonic_bounce_bracelet.png" :class="{ 'opacity-25': !getNumberItemsFromName('Sonic - Bounce Bracelet')  }" />
            <img title="Sonic - Flame Ring" src="/img/sa2b/sonic_flame_ring.png" :class="{ 'opacity-25': !getNumberItemsFromName('Sonic - Flame Ring')  }" />
            <img title="Sonic - Mystic Melody" src="/img/sa2b/sonic_mystic_melody.png" :class="{ 'opacity-25': !getNumberItemsFromName('Sonic - Mystic Melody')  }" />
            <span class="mr-2"></span>
            <img title="Tails - Booster" src="/img/sa2b/tails_booster.png" :class="{ 'opacity-25': !getNumberItemsFromName('Tails - Booster')  }" />
            <img title="Tails - Mystic Melody" src="/img/sa2b/tails_mystic_melody.png" :class="{ 'opacity-25': !getNumberItemsFromName('Tails - Mystic Melody')  }" />
            <img title="Tails - Bazooka" src="/img/sa2b/tails_bazooka.png" :class="{ 'opacity-25': !getNumberItemsFromName('Tails - Bazooka')  }" />
            <span class="mr-2"></span>
            <img title="Knuckles - Mystic Melody" src="/img/sa2b/knuckles_mystic_melody.png" :class="{ 'opacity-25': !getNumberItemsFromName('Knuckles - Mystic Melody')  }" />
            <img title="Knuckles - Shovel Claws" src="/img/sa2b/knuckles_shovel_claws.png" :class="{ 'opacity-25': !getNumberItemsFromName('Knuckles - Shovel Claws')  }" />
            <img title="Knuckles - Air Necklace" src="/img/sa2b/knuckles_air_necklace.png" :class="{ 'opacity-25': !getNumberItemsFromName('Knuckles - Air Necklace')  }" />
            <img title="Knuckles - Hammer Gloves" src="/img/sa2b/knuckles_hammer_gloves.png" :class="{ 'opacity-25': !getNumberItemsFromName('Knuckles - Hammer Gloves')  }" />
            <img title="Knuckles - Sunglasses" src="/img/sa2b/knuckles_sunglasses.png" :class="{ 'opacity-25': !getNumberItemsFromName('Knuckles - Sunglasses')  }" />
            <span class="mr-2"></span>
            <img title="Shadow - Flame Ring" src="/img/sa2b/shadow_flame_ring.png" :class="{ 'opacity-25': !getNumberItemsFromName('Shadow - Flame Ring')  }" />
            <img title="Shadow - Air Shoes" src="/img/sa2b/shadow_air_shoes.png" :class="{ 'opacity-25': !getNumberItemsFromName('Shadow - Air Shoes')  }" />
            <img title="Shadow - Mystic Melody" src="/img/sa2b/shadow_mystic_melody.png" :class="{ 'opacity-25': !getNumberItemsFromName('Shadow - Mystic Melody')  }" />
            <span class="mr-2"></span>
            <img title="Eggman - Mystic Melody" src="/img/sa2b/eggman_mystic_melody.png" :class="{ 'opacity-25': !getNumberItemsFromName('Eggman - Mystic Melody')  }" />
            <img title="Eggman - Jet Engine" src="/img/sa2b/eggman_jet_engine.png" :class="{ 'opacity-25': !getNumberItemsFromName('Eggman - Jet Engine')  }" />
            <img title="Eggman - Large Cannon" src="/img/sa2b/eggman_large_cannon.png" :class="{ 'opacity-25': !getNumberItemsFromName('Eggman - Large Cannon')  }" />
            <span class="mr-2"></span>
            <img title="Rouge - Mystic Melody" src="/img/sa2b/rouge_mystic_melody.png" :class="{ 'opacity-25': !getNumberItemsFromName('Rouge - Mystic Melody')  }" />
            <img title="Rouge - Pick Nails" src="/img/sa2b/rouge_pick_nails.png" :class="{ 'opacity-25': !getNumberItemsFromName('Rouge - Pick Nails')  }" />
            <img title="Rouge - Treasure Scope" src="/img/sa2b/rouge_treasure_scope.png" :class="{ 'opacity-25': !getNumberItemsFromName('Rouge - Treasure Scope')  }" />
            <img title="Rouge - Iron Boots" src="/img/sa2b/rouge_iron_boots.png" :class="{ 'opacity-25': !getNumberItemsFromName('Rouge - Iron Boots')  }" />
        </div>
    </div>
</template>
    
<script>

    /**
    * Pokemon Emerald
    *
    * Goal is to beat Elite 4 or Steven.
    * You needs badges, like any other Pokemon game.
    * 
    */
export default {
        name: "gDataSonicAdventure2Battle",
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
            getGoalDetails: function () {
                return [];
            },
            getImageClass: function () {
                return this.$parent.getImageClass();
            },
            getNumberItemsFromName: function (name) {
                return this.$parent.getNumberItemsFromName(name);
            },
            chaosEmeraldRequired: function () {
                if (this.data.slot_data.hasOwnProperty('Goal')) {
                    return [1, 2, 6].includes(this.data.slot_data.Goal);
                }
                return 1;
            },
            emblemsRequired: function () {
                if (this.data.slot_data.hasOwnProperty('Goal')) {
                    return [0, 3, 4, 5].includes(this.data.slot_data.Goal);
                }
                return 1;
            },
            emblemsNumber: function () {
                if (this.emblemsRequired()) {
                    return this.data.slot_data.EmblemsForCannonsCore;
                }
                return 0;
            }
            
        },
  components: {
  },
};
</script>
