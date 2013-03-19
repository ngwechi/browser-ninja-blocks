'use strict';

blocktoolApp.service('UIEvents', function() {

    var uiEvents = {

        LoadBlocks:                 'LoadBlocks',
        BlockCreated:               'BlockCreated',
        BlockActivated:             'BlockActivated',

        DeviceActuate:              'DeviceActuate',
        DeviceCreated:              'DeviceCreated',
        DeviceRemoved:              'DeviceRemoved',

        OnActuateUpdated:           'OnActuateUpdated',

        ServerSwitch:               'ServerSwitch',

        IsotopeDeviceRemove:        'IsotopeDeviceRemove',
        IsotopeDeviceAdd:           'IsotopeDeviceAdd',
        IsotopeReLayout:            'IsotopeReLayout'

    };

    return uiEvents;
  
  });
