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
Ext.define('Med-Table.view.Appointment', {
    extend: 'Ext.Panel',
    xtype: 'appointment',

    initialize: function () {
        audio = (Ext.getCmp('audio4'));
        audio.toggle();
    },

    config: {
        title: 'Next Appointment',
        iconCls: 'time',
        layout: 'vbox',
        items: [{
            xtype: 'audio',
            id: 'audio4',
            hidden: true,
            url: 'resources/Audio/Appointment.mp3'
        }, {
            xtype: 'toolbar',
            ui: 'light',
            height: 'auto',
            items: [{
                xtype: 'button',
                disabled: 'true',
                text: '<img src="resources/images/appt_clicked.png">',
                disabled: 'true',
                handler: function () {
                    Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Appointment'))
                },
                padding: '5px'
            }, {
                xtype: 'button',
                text: '<img src="resources/images/reminder-small.png">',
                handler: function () {
                    audio.stop();
                    Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.CalendarDisplay'))
                },
                padding: '5px'
            }, {
                xtype: 'button',
                text: '<img src="resources/images/instructions-small.png">',
                handler: function () {
                    audio.stop();
                    Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Instructions'))
                },
                padding: '5px'
            }, {
                xtype: 'spacer'
            }, {
                xtype: 'button',
                text: '<img src="resources/images/home-small.png">',
                handler: function () {
                    audio.stop();
                    Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Main'))
                },
                padding: '5px'
            }]
        }, {
            html: '<embed src="calendar/appointment.html" width="100%" height="150%"/>'
        }]
    }
});