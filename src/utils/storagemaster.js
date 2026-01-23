
class StorageMaster {
    datapackages = [];
    rooms_stored = [];
    version = 1;
    options_version = 1;
    storage_name = '_STORAGE_MASTER';
    storage_prefix = '';

    constructor(prefix) {
        if (prefix != null) {
            this.storage_prefix = prefix;
            this.storage_name = prefix + this.storage_name;
        }

        
        var masterData = localStorage.getItem(this.storage_name);
        if (masterData != null) {
            console.log('storage loaded');
            masterData = JSON.parse(masterData);
            if (masterData.version == this.version) {
                this.datapackages = masterData.datapackages;
                this.rooms_stored = masterData.rooms_stored;
                this.purgeOldDatas();
            }

        }
    }

    purgeOldDatas() {
        var comp_date = Date.now() - (1000 * 3600 * 24 * 7);
        for (var x = 0; x < this.datapackages.length; x++) {
            if (this.datapackages[x].date < comp_date) {
                localStorage.removeItem(this.storage_prefix + '_DATAPACKAGE_' + this.datapackages[x].hash);
                
                this.datapackages.splice(x, 1);
                x -= 1;
            }
        }
        for (var x = 0; x < this.rooms_stored.length; x++) {
            if (this.rooms_stored[x].date < comp_date) {
                localStorage.removeItem(this.storage_prefix + '_ROOM_' + this.rooms_stored[x].hash);
                
                this.rooms_stored.splice(x, 1);
                x -= 1;
            }
        }
    }
    
    saveMaster () {
        var masterData = JSON.stringify({ 'version': this.version, 'datapackages': this.datapackages, 'rooms_stored': this.rooms_stored });
        localStorage.setItem(this.storage_name, masterData);
    }
    saveDatapackage (game, hash, data) {

        var new_package = { 'name': game, 'hash': hash, 'date': Date.now() };
        var stored = false;
        for (var x = 0; x < this.datapackages.length; x++) {
            if (this.datapackages[x].game == game) {
                this.datapackages[x].hash = hash; 
                this.datapackages[x].date = Date.now(); 
                localStorage.setItem(this.storage_prefix + '_DATAPACKAGE_' + hash, data);
                stored = true;
                }
            }
        if (!stored) {
            this.datapackages.push(new_package);
            localStorage.setItem(this.storage_prefix + '_DATAPACKAGE_' + hash, data);

        }
        this.saveMaster();
    }
    loadDatapackage (hash) {
        for (var x = 0; x < this.datapackages.length; x++) {
            if (this.datapackages[x].hash == hash) {
                
                var vRoomData = localStorage.getItem(this.storage_prefix + '_DATAPACKAGE_' + this.datapackages[x].hash);
                if (vRoomData != null) {
                    this.datapackages[x].date = Date.now();
                    this.saveMaster();
                    return JSON.parse(vRoomData);
                }
            }
        }
        return null;
    }
    saveRoomOptions (hash, data) {
        
        var new_room = { 'hash': hash, 'date': Date.now() };
        localStorage.setItem(this.storage_prefix + '_ROOM_' + hash, data);
        this.rooms_stored.push(new_room);
        this.saveMaster();
    }
    loadRoomOptions (hash) {
        
        for (var x = 0; x < this.rooms_stored.length; x++) {
            if (this.rooms_stored[x].hash == hash) {
                
                var vRoomData = localStorage.getItem(this.storage_prefix + '_ROOM_' + this.rooms_stored[x].hash);
                if (vRoomData != null) {
                    this.rooms_stored[x].date = Date.now();
                    this.saveMaster();
                    return JSON.parse(vRoomData);
                }
            }
        }
        return null;
    }
}

export default StorageMaster;