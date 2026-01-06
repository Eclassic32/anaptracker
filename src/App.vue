<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 bg-gray-800 z-0">
        </div>
    <div class="relative h-screen">
        <div class="flex flex-col">
            <div>
                <Navbar v-bind:gamedata="DATA_PACKAGE" v-bind:room="ROOM_DATA"></Navbar>
            </div>
            <div>
                <Statistics v-if="ROOM_ID == 'statistics'"></Statistics>
                <PlayerList v-else-if="validRoom()" v-bind:globaldata="GLOBAL_TRACKER_DATA" v-bind:gamedata="DATA_PACKAGE"></PlayerList>
                <Home v-else></Home>
            </div>
        </div>
    </div>
</template>
<script>
    import PlayerList from "./components/PlayerList.vue";
    import Navbar from './components/Navbar.vue';
    import Home from './components/Home.vue';
    import Statistics from './components/Statistics.vue';
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
        total_checks_done: 0,
        broken_slot_data: false

    };
    var OPTIONS = {
        row_size: 0,
        show_done: 1,
        show_timer: 1,
        show_checks_left: 0,
        show_slot_number: 0,
        sort_by: 0
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
        extended = 0;

        constructor(new_id, new_name, new_game) {
            this.id = new_id;
            this.name = new_name;
            this.game = new_game;
        }
    }
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
    toggleRemoveOnCompleted: function () {
      this.removeOnCompleted = !this.removeOnCompleted;
      },
      validRoom: function () {
          if (this.ROOM_ID && this.ROOM_DATA.players.length > 0)
              return true;
          return false;
      },
      trackerIsReady: function() {
          if (this.ROOM_DATA.players && this.ROOM_DATA.players.length > 0 && 
              this.STATIC_TRACKER_DATA.datapackage && this.STATIC_TRACKER_DATA.datapackage.length > 0)
              return true;
          return false;
      },
      brokenSlotData: function () {
          return this.GLOBAL_TRACKER_DATA.broken_slot_data;
      },
      refreshTrackerData: function (tdata) {
          this.GLOBAL_TRACKER_DATA.total_checks_done = tdata.total_checks_done[0].checks_done;
          for (var y = 0; y < tdata.player_checks_done.length; y++) {
              for (var x = 0; x < this.GLOBAL_TRACKER_DATA.players.length; x++) {
                  if (this.GLOBAL_TRACKER_DATA.players[x].id == tdata.player_checks_done[y].player) {
                      this.GLOBAL_TRACKER_DATA.players[x].tracker_data.player_items_received = tdata.player_items_received[y].items;
                      this.GLOBAL_TRACKER_DATA.players[x].tracker_data.player_checks_done = tdata.player_checks_done[y].locations;
                      if (tdata.activity_timers[y].time) {
                          this.GLOBAL_TRACKER_DATA.players[x].tracker_data.activity_timer = tdata.activity_timers[y].time;
                      }
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
          this.GLOBAL_TRACKER_DATA.broken_slot_data = true;
          for (var y = 0; y < sdata.length; y++) {
              for (var x = 0; x < this.GLOBAL_TRACKER_DATA.players.length; x++) {
                  if (this.GLOBAL_TRACKER_DATA.players[x].id == sdata[y].player) {
                      this.GLOBAL_TRACKER_DATA.players[x].slot_data = sdata[y].slot_data;
                      this.GLOBAL_TRACKER_DATA.broken_slot_data = false;
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
                              }, 250, this)));
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

          // Automatic row size depending on player count
          this.OPTIONS.row_size = 2;
          if (room_data.players.length >= 50) {
              this.OPTIONS.row_size = 0;
          }
          else if (room_data.players.length >= 12) {
              this.OPTIONS.row_size = 1;
          }

          // Automatically hide players done on a large player pool
          this.OPTIONS.show_done = 1;
          if (room_data.players.length >= 30) {
              this.OPTIONS.show_done = 0;
          }

          var SLOT_URL = this.ANAP_DATA.archipelagogg.slot_url + this.ROOM_DATA.tracker;
          var STATIC_TRACKER_URL = this.ANAP_DATA.archipelagogg.static_tracker_url + this.ROOM_DATA.tracker;
          axios
              .get(STATIC_TRACKER_URL)
              .then(response => (this.getStaticData(response.data)));

          axios
              .get(SLOT_URL)
              .then(response => (this.getSlotData(response.data)));
          this.loadOptions();
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
      goToStats: function () {
          this.ROOM_ID = 'statistics';
          window.history.replaceState(null, document.title, H_CONFIG.URL_WEBSITE + '/' + this.ROOM_ID);
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
              if (this.ROOM_ID && this.ROOM_ID != 'statistics')
                  this.refresh();
          }
      /* Méthodes quand l'appli est mounted*/
      },
      resetBack: function () {
          this.GLOBAL_TRACKER_DATA.players = [];
          this.GLOBAL_TRACKER_DATA.datapackage = [];
          this.GLOBAL_TRACKER_DATA.groups = [];
          this.GLOBAL_TRACKER_DATA.total_checks_done = 0;
          this.GLOBAL_TRACKER_DATA.broken_slot_data = false;
          this.ROOM_ID = '';
          window.history.replaceState(null, document.title, H_CONFIG.URL_WEBSITE);
      },
      saveOptions: function () {
          localStorage.setItem('TPCE_ANAP_ROOM_' + this.ROOM_ID, JSON.stringify(this.OPTIONS));
          localStorage.setItem('TPCE_ANAP_VROOM_' + this.ROOM_ID, H_CONFIG.APP_VERSION);
          localStorage.setItem('TPCE_ANAP_ROOM_LAST', JSON.stringify(this.OPTIONS));
          localStorage.setItem('TPCE_ANAP_VROOM_LAST', H_CONFIG.APP_VERSION);
      },
      loadOptions: function () {
          // If we got the specific Room options, we load it.
          var roomData = localStorage.getItem('TPCE_ANAP_ROOM_' + this.ROOM_ID);
          var vRoomData = localStorage.getItem('TPCE_ANAP_VROOM_' + this.ROOM_ID);
          /*
          if (roomData != null && roomData != '' && vRoomData != null && vRoomData == H_CONFIG.APP_VERSION) {
              this.OPTIONS = JSON.parse(roomData);
          }
          else {
               // If not, we load the last options set
              roomData = localStorage.getItem('TPCE_ANAP_ROOM_LAST');
              vRoomData = localStorage.getItem('TPCE_ANAP_VROOM_LAST');
              if (roomData != null && roomData != '' && vRoomData != null && vRoomData == H_CONFIG.APP_VERSION)
                  this.OPTIONS = JSON.parse(roomData);
          }
          */
      }
  },
  components: {
    PlayerList,
    Navbar,
    Home,
    Statistics
  },
        mounted: function () {
            var url = location.href;
            this.getRouteInfos();
  },
    };



</script>
