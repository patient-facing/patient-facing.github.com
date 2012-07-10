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
Ext.define('Med-Table.view.ExpandedMorning', {
    extend: 'Ext.Panel',
    xtype: 'expandedmorning',

    initialize: function () {
        audio = (Ext.getCmp('audio1'));
        audio.toggle();
    },

    config: {
        title: 'MorningSchedule',
        iconCls: 'time',
        layout: 'vbox',
        items: [{
            xtype: 'toolbar',
            ui: 'light',
            height: 'auto',
            items: [{
                xtype: 'audio',
                id: 'audio1',
                loop: true,
                hidden: true,
                url: 'resources/Audio/ExpandedScheduleScreen.mp3'
            }, {
                xtype: 'button',
                text: '<img src="resources/images/appoint-small.png">',
                handler: function () {
                    audio.stop();
                    Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Appointment'))
                },
                padding: '5px'
            }, {
                xtype: 'button',
                disabled: 'true',
                text: '<img src="resources/images/sched_clicked.png">',
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
            xtype: 'container',
            layout: 'hbox',
            flex: 1,
            items: [{
                xtype: 'container',
                width: '625px',
                layout: 'vbox',
                items: [{
                    xtype: 'container',
                    height: '286',
                    style: 'background-color: #30cc18;',
                    layout: 'hbox',
                    items: [{
                        xtype: "spacer"
                    }, {
                        xtype: 'button',
                        text: '<img src="resources/images/morning_expanded-01.png" >',
                        padding: '0px',
                        handler: function () {
                            audio.stop();
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Schedule'))
                        }
                    }, {
                        xtype: "spacer"
                    }]
                }, {
                    xtype: 'list',
                    flex: 1,
                    store: 'MorningMedicines',
                    itemTpl: '<img src="{medicineImage}"/> <img src="{afterBeforeFood}"/> <img src="{dose}"/> <img src="{warning1}"/> <img src="{warning2}"/> <h1>{name}</h1> <h1></h1> ',
                    itemCls: 'medicine-entry-morning',
                    style: 'background-color: #30cc18;',
                    listeners: {
                        itemtap: function (view, index, item, record, e) {
                            //to add handler to play audio for tablet
                        }
                    }
                }]
            }, {
                xtype: 'container',
                flex: 1,
                layout: 'vbox',
                items: [{
                    xtype: 'container',
                    height: '286',
                    style: 'background-color: #1f60fe;',
                    layout: 'hbox',
                    items: [{
                        xtype: "spacer"
                    }, {
                        xtype: 'button',
                        text: '<img src="resources/images/day-small.png">',
                        padding: '0px',
                        handler: function () {
                            audio.stop();
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.ExpandedAfternoon'))
                        }
                    }, {
                        xtype: "spacer"
                    }]
                }, {
                    xtype: 'list',
                    flex: 1,
                    store: 'AfternoonMedicines',
                    itemTpl: '<img src="{medicineImage}"/><h6>{name:ellipsis(10)}</h6>',
                    itemCls: 'medicine-entry',
                    style: 'background-color: #1f60fe;',
                    listeners: {
                        itemtap: function (view, index, item, record, e) {
                            audio.stop();
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.ExpandedAfternoon'))
                        }
                    }
                }]
            }, {
                xtype: 'container',
                flex: 1,
                layout: 'vbox',
                items: [{
                    xtype: 'container',
                    height: '286',
                    style: 'background-color: #30cc18;',
                    layout: 'hbox',
                    items: [{
                        xtype: "spacer"
                    }, {
                        xtype: 'button',
                        text: '<img src="resources/images/evening-small.png">',
                        padding: '0px',
                        handler: function () {
                            audio.stop();
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.ExpandedEvening'))
                        }
                    }, {
                        xtype: "spacer"
                    }]
                }, {
                    xtype: 'list',
                    flex: 1,
                    store: 'EveningMedicines',
                    itemTpl: '<img src="{medicineImage}"/><h6>{name:ellipsis(10)}</h6>',
                    itemCls: 'medicine-entry',
                    style: 'background-color: #30cc18;',
                    listeners: {
                        itemtap: function (view, index, item, record, e) {
                            audio.stop();
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.ExpandedEvening'))
                        }
                    }
                }]
            }, {
                xtype: 'container',
                flex: 1,
                layout: 'vbox',
                items: [{
                    xtype: 'container',
                    height: '286',
                    style: 'background-color: #1f60fe;',
                    layout: 'hbox',
                    items: [{
                        xtype: "spacer"
                    }, {
                        xtype: 'button',
                        text: '<img src="resources/images/night-small.png">',
                        padding: '0px',
                        handler: function () {
                            audio.stop();
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.ExpandedNight'))
                        }
                    }, {
                        xtype: "spacer"
                    }]
                }, {
                    xtype: 'list',
                    flex: 1,
                    store: 'NightMedicines',
                    itemTpl: '<img src="{medicineImage}"/><h6>{name:ellipsis(10)}</h6>',
                    itemCls: 'medicine-entry',
                    style: 'background-color: #1f60fe;',
                    listeners: {
                        itemtap: function (view, index, item, record, e) {
                            audio.stop();
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.ExpandedNight'))
                        }
                    }
                }]
            }]
        }]
    }
});