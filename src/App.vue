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
                <Settings v-if="ROOM_ID == 'settings'"></Settings>
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
    import Settings from './components/Settings.vue';
    import Home from './components/Home.vue';
    import Statistics from './components/Statistics.vue';
    import ANAP_CONFIG from "./anapconfig.js";
    import axios from 'axios';
    import ANAP_DATA from "./anapdata.js";
    import LIST_OF_GAMES from "./listofgames.js";

    var TRACKER_ID = '';
    var ROOM_ID = '';
    var WEBHOST_USED = 'archipelago';

    

    var EMPTY_DATAPACKAGE = {
        checksum: 'a',
        item_name_groups: {
            a: ['rakdo']
        },
        item_name_to_id: {
            a: 'rakdo'
        },
        location_name_groups: {
            a: ['rakdo']
        },
        location_name_to_id: {
            a: 'rakdo'
        }
    };

    var GLOBAL_TRACKER_DATA = {
        players: [],
        datapackage: [],
        groups: [],
        total_checks_done: 0,
        broken_slot_data: false

    };
    var DEFAULT_OPTIONS = {
        row_size: -1,
        auto_row_m: 12,
        auto_row_s: 40,
        auto_show_player_done: 40,
        show_done: 1,
        show_timer: 1,
        show_hints: 1,
        show_checks_left: 0,
        show_slot_number: 0,
        sort_by: 0,
        store_datapackage: 1,
        store_individual_rooms: 0,
    };
    var OPTIONS = {
        row_size: 0,
        show_done: 1,
        show_timer: 1,
        show_hints: 1,
        show_checks_left: 0,
        show_slot_number: 0,
        sort_by: 0
    };
    class PlayerStruct {

        tracker_data = {
            player_items_received: [],
            player_checks_done: [],
            hints: [],
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
                WEBHOST_USED,
                DEFAULT_OPTIONS
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
                            this.GLOBAL_TRACKER_DATA.players[x].tracker_data.hints = tdata.hints[y].hints;
                            if (tdata.activity_timers[y].time) {
                                this.GLOBAL_TRACKER_DATA.players[x].tracker_data.activity_timer = tdata.activity_timers[y].time;
                            }
                            this.GLOBAL_TRACKER_DATA.players[x].tracker_data.status = tdata.player_status[y].status;
                            break;
                        }
                    }
                }

                // Keeping the Primary Sort then Alphabetical Sort in place.
                this.GLOBAL_TRACKER_DATA.players.sort((a, b) => a.id - b.id);
            },
            // The refresh loop call
            autoRefresh: function () {
                if (!this.validRoom())
                    return;

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
            setDataPackageData: function (key, data, store = true) {
                if (data.hasOwnProperty('checksum'))
                    this.DATA_PACKAGE[key] = data;
                else
                    this.DATA_PACKAGE[key] = EMPTY_DATAPACKAGE;
                if (this.DEFAULT_OPTIONS.store_datapackage && store)
                    localStorage.setItem('TPCE_ANAP_DATAPACKAGE_' + this.STATIC_TRACKER_DATA.datapackage[key].checksum, JSON.stringify(data));
            },
            // Make the Datapackage call thread.
            getChainStaticData: function () {
                for (var key in this.DATA_PACKAGE) {
                    if (typeof this.DATA_PACKAGE[key] !== 'object') {

                        for (var x = 0; x < this.LIST_OF_GAMES.length; x++) {
                            if (LIST_OF_GAMES[x].name == key) {
                                // Retrieving the datapackage
                                var vRoomData = localStorage.getItem('TPCE_ANAP_DATAPACKAGE_' + this.STATIC_TRACKER_DATA.datapackage[key].checksum);
                                if (vRoomData != null && vRoomData != '' && this.DEFAULT_OPTIONS.store_datapackage) {
                                    this.setDataPackageData(key, JSON.parse(vRoomData), false);
                                }
                                else {
                                    console.log("Getting data package from " + key);
                                    this.DATA_PACKAGE[key] = "";
                                    axios
                                        .get(this.ANAP_DATA.archipelagogg.datapackage_url + this.WEBHOST_USED + '/' + this.STATIC_TRACKER_DATA.datapackage[key].checksum)
                                        .then(response => (this.setDataPackageData(key, response.data)))
                                        .then(response => (setTimeout(function (scope) {
                                            scope.getChainStaticData();
                                        }, 250, this)));
                                    // Putting a delay because Archipelago server can't handle too many requests.
                                    return;
                                }
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

                if (this.DEFAULT_OPTIONS.row_size >= 0)
                    this.OPTIONS.row_size = this.DEFAULT_OPTIONS.row_size;
                this.OPTIONS.show_done = this.DEFAULT_OPTIONS.show_done;
                this.OPTIONS.show_timer = this.DEFAULT_OPTIONS.show_timer;
                this.OPTIONS.show_hints = this.DEFAULT_OPTIONS.show_checks_left;
                this.OPTIONS.show_checks_left = this.DEFAULT_OPTIONS.show_slot_number;
                this.OPTIONS.sort_by = this.DEFAULT_OPTIONS.sort_by;

                // If we got the specific Room options, we load it.
                if (this.DEFAULT_OPTIONS.store_individual_rooms) {
                    var roomData = localStorage.getItem('TPCE_ANAP_ROOM_' + this.ROOM_ID);
                    var vRoomData = localStorage.getItem('TPCE_ANAP_VROOM_' + this.ROOM_ID);
                    if (roomData != null && roomData != '' && vRoomData != null && vRoomData == ANAP_CONFIG.SETTINGS_VERSION) {
                        this.OPTIONS = JSON.parse(roomData);
                    }
                }
            },
            loadDefaultOptions: function () {
                // If we got the specific Room options, we load it.
                var roomData = localStorage.getItem('TPCE_ANAP_DEFAULT_OPT' + this.ROOM_ID);
                var vRoomData = localStorage.getItem('TPCE_ANAP_VDEFAULT_OPT' + this.ROOM_ID);
                if (roomData != null && roomData != '' && vRoomData != null && vRoomData == ANAP_CONFIG.SETTINGS_VERSION) {
                    this.DEFAULT_OPTIONS = JSON.parse(roomData);
                }
            },
            saveDefaultOptions: function () {
                localStorage.setItem('TPCE_ANAP_DEFAULT_OPT', JSON.stringify(this.DEFAULT_OPTIONS));
                localStorage.setItem('TPCE_ANAP_VDEFAULT_OPT', ANAP_CONFIG.SETTINGS_VERSION);
            },
            saveOptions: function () {
                if (this.DEFAULT_OPTIONS.store_individual_rooms) {
                    localStorage.setItem('TPCE_ANAP_ROOM_' + this.ROOM_ID, JSON.stringify(this.OPTIONS));
                    localStorage.setItem('TPCE_ANAP_VROOM_' + this.ROOM_ID, ANAP_CONFIG.SETTINGS_VERSION);
                }
            },
            // Routing Methods
            updateTitle: function (route, webhost, id) {
                var urltosec = ANAP_CONFIG.URL_WEBSITE;
                var fake_route = location.href.slice(urltosec.length + 1); // La route à couper.
                var fake_args = fake_route.split('/');

                if (this.validRoom() && this.ROOM_ID != this.TRACKER_ID)
                    document.title = "Room " + this.ROOM_ID + " from " + this.WEBHOST_USED;
                else if (this.validRoom())
                    document.title = "Tracker " + this.ROOM_ID + " from" + this.WEBHOST_USED;
                else if (fake_args.length > 0 && fake_args[0] == 'statistics')
                    document.title = "A normal dashboard";
                else if (fake_args.length > 0 && fake_args[0] == 'settings')
                    document.title = "A normal settings page";
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
                var route = ''; // Default route
                // Page selection
                if (['statistics', 'settings', 'room', 'tracker'].includes(arg1)) {
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

                this.ROOM_ID = arg1;
                if (id.length == 22 && route == '')
                    route = 'room';
                if (!['room', 'tracker'].includes(route))
                    id = null;


                console.log('Full route is ' + route + ' / ' + webhost + ' / ' + id);
                if (this.ROOM_ID && route == 'room' && id != null && id.length == 22)
                    this.startLoadingFromRoom();
                if (this.ROOM_ID && route == 'tracker' && id != null && id.length == 22)
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
                this.GLOBAL_TRACKER_DATA.players = [];
                this.GLOBAL_TRACKER_DATA.datapackage = [];
                this.GLOBAL_TRACKER_DATA.groups = [];
                this.GLOBAL_TRACKER_DATA.total_checks_done = 0;
                this.GLOBAL_TRACKER_DATA.broken_slot_data = false;
                this.ROOM_ID = '';
                this.TRACKER_ID = '';
                this.route('', null, null);
            },
            loadRoom: function (roomid) {
                this.route('room', 'archipelago', roomid);
            },
            goToStats: function () {
                this.route('statistics');
            },
            goToSettings: function () {
                this.route('settings');
            },
        },
        components: {
            PlayerList,
            Navbar,
            Home,
            Settings,
            Statistics
        },
        mounted: function () {
            var url = location.href;
            this.loadDefaultOptions();
            this.getRouteInfos();

        },
    };



</script>
