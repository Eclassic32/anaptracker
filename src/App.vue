<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 bg-gray-800 z-0">
    </div>
    <div class="relative h-screen">
        <div class="flex flex-col">
            <div>
                <Navbar v-bind:gamedata="DATA_PACKAGE"></Navbar>
            </div>
            <div>
                <Statistics v-if="ROOM_ID == 'statistics'"></Statistics>
                <PlayerList v-else-if="validRoom()" v-bind:globaldata="GLOBAL_TRACKER_DATA" v-bind:gamedata="DATA_PACKAGE"></PlayerList>
                <Home v-else></Home>
            </div>
        </div>
    </div>
    <Toast  position="bottom-right" />
</template>
<script>
    import PlayerList from "./components/PlayerList.vue";
    import Navbar from './components/Navbar.vue';
    import Home from './components/Home.vue';
    import Statistics from './components/Statistics.vue';
    import ANAP_CONFIG from "./anapconfig.js";
    import axios from 'axios';
    import ANAP_DATA from "./anapdata.js";
    import ANAP_WEBHOST from "./anapwebhost.js";
    import LIST_OF_GAMES from "./listofgames.js";

    var TRACKER_ID = '';
    var ROOM_ID = '';
    var WEBHOST_USED = 'archipelago';

    


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
    var SLOT_DATA = {};
    var DATA_PACKAGE = {};

    export default {
        name: "app",
        data: function () {
            return {
                ANAP_DATA,
                GLOBAL_TRACKER_DATA,
                SLOT_DATA,
                DATA_PACKAGE,
                TRACKER_ID,
                ROOM_ID,
                LIST_OF_GAMES,
                OPTIONS,
                WEBHOST_USED
            };
        },
        created() {
            window.addEventListener("keyup", this.onKeyPress);
        },
        beforeUnmount() {
            window.removeEventListener("keyup", this.onKeyPress);
        },

        methods: {
            // Checks if the loaded room is valid (can fetch data, has players, ...)
            validRoom: function () {
                if (this.TRACKER_ID && this.GLOBAL_TRACKER_DATA.players.length > 0)
                    return true;
                return false;
            },
            // Checks if the tracker is ready to use (make sure most of the calls are loaded)
            trackerIsReady: function () {
                if (this.GLOBAL_TRACKER_DATA.players && this.GLOBAL_TRACKER_DATA.players.length > 0 &&
                    this.STATIC_TRACKER_DATA.datapackage && this.STATIC_TRACKER_DATA.datapackage.length > 0)
                    return true;
                return false;
            },
            // Checks if the Slot Data call broke
            brokenSlotData: function () {
                return this.GLOBAL_TRACKER_DATA.broken_slot_data;
            },
            toasOasIOAST: function (message, category) {
                if (category == null)
                    category = info;

                //this.$toast.add({ summary: message, severity: category, life: 8000 });
            },
            // Refresh the tracker data, using the tracker API call result
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
            // The refresh loop call
            autoRefresh: function () {
                var TRACKER_URL = this.ANAP_DATA.archipelagogg.tracker_url + this.WEBHOST_USED + '/' + this.TRACKER_ID;

                axios
                    .get(TRACKER_URL)
                    .then(response => (this.refreshTrackerData(response.data)));

                setTimeout(function (scope) {
                    scope.autoRefresh();
                }, 10000, this);
            },
            // Push the static_tracker API call result on the App
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
            // Pus hthe slot_data_tracker API call result on the App
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

                if (this.GLOBAL_TRACKER_DATA.broken_slot_data == true) {
                    this.toasOasIOAST('No Slot Data available for this room. Tracking will have less precision than usual.', 'error');
                }

            },
            // Make the Datapackage call thread.
            getChainStaticData: function () {
                for (var key in this.DATA_PACKAGE) {
                    if (typeof this.DATA_PACKAGE[key] !== 'object') {

                        for (var x = 0; x < this.LIST_OF_GAMES.length; x++) {
                            if (LIST_OF_GAMES[x].name == key) {

                                console.log("Getting data package from " + key);
                                this.DATA_PACKAGE[key] = "";
                                axios
                                    .get(this.ANAP_DATA.archipelagogg.datapackage_url + this.WEBHOST_USED + '/' + this.STATIC_TRACKER_DATA.datapackage[key].checksum)
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
            // Begin tracking a room, setting the call chain.
            beginTrackingDataFromRoom(room_data) {
                this.GLOBAL_TRACKER_DATA.players = [];

                var index_player = 0;
                // Pushing room data in a proprer structure. This will allow us to sort the data later
                for (var x = 0; x < room_data.players.length; x++) {
                    index_player += 1;
                    this.GLOBAL_TRACKER_DATA.players.push(new PlayerStruct(index_player, room_data.players[x][0], room_data.players[x][1]));
                }
                this.TRACKER_ID = room_data.tracker;

                if (!this.validRoom())
                    return;
                this.updateTitle('room', 'archipelago', this.ROOM_ID);

                // Automatic row size depending on player count
                this.OPTIONS.row_size = 2;
                if (this.GLOBAL_TRACKER_DATA.players.length >= 50) {
                    this.OPTIONS.row_size = 0;
                }
                else if (GLOBAL_TRACKER_DATA.players.length >= 12) {
                    this.OPTIONS.row_size = 1;
                }

                // Automatically hide players done on a large player pool
                this.OPTIONS.show_done = 1;
                if (this.GLOBAL_TRACKER_DATA.players.length >= 30) {
                    this.OPTIONS.show_done = 0;
                }
                var SLOT_URL = this.ANAP_DATA.archipelagogg.slot_url + this.WEBHOST_USED + '/' + room_data.tracker;
                var STATIC_TRACKER_URL = this.ANAP_DATA.archipelagogg.static_tracker_url + this.WEBHOST_USED + '/' + room_data.tracker;
                axios
                    .get(STATIC_TRACKER_URL)
                    .then(response => (this.getStaticData(response.data)));

                axios
                    .get(SLOT_URL)
                    .then(response => (this.getSlotData(response.data)));
                this.loadOptions();
                this.autoRefresh();
            },
            // Begin tracking a tracker, setting the call chain.
            beginTrackingDataFromTracker(room_data) {
                this.GLOBAL_TRACKER_DATA.players = [];

                var index_player = 0;
                // Pushing room data in a proprer structure. This will allow us to sort the data later
                for (var x = 0; x < room_data.player_game.length; x++) {
                    index_player += 1;
                    GLOBAL_TRACKER_DATA.players.push(new PlayerStruct(index_player, 'Slot ' + room_data.player_game[x].player, room_data.player_game[x].game));
                }

                if (!this.validRoom())
                    return;
                this.updateTitle('room', 'archipelago', this.ROOM_ID);

                // Automatic row size depending on player count
                this.OPTIONS.row_size = 2;
                if (this.GLOBAL_TRACKER_DATA.players.length >= 50) {
                    this.OPTIONS.row_size = 0;
                }
                else if (this.GLOBAL_TRACKER_DATA.players.length >= 12) {
                    this.OPTIONS.row_size = 1;
                }

                // Automatically hide players done on a large player pool
                this.OPTIONS.show_done = 1;
                if (this.GLOBAL_TRACKER_DATA.players.length >= 30) {
                    this.OPTIONS.show_done = 0;
                }

                var SLOT_URL = this.ANAP_DATA.archipelagogg.slot_url + this.WEBHOST_USED + '/' + this.TRACKER_ID;
                this.getStaticData(room_data);

                axios
                    .get(SLOT_URL)
                    .then(response => (this.getSlotData(response.data)));
                this.loadOptions();
                this.autoRefresh();
            },
            loadOptions: function () {
                // If we got the specific Room options, we load it.
                var roomData = localStorage.getItem('TPCE_ANAP_ROOM_' + this.ROOM_ID);
                var vRoomData = localStorage.getItem('TPCE_ANAP_VROOM_' + this.ROOM_ID);
                if (roomData != null && roomData != '' && vRoomData != null && vRoomData == ANAP_CONFIG.APP_VERSION) {
                    this.OPTIONS = JSON.parse(roomData);
                }
                /*
                else {
                     // If not, we load the last options set
                    roomData = localStorage.getItem('TPCE_ANAP_ROOM_LAST');
                    vRoomData = localStorage.getItem('TPCE_ANAP_VROOM_LAST');
                    if (roomData != null && roomData != '' && vRoomData != null && vRoomData == ANAP_CONFIG.APP_VERSION)
                        this.OPTIONS = JSON.parse(roomData);
                }
                */
            },
            saveOptions: function () {
                localStorage.setItem('TPCE_ANAP_ROOM_' + this.ROOM_ID, JSON.stringify(this.OPTIONS));
                localStorage.setItem('TPCE_ANAP_VROOM_' + this.ROOM_ID, ANAP_CONFIG.APP_VERSION);
                localStorage.setItem('TPCE_ANAP_ROOM_LAST', JSON.stringify(this.OPTIONS));
                localStorage.setItem('TPCE_ANAP_VROOM_LAST', ANAP_CONFIG.APP_VERSION);
            },
            // Routing Methods
            updateTitle: function (route, webhost, id) {
                var urltosec = ANAP_CONFIG.URL_WEBSITE;
                var fake_route = location.href.slice(urltosec.length + 1); // La route à couper.
                var fake_args = fake_route.split('/');

                if (this.validRoom())
                    document.title = "Room " + this.ROOM_ID + " for archipelago.gg";
                else if (fake_args.length > 0 && fake_args[0] == 'statistics')
                    document.title = "A normal Dashboard";
                else
                    document.title = "A normal AP Tracker";
            },
            updateURL: function (route, webhost, id) {
                var urltosec = ANAP_CONFIG.URL_WEBSITE;
                if (route != null)
                    urltosec += '/' + route;
                if (webhost != null)
                    urltosec += '/' + webhost;
                if (id != null)
                    urltosec += '/' + id;

                window.history.replaceState(null, document.title, urltosec);

                this.updateTitle(route, webhost, id);
            },
            startLoadingFromRoom: function () {
                var ROOM_URL = this.ANAP_DATA.archipelagogg.room_url + this.WEBHOST_USED + '/' + this.ROOM_ID;

                axios
                    .get(ROOM_URL)
                    .then(response => (this.beginTrackingDataFromRoom(response.data)));
            },
            startLoadingFromTracker: function () {
                var ROOM_URL = this.ANAP_DATA.archipelagogg.static_tracker_url + this.WEBHOST_USED + '/' + this.ROOM_ID;
                this.TRACKER_ID = this.ROOM_ID;

                axios
                    .get(ROOM_URL)
                    .then(response => (this.beginTrackingDataFromTracker(response.data)));
            },
            /**
             * Route :
             * Arg 1 : main route
             *  - statistics : get the dashboard
             *  - room : get Tracker Data from a room ID ()
             *  - tracker : get Tracker Data from a tracker ID
             *  Ignored if the route is not recognized
             * Arg 2 : webhost
             *  Redirect the tracker data to a recognized webhost, otherwise, go to the 3rd argument
             * Arg 3 : ID of the room/tracker
             * 
             * route is the first method to call when you load a new page !!!
             */
            route: function (arg1, arg2, arg3) {
                var route = 'room'; // Default route
                // Page selection
                if (['statistics', 'room', 'tracker'].includes(arg1)) {
                    route = arg1;
                }
                if (arg2 != null)
                    arg1 = arg2;
                if (arg3 != null)
                    arg2 = arg3;

                // Webhost Selection
                var webhost = null;
                if (['archipelago', 'bananium'].includes(arg1)) {
                    webhost = arg1;
                    this.WEBHOST_USED = 'archipelago';
                    // Not shown on the URL if possible.
                    if (webhost == 'archipelago')
                        webhost = null;
                    else
                        this.WEBHOST_USED = webhost;
                }

                if (arg2 != null)
                    arg1 = arg2;
                // ID
                var id = arg1;

                console.log('Full route is ' + route + ' / ' + webhost + ' / ' + id);

                this.ROOM_ID = arg1;
                if (this.ROOM_ID && route == 'room')
                    this.startLoadingFromRoom();
                if (this.ROOM_ID && route == 'tracker')
                    this.startLoadingFromTracker();

                this.updateURL(route, webhost, id);
            },
            getRouteInfos: function () {
                var urltosec = ANAP_CONFIG.URL_WEBSITE;
                var iChapter = 0;
                var iPage = 1;

                var fake_route = location.href.slice(urltosec.length + 1); // La route à couper.
                var fake_args = fake_route.split('/');


                if (fake_args.length > 0 && fake_args[0].length > 0) {

                    var arg1 = fake_args[0];
                    var arg2 = fake_args.length > 1 ? fake_args[1] : null;
                    var arg3 = fake_args.length > 2 ? fake_args[2] : null;

                    this.route(arg1, arg2, arg3);
                }
            },
            resetBack: function () {
                this.ROOM_DATA.players = [];
                this.GLOBAL_TRACKER_DATA.players = [];
                this.GLOBAL_TRACKER_DATA.datapackage = [];
                this.GLOBAL_TRACKER_DATA.groups = [];
                this.GLOBAL_TRACKER_DATA.total_checks_done = 0;
                this.GLOBAL_TRACKER_DATA.broken_slot_data = false;
                this.ROOM_ID = '';
                this.TRACKER_ID = '';
                document.title = "A normal AP Tracker";
                this.updateURL();
            },
            loadRoom: function (roomid) {
                this.route('room', 'archipelago', roomid);
            },
            goToStats: function () {
                this.route('statistics');
            },
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
