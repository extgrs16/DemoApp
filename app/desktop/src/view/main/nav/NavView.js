const masterpanel = Ext.create('Ext.panel.Panel', {
    renderTo: Ext.getBody(),
    width: 400,
    height: 300,
    items: [
        {
            xtype: 'panel',
            title: 'Child Panel 1',
            height: 100,
            // width: '100%'
			columnWidth: 0.5
        },
        {
            xtype: 'panel',
            title: 'Child Panel 2',
            height: 100,
            // width: '100%'
			columnWidth: 0.5
		}
    ]
});


Ext.define('DemoApp.view.main.nav.NavView', {
	extend: 'Ext.Panel',
	xtype: 'navview',
	controller: "navviewcontroller",
	cls: 'navview',
	layout: 'fit',
	tbar: {xtype: 'topview', height: 50},
	items: [ 
		{
			xtype: 'menuview', 
			reference: 'menuview', 
			bind: {width: '{menuview_width}'}, 
			listeners: { 
				selectionchange: "onMenuViewSelectionChange"
			}
		},
		{
			masterpanel
		}
	],
	bbar: {xtype: 'bottomview', bind: {height: '{bottomview_height}'}}
});
