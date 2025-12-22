<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 bg-gray-800 z-0">
        </div>
    <div class="relative h-screen">
        <div class="flex flex-col">
            <div>
                <Navbar v-bind:data="TRACKER_DATA" v-bind:gamedata="DATA_PACKAGE" v-bind:static_data="STATIC_TRACKER_DATA" v-bind:room="ROOM_DATA"></Navbar>
            </div>
            <div>
                <PlayerList v-if="validRoom()" v-bind:globaldata="GLOBAL_TRACKER_DATA" v-bind:gamedata="DATA_PACKAGE"></PlayerList>
                <Home v-else></Home>
            </div>
        </div>
    </div>
</template>
<script>
    import PlayerList from "./components/PlayerList.vue";
    import Navbar from './components/Navbar.vue';
    import Home from './components/Home.vue';
    import H_CONFIG from "./hconfig.js";
    import axios from 'axios';
    import ANAP_DATA from "./anapdata.js";
    import LIST_OF_GAMES from "./listofgames.js";

    var TRACKER_ID = '';
    var ROOM_ID = '';


    var GLOBAL_TRACKER_DATA = {
        players: [],
        datapackage: [],
        groups: [],
        total_checks_done: 0

    };
    var OPTIONS = {
        row_size: 0,
        show_done: 1,
        show_timer: 1,
        sort_by: 0
    };
    var STATIC_TRACKER_DATA = {
        datapackage: [],
        groups: [],
        player_locations_total: []

    };
    class PlayerStruct {

        tracker_data = {
            player_items_received: [],
            player_checks_done: [],
            activity_timer: '',
            status: '',
        };
        static_data = {};
        slot_data = {};
        status = 0;
        name = '';
        alias = '';
        game = '';
        id = 0;
        total_locations = 0;
        group = 0;

        constructor(new_id, new_name, new_game) {
            this.id = new_id;
            this.name = new_name;
            this.game = new_game;
        }
    }
var TRACKER_DATA = {
        activity_timers: [],
        aliases: [],
        connection_timers: [],
        hints: [],
        player_checks_done: [],
        player_status: [],
        total_checks_done: []
    };
    var STATIC_TRACKER_DATA = {
        datapackage: [],
        groups: [],
        player_locations_total: []

    };
    var ROOM_DATA = {players:[]};
    var SLOT_DATA = {};
    var DATA_PACKAGE = {};

