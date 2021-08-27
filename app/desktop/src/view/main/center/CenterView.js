var store = Ext.create('Ext.data.Store', {
    fields: ['name','progress','price'],
    data: [
        { name: 'Test 1', progress: 0.10 , price: 100},
        { name: 'Test 2', progress: 0.23 , price: 150},
        { name: 'Test 3', progress: 0.86, price: 450 },
        { name: 'Test 4', progress: 0.31 , price : 680}
    ]
});
var grid1 =	Ext.create({
		xtype: 'grid',
		title: 'Widget Column Demo',
		store: store,
	
		columns: [{
			text: 'Test Number',
			dataIndex: 'name',
			width: 100
		}
		, {
			text: 'Progress',
			width: 120,
			dataIndex: 'progress',
			widget: {
				xtype: 'progressbarwidget',
				textTpl: '{value:percent}'
			}
		},
		{
			text: 'price',
			dataIndex: 'price',
			width: 100
		}

	],
	
		width: 220,
		height: 250,
		// renderTo: document.body
	});


Ext.define('DemoApp.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	title: 'Businesses',
	cls: 'centerview',
	layout: 'card',
	items: [
		{
		xtype: 'panel',
		viewModel: {
			type: 'test'
		},
		fullscreen: true,
		//layout: 'hbox',
		defaultType: 'textfield',
		default: {
			flex: 1
		},
		items: [grid1]

		// // Ext.define('DemoApp.view.Main', {
			// extend: 'DemoApp.Application',
			
			 
			// columns: [
			// 	{ xtype: 'rownumberer', width: 55},
			// 	{ text: 'Name',  dataIndex: 'name', flex : 2},
			// 	{ text: 'Address', dataIndex: 'full_address', flex : 3  },
			// 	{ text: 'City', dataIndex: 'city', flex: 1 }
			// ],
			 
			// store: {
			// 	type: 'virtual',
			// 	pageSize: 200,
			// 	proxy : { type : 'ajax', url : '//nameless-tundra-27404.herokuapp.com/go/?fn=bigdata', reader : { type : 'json', rootProperty : 'data' } },
			// 	autoLoad: true
			// }
			 
			// });
			// Ext.application({
			// name: 'DemoApp',
			// mainView: 'DemoApp.view.Main'
			// });


// 		items: [{
// 			html: 'Login Form',
// 			style: 'background-color: white'
// 		},
// 		{
// 			fieldLabel: 'User Name',
// 			name: 'username',
// 			id: 'username',
// 			style: 'width:250px; background-color: white;'
// 		},
// 		{
// 			fieldLabel: 'Password',
// 			name: 'password',
// 			id: 'password',
// 			style: 'width:250px; background-color: white;'
// 		},
// 		{
// 			xtype: 'button',
// 			text: 'Login',
// 			title: 'login',
// 			style: 'background-color: grey',
// 			handler: function(){
// 				 var username = Ext.getCmp('username').getValue() ;
// 				 var password = Ext.getCmp('password').getValue() ;
// 				Ext.Msg.alert('Entered Name' +username );
// 				console.log(username);
// 				console.log(password);
// 			}

// 		}
// ]
	}]
});
