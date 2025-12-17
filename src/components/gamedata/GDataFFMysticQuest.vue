<template>
    <div>
        <img v-if="getNumberItemsFromName('Progressive Sword') > 2" src="/img/ffmq/weapons/sword3.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Progressive Sword') > 1" src="/img/ffmq/weapons/sword2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Progressive Sword') > 0" src="/img/ffmq/weapons/sword1.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Excalibur')" src="/img/ffmq/weapons/sword3.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Knight Sword')" src="/img/ffmq/weapons/sword2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else src="/img/ffmq/weapons/sword1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Steel Sword')  }" />

        <img v-if="getNumberItemsFromName('Progressive Axe') > 2" src="/img/ffmq/weapons/axe3.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Progressive Axe') > 1" src="/img/ffmq/weapons/axe2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Progressive Axe') > 0" src="/img/ffmq/weapons/axe1.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Gaia Axe')" src="/img/ffmq/weapons/axe3.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Steel Axe')" src="/img/ffmq/weapons/axe2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else src="/img/ffmq/weapons/axe1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Axe')  }" />

        <img v-if="getNumberItemsFromName('Progressive Bomb') > 2" src="/img/ffmq/weapons/bomb3.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Progressive Bomb') > 1" src="/img/ffmq/weapons/bomb2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Progressive Bomb') > 0" src="/img/ffmq/weapons/bomb1.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Mega Grenade')" src="/img/ffmq/weapons/bomb3.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Jumbo Bomb')" src="/img/ffmq/weapons/bomb2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else src="/img/ffmq/weapons/bomb1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Bomb')  }" />

        <img v-if="getNumberItemsFromName('Progressive Claw') > 2" src="/img/ffmq/weapons/claw3.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Progressive Claw') > 1" src="/img/ffmq/weapons/claw2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Progressive Claw') > 0" src="/img/ffmq/weapons/claw1.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Dragon Claw')" src="/img/ffmq/weapons/claw3.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Charm Claw')" src="/img/ffmq/weapons/claw2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else src="/img/ffmq/weapons/claw1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Cat Claw')  }" />
        <span class="mr-1"></span>


        <img v-if="getNumberItemsFromName('Progressive Helm') > 2" src="/img/ffmq/armor/helmet3.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Progressive Helm') > 1" src="/img/ffmq/armor/helmet2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Progressive Helm') > 0" src="/img/ffmq/armor/helmet1.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Apollo Helm')" src="/img/ffmq/armor/helmet3.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Venus Helm')" src="/img/ffmq/armor/helmet2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else src="/img/ffmq/armor/helmet1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Steel Helm')  }" />

        <img v-if="getNumberItemsFromName('Progressive Armor') > 2" src="/img/ffmq/armor/armor3.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Progressive Armor') > 1" src="/img/ffmq/armor/armor2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Progressive Armor') > 0" src="/img/ffmq/armor/armor1.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Gaia Armor')" src="/img/ffmq/armor/armor3.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Noble Armor')" src="/img/ffmq/armor/armor2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else src="/img/ffmq/armor/armor1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Steel Armor')  }" />

        <img v-if="getNumberItemsFromName('Progressive Shield') > 2" src="/img/ffmq/armor/shield3.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Progressive Shield') > 1" src="/img/ffmq/armor/shield2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Progressive Shield') > 0" src="/img/ffmq/armor/shield1.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Dragon Shield')" src="/img/ffmq/armor/shield3.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Venus Shield')" src="/img/ffmq/armor/shield2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else src="/img/ffmq/armor/shield1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Steel Shield')  }" />

        <img v-if="getNumberItemsFromName('Progressive Accessory') > 2" src="/img/ffmq/armor/cupidlocket.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Progressive Accessory') > 1" src="/img/ffmq/armor/magicring.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Progressive Accessory') > 0" src="/img/ffmq/armor/charm.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Cupid Locket')" src="/img/ffmq/armor/cupidlocket.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Magic Ring')" src="/img/ffmq/armor/magicring.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else src="/img/ffmq/armor/charm.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Charm')  }" />
        <span class="mr-1"></span>

        <img src="/img/ffmq/magic/exit.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Exit Book')  }" />
        <img v-if="getNumberItemsFromName('Life Book')" src="/img/ffmq/magic/life.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Cure Book')" src="/img/ffmq/magic/cure.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else src="/img/ffmq/magic/heal.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Heal Book')  }" />

        <img v-if="getNumberItemsFromName('Aero Book')" src="/img/ffmq/magic/aero.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Blizzard Book')" src="/img/ffmq/magic/blizzard.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Fire Book')" src="/img/ffmq/magic/fire.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else src="/img/ffmq/magic/quake.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Quake Book')  }" />

        <img v-if="getNumberItemsFromName('Flare Seal')" src="/img/ffmq/magic/flare.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Meteor Seal')" src="/img/ffmq/magic/meteor.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('White Seal')" src="/img/ffmq/magic/white.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else src="/img/ffmq/magic/thunder.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Thunder Seal')  }" />

        |
        <img src="/img/ffmq/inventory/treewither.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Tree Wither')  }" />
        <img src="/img/ffmq/inventory/elixir.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Elixir')  }" />
        <img src="/img/ffmq/inventory/wakewater.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Wakewater')  }" />
        <img src="/img/ffmq/inventory/venuskey.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Venus Key')  }" />
        <img src="/img/ffmq/inventory/multikey.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Multi Key')  }" />
        <img src="/img/ffmq/inventory/thunderrock.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Thunder Rock')  }" />
        <img src="/img/ffmq/inventory/captaincap.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Captain\'s Cap')  }" />
        <img src="/img/ffmq/crests/crest_libra.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Libra Crest')  }" />
        <img src="/img/ffmq/crests/crest_gemini.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Gemini Crest')  }" />
        <img src="/img/ffmq/crests/crest_mobius.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Mobius Crest')  }" />
        |
        <img src="/img/ffmq/coins/coin_sand.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Sand Coin')  }" />
        <img src="/img/ffmq/coins/coin_river.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('River Coin')  }" />
        <img src="/img/ffmq/coins/coin_sun.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Sun Coin')  }" />
        <span v-if="getNumberItemsFromName('Sky Fragment')" class="text-xs mr-1"><img src="/img/ffmq/coins/coin_sky_shard.png" class="inline-block w-[16px] h-[16px]" />x{{getNumberItemsFromName('Sky Fragment')}}</span>
        <img v-else src="/img/ffmq/coins/coin_sky.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Sky Coin')  }" />
    </div>
</template>
    
<script>

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
            getNumberItemsFromName: function (name) {
                var res = 0;
                if (this.gamedata && this.gamedata.location_name_to_id && this.data && this.data.player_items_received) {

                    var id = this.gamedata.item_name_to_id[name];
                    //console.log(this.gamedata.item_name_to_id);
                    //console.log(id);
                    //console.log(this.data.player_items_received);
                    for (var x = 0; x < this.data.player_items_received[this.index].items.length; x++) {
                        //console.log(this.data.player_items_received[this.index].items[x])
                        if (this.data.player_items_received[this.index].items[x][0] == id)
                            res++;
                    }
                }
                return res;
            }
        },
  components: {
  },
};
</script>
