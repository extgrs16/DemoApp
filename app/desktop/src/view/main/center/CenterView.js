Ext.define('DemoApp.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
	items: [{
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
		items: [{
			html: 'Login Form',
			style: 'background-color: white'
		},
		{
			fieldLabel: 'User Name',
			name: 'username',
			id: 'username',
			style: 'width:250px; background-color: white;'
		},
		{
			fieldLabel: 'Password',
			name: 'password',
			style: 'width:250px; background-color: white;'
		},
		{
			xtype: 'button',
			text: 'Login',
			title: 'login',
			style: 'background-color: grey',
			handler: function(){
				Ext.Msg.alert('Entered Name' );
				console.log(Ext.getCmp('username'));
			}

		}]
	}]
});
