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
Ext.define('Med-Table.view.CalendarDisplay', {
    extend: 'Ext.Panel',
    xtype: 'calendardisplay',

    initialize: function () {
        audio = (Ext.getCmp('audio1'));
        audio.toggle();
    },

    config: {
        title: 'Display Calendar',
        layout: 'vbox',
        items: [{
            xtype: 'toolbar',
            ui: 'light',
            height: 'auto',
            items: [{
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
            pack: 'center',
            items: [{
                xtype: 'audio',
                id: 'audio1',
                hidden: true,
                url: 'resources/Audio/Calender.mp3'
            }, {
                xtype: 'container',
                flex: 1,
                margin: 50,
                layout: "vbox",
                items: [{
                    xtype: 'toolbar',
                    title: "जुलाई - 2012",
                    ui: 'confirm',
                    disabled: 'true'
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    height: '75px',

                    items: [{
                        xtype: 'button',
                        text: 'रवि',
                        ui: 'action',
                        disabled: 'true',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: 'सोम',
                        ui: 'action',
                        disabled: 'true',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: 'मंगल',
                        ui: 'action',
                        disabled: 'true',
                        /*handler: function()
                         {
                         var inp = Ext.getCmp('regno').getValue();
                         Ext.getCmp('regno').setValue(inp + "0")
                         },*/
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: 'बुध',
                        ui: 'action',
                        disabled: 'true',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: 'गुरु',
                        ui: 'action',
                        disabled: 'true',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: 'शुक्र',
                        ui: 'action',
                        disabled: 'true',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: 'शनि',
                        ui: 'action',
                        disabled: 'true',
                        flex: 1
                    }

                    ]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    height: '75px',

                    items: [{
                        xtype: 'button',
                        text: '1',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '2',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '3',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '4',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '5',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '6',


                        flex: 1
                    }, {
                        xtype: 'button',
                        ui: 'confirm',
                        text: '7',
                        handler: function () {
                            audio.stop();
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Schedule'))
                        },
                        flex: 1
                    }]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    height: '75px',
                    items: [{
                        xtype: 'button',
                        text: '8',
                        handler: function () {
                            audio.stop();
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Schedule'))
                        },
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '9',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '10',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '11',
                        handler: function () {
                            audio.stop();
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Schedule'))
                        },
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '12',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '13',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '14',
                        flex: 1
                    }]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    height: '75px',

                    items: [{
                        xtype: 'button',
                        text: '15',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '16',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '17',
                        handler: function () {
                            audio.stop();
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Schedule'))
                        },
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '18',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '19',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '20',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '21',
                        flex: 1
                    }]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    height: '75px',
                    items: [{
                        xtype: 'button',
                        text: '22',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '23',

                        handler: function () {
                            audio.stop();
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Schedule'))
                        },
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '24',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '25',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '26',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '27',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '28',
                        flex: 1
                    }]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    height: '75px',

                    items: [{
                        xtype: 'button',
                        text: '29',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '30',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '31',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '1',
                        disabled: 'true',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '2',
                        disabled: 'true',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '3',
                        disabled: 'true',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '4',
                        disabled: 'true',
                        flex: 1
                    }]
                }]
            }]
        }]
    }
});