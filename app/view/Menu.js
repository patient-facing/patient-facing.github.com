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
Ext.define('Med-Table.view.Menu', {
    extend: 'Ext.Panel',
    xtype: 'menu',

    initialize: function () {
        audio = (Ext.getCmp('audio2'));
        audio.toggle();
    },

    config: {
        title: 'Menu',
        iconCls: 'home',
        items: [{
            xtype: 'container',
            items: [{
                xtype: 'button',
                text: '<h2>2</h2><img src="resources/images/medicine reminder_without drop shadow.png">',
                handler: function () {
                    audio.stop();
                    Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.CalendarDisplay'))
                },

                left: '372px',
                top: '50px'
            }, {
                xtype: 'audio',
                id: 'audio2',
                loop: true,
                hidden: true,
                url: 'resources/Audio/Menu.mp3'
            }, {
                xtype: 'button',
                text: '<h2>3</h2><img src="resources/images/instructions-01.png">',
                handler: function () {
                    audio.stop();
                    Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Instructions'))
                },
                left: '709px',
                top: '50px'
            }, {
                xtype: 'button',
                text: '<h2>1</h2><img src="resources/images/next appointment-01.png">',
                handler: function () {
                    audio.stop();
                    Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Appointment'))
                },
                left: '35px',
                top: '50px'
            }]
        }]
    }
});