export default {
  name: "app",
  data: function () {
      return {
          ANAP_DATA,
          STATIC_TRACKER_DATA,
          GLOBAL_TRACKER_DATA,
          SLOT_DATA,
          ROOM_DATA,
          DATA_PACKAGE,
          TRACKER_ID,
          ROOM_ID,
          LIST_OF_GAMES,
          OPTIONS
    };
  },
  created() {
    window.addEventListener("keyup", this.onKeyPress);
  },
  beforeUnmount() {
    window.removeEventListener("keyup", this.onKeyPress);
  },

  methods: {
    /* onKeyPress(e) {
                if (e.which === 8) {
                    this.undo();
                }
            },
            */
    toggleRemoveOnCompleted: function () {
      this.removeOnCompleted = !this.removeOnCompleted;
      },
      validRoom: function () {
          if (this.ROOM_ID && this.ROOM_DATA.players.length > 0)
              return true;
          return false;
      },
      trackerIsReady() {
          if (this.ROOM_DATA.players && this.ROOM_DATA.players.length > 0 && 
              this.STATIC_TRACKER_DATA.datapackage && this.STATIC_TRACKER_DATA.datapackage.length > 0)
              return true;
          return false;
      },
      toggleMe: function () {
          //this.seeder.next_objective();
      }
      ,
      refreshTrackerData: function (tdata) {
          this.GLOBAL_TRACKER_DATA.total_checks_done = tdata.total_checks_done[0].checks_done;
          for (var y = 0; y < tdata.player_checks_done.length; y++) {
              for (var x = 0; x < this.GLOBAL_TRACKER_DATA.players.length; x++) {
                  //console.log(this.GLOBAL_TRACKER_DATA.players[x]);
                  if (this.GLOBAL_TRACKER_DATA.players[x].id == tdata.player_checks_done[y].player) {
                      this.GLOBAL_TRACKER_DATA.players[x].tracker_data.player_items_received = tdata.player_items_received[y].items;
                      this.GLOBAL_TRACKER_DATA.players[x].tracker_data.player_checks_done = tdata.player_checks_done[y].locations;
                      this.GLOBAL_TRACKER_DATA.players[x].tracker_data.activity_timer = tdata.activity_timers[y].time
                      this.GLOBAL_TRACKER_DATA.players[x].tracker_data.status = tdata.player_status[y].status;
                      break;
                  }
              }
          }
      },
      autoRefresh: function () {
          var TRACKER_URL = this.ANAP_DATA.archipelagogg.tracker_url + this.ROOM_DATA.tracker;

          axios
              .get(TRACKER_URL)
              .then(response => (this.refreshTrackerData(response.data)));

          setTimeout(function (scope) {
              scope.autoRefresh();
          }, 10000, this);
      },
      getStaticData: function (sdata) {
          this.STATIC_TRACKER_DATA = sdata;
          for (var key in sdata.datapackage) {
              this.DATA_PACKAGE[key] = "";
          }
          this.GLOBAL_TRACKER_DATA.groups = sdata.groups;
          for (var y = 0; y < sdata.player_locations_total.length; y++) {
              for (var x = 0; x < this.GLOBAL_TRACKER_DATA.players.length; x++) {
                  if (this.GLOBAL_TRACKER_DATA.players[x].id == sdata.player_locations_total[y].player) {
                      this.GLOBAL_TRACKER_DATA.players[x].total_locations = sdata.player_locations_total[y].total_locations;
                      break;
                  }
              }
          }
          this.getChainStaticData();
      },
      getSlotData: function (sdata) {
          this.SLOT_DATA = sdata;
          for (var y = 0; y < sdata.length; y++) {
              for (var x = 0; x < this.GLOBAL_TRACKER_DATA.players.length; x++) {
                  if (this.GLOBAL_TRACKER_DATA.players[x].id == sdata[y].player) {
                      this.GLOBAL_TRACKER_DATA.players[x].slot_data = sdata[y].slot_data;
                      break;
                  }
              }
          }
      },
      getChainStaticData: function () {
          for (var key in this.DATA_PACKAGE) {
              if (typeof this.DATA_PACKAGE[key] !== 'object') {

                  for (var x = 0; x < this.LIST_OF_GAMES.length; x++) {
                      if (LIST_OF_GAMES[x].name == key) {

                          console.log("Getting data package from " + key);
                          this.DATA_PACKAGE[key] = "";
                          axios
                              .get(this.ANAP_DATA.archipelagogg.datapackage_url + this.STATIC_TRACKER_DATA.datapackage[key].checksum)
                              .then(response => (this.DATA_PACKAGE[key] = response.data))
                              .then(response => (setTimeout(function (scope) {
                                  scope.getChainStaticData();
                              }, 500, this)));
                          // Putting a delay because Archipelago server can't handle too many requests.
                          return;
                      }
                  }
              }
          }
      },
      beginTrackingData(room_data) {
          this.ROOM_DATA = room_data;
          GLOBAL_TRACKER_DATA.players = [];

          if (!this.validRoom())
              return;

          var index_player = 0;
          // Pushing room data in a proprer structure. This will allow us to sort the data later
          for (var x = 0; x < room_data.players.length; x++) {
              index_player += 1;
              GLOBAL_TRACKER_DATA.players.push(new PlayerStruct(index_player, room_data.players[x][0], room_data.players[x][1]));
          }

          var SLOT_URL = this.ANAP_DATA.archipelagogg.slot_url + this.ROOM_DATA.tracker;
          var STATIC_TRACKER_URL = this.ANAP_DATA.archipelagogg.static_tracker_url + this.ROOM_DATA.tracker;
          axios
              .get(STATIC_TRACKER_URL)
              .then(response => (this.getStaticData(response.data)));

          axios
              .get(SLOT_URL)
              .then(response => (this.getSlotData(response.data)));
          this.autoRefresh();
      },
      refresh: function () {
          var ROOM_URL = this.ANAP_DATA.archipelagogg.room_url + this.ROOM_ID;

          axios
              .get(ROOM_URL)
              .then(response => (this.beginTrackingData(response.data)));
     },
      loadRoom: function (roomid) {
          this.ROOM_ID = roomid;
          window.history.replaceState(null, document.title, H_CONFIG.URL_WEBSITE + '/' + roomid);
          this.refresh();
      },
      getRouteInfos: function () {
          var urltosec = H_CONFIG.URL_WEBSITE;
          console.log(this.$route);
          var iChapter = 0;
          var iPage = 1;
          //console.log(location.href.slice(urltosec.length + 1));
          var fake_route = location.href.slice(urltosec.length + 1); // La route à couper.
          console.log(fake_route);
          var fake_args = fake_route.split('/');
          if (fake_args.length > 0 && fake_args[0].length > 0) {
              this.ROOM_ID = fake_args[0];
              this.refresh();
          }
      /* Méthodes quand l'appli est mounted*/
      }
  },
  components: {
    PlayerList,
    Navbar,
    Home
  },
        mounted: function () {
            var url = location.href;
            //console.log(url);
            //console.log(location.hostname);
            this.getRouteInfos();
  },
    };



</script>
