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
Ext.define('Med-Table.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',

    initialize: function () {
        audio = (Ext.getCmp('audio1'));
        audio.toggle();
    },

    config: {
        title: 'Home',
        iconCls: 'home',
        xtype: 'container',
        layout: 'hbox',
        pack: 'center',
        items: [{
            xtype: 'audio',
            id: 'audio1',
            loop: true,
            hidden: true,
            url: 'resources/Audio/Welcome.mp3'
        }, {
            xtype: 'image',
            src: 'resources/images/regcard.png',
            flex: 1,
            margin: 50
        }, {
            xtype: 'container',
            flex: 1,
            margin: 50,
            layout: "vbox",
            items: [{
                xtype: 'container',
                layout: 'hbox',
                //flex: 1,
                height: '60px',
                items: [{
                    xtype: 'textfield',
                    name: 'regno',
                    id: 'regno',
                    flex: 3
                }, {
                    xtype: 'button',
                    text: '<img src="resources/images/enter reg no.png" height="40px" width="60px">',
                    ui: 'confirm',
                    handler: function () {
                        if (!this.overlay) {
                            this.overlay = Ext.Viewport.add({
                                xtype: 'panel',
                                id: 'confirmpanel',
                                modal: true,
                                //hideOnMaskTap: true,
                                showAnimation: {
                                    type: 'popIn',
                                    duration: 250,
                                    easing: 'ease-out'
                                },
                                hideAnimation: {
                                    type: 'popOut',
                                    duration: 250,
                                    easing: 'ease-out'
                                },
                                centered: true,
                                width: Ext.os.deviceType == 'Phone' ? 360 : 500,
                                height: Ext.os.deviceType == 'Phone' ? 320 : 600,
                                styleHtmlContent: true,
                                items: [{
                                    docked: 'top',
                                    xtype: 'toolbar',
                                    title: 'कृपया पुष्टि करें',
                                    height: '70px'
                                }, {
                                    xtype: 'image',
                                    src: 'resources/images/Sample Photo.jpg',
                                    height: '150px',
                                    margin: '10 0 10 130'
                                }, {
                                    html: '<h3><br />नाम: राजेश कुमार<br />उम्र: 25<br />वजन: 54 किलो<br />गांव: गनियारी<br />तहसील: तखतपुरर</h3>'
                                }, {
                                    docked: 'bottom',
                                    xtype: 'toolbar',
                                    height: '100px',
                                    items: [{
                                        xtype: 'button',
                                        text: '<img src="resources/images/tick-01.png">',
                                        handler: function () {
                                            Ext.getCmp('confirmpanel').destroy(), audio.stop();
                                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Menu'))
                                        },
                                        padding: '2px',
                                        left: '50px'
                                    }, {
                                        xtype: 'button',
                                        text: '<img src="resources/images/cross-01.png">',
                                        handler: function (hideOnMaskTap) {
                                            //Ext.getCmp('confirmpanel').hide(),
                                            Ext.getCmp('confirmpanel').destroy(), audio.stop();
                                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Main'))
                                        },
                                        padding: '2px',
                                        left: '240px'
                                    }]
                                }],
                                scrollable: true
                            });
                        }
                        this.overlay.show();
                    },
                    flex: 1
                }]
            }, {
                xtype: 'spacer',
                height: 30
            }, {
                xtype: 'container',
                layout: 'hbox',
                flex: 1,
                items: [{
                    xtype: 'button',
                    text: '<img src="resources/images/1.png" height="80">',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        Ext.getCmp('regno').setValue(inp + "1")
                    },
                    flex: 1
                }, {
                    xtype: 'button',
                    text: '<img src="resources/images/2.png" height="80">',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        Ext.getCmp('regno').setValue(inp + "2")
                    },
                    flex: 1
                }, {
                    xtype: 'button',
                    text: '<img src="resources/images/3.png" height="80">',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        Ext.getCmp('regno').setValue(inp + "3")
                    },
                    flex: 1
                }]
            }, {
                xtype: 'container',
                layout: 'hbox',
                flex: 1,
                items: [{
                    xtype: 'button',
                    text: '<img src="resources/images/4.png" height="80">',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        Ext.getCmp('regno').setValue(inp + "4")
                    },
                    flex: 1
                }, {
                    xtype: 'button',
                    text: '<img src="resources/images/5.png" height="80">',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        Ext.getCmp('regno').setValue(inp + "5")
                    },
                    flex: 1
                }, {
                    xtype: 'button',
                    text: '<img src="resources/images/6.png" height="80">',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        Ext.getCmp('regno').setValue(inp + "6")
                    },
                    flex: 1
                }]
            }, {
                xtype: 'container',
                layout: 'hbox',
                flex: 1,
                items: [{
                    xtype: 'button',
                    text: '<img src="resources/images/7.png" height="80">',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        Ext.getCmp('regno').setValue(inp + "7")
                    },
                    flex: 1
                }, {
                    xtype: 'button',
                    text: '<img src="resources/images/8.png" height="80">',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        Ext.getCmp('regno').setValue(inp + "8")
                    },
                    flex: 1
                }, {
                    xtype: 'button',
                    text: '<img src="resources/images/9.png" height="80">',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        Ext.getCmp('regno').setValue(inp + "9")
                    },
                    flex: 1
                }]
            }, {
                xtype: 'container',
                layout: 'hbox',
                flex: 1,
                items: [
                    /*{
                     xtype: 'button',
                     text: '<img src="resources/images/backspace1.png" height="60">',
                     handler: function () {
                     var inp = Ext.getCmp('regno').getValue();
                     inp = inp.slice(0, -1);
                     Ext.getCmp('regno').setValue(inp)
                     },
                     ui: 'decline',
                     flex: 1
                     },*/
                    {
                        xtype: 'button',
                        text: '<img src="resources/images/hash.png" height="80">',
                        handler: function () {
                            var inp = Ext.getCmp('regno').getValue();
                            Ext.getCmp('regno').setValue(inp + "#")
                        },
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '<img src="resources/images/0.png" height="80">',
                        handler: function () {
                            var inp = Ext.getCmp('regno').getValue();
                            Ext.getCmp('regno').setValue(inp + "0")
                        },
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '<img src="resources/images/dot.png" height="80">',
                        handler: function () {
                            var inp = Ext.getCmp('regno').getValue();
                            Ext.getCmp('regno').setValue(inp + ".")
                        },
                        flex: 1
                    }]
            }]
        }]
    }
});