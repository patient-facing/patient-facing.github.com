/**
 * Copyright 2012, Raxa
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
Ext.application({
    name: 'Med-Table',
    requires: ['Ext.MessageBox'],

    views: ['Main', 'Schedule', 'CalendarDisplay', 'Menu', 'ExpandedMorning', 'Instructions', 'ExpandedAfternoon', 'ExpandedEvening', 'ExpandedNight'],
    models: ['Medicine', 'Instruction'],
    stores: ['MorningMedicines', 'AfternoonMedicines', 'EveningMedicines', 'NightMedicines', 'Instructions'],
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function () {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Med-Table.view.Main'));
    },

    onUpdated: function () {
        Ext.Msg.confirm("Application Update", "This application has just successfully been updated to the latest version. Reload now?", function (buttonId) {
            if (buttonId === 'yes') {
                window.location.reload();
            }
        });
    }
});