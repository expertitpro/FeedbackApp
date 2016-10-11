/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('FeedbackApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'FeedbackApp.view.main.MainController',
        'FeedbackApp.view.main.MainModel',
        'FeedbackApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

/*    items: [{
                    xtype: 'container',
                    
                    layout: {
                        type: 'hbox',
                        align: 'center',
                        pack: 'center'
                    },*/
                    /* Here we're using hbox layout to arrange  the form panel horizontally in center. */
                    margin: 20,
                    title: 'Support Ticket Request',
                    width: 650,
                    height: 500,
                    renderTo: Ext.getBody(),
                    style: 'margin: 50px',
                    items: [{
                        xtype: 'container',
                        layout: 'hbox',
                        items: [{
                            xtype: 'textfield',
                            fieldLabel: 'First Name', 
                            name: 'FirstName',
                            labelAlign: 'top',
                            cls: 'field-margin',
                            flex: 1
                        }, {
                            xtype: 'textfield',
                            fieldLabel: 'Last Name',  
                            name: 'LastName',
                            labelAlign: 'top',
                            cls: 'field-margin',
                            flex: 1
                        },{
                            xtype: 'textfield',
                            fieldLabel: 'E-mail',  
                            name: 'E-mail',
                            labelAlign: 'top',
                            cls: 'field-margin',
                            flex: 1
                        },{
                            xtype: 'textfield',
                            fieldLabel: 'Telephone',  
                            name: 'Telephone',
                            labelAlign: 'top',
                            cls: 'field-margin',
                            flex: 1
                        },{
                        xtype: 'checkboxgroup',
                        name: 'RequestType',
                        fieldLabel: 'Request Type',
                        labelAlign: 'top',
                        columns: 1,
                        cls: 'field-margin',
                        vertical: true,
                        items: [{
                            boxLabel: 'Type 1',
                            name: 'type1',
                            inputValue: '1'
                        }, {
                            boxLabel: 'Type 2',
                            name: 'type2',
                            inputValue: '2'
                        }, {

                        // more here ...

                            boxLabel: 'Type 5',
                            name: 'type5',
                            inputValue: '5'
                        }, {

                            boxLabel: 'Type 6',
                            name: 'type6',
                            inputValue: '6'
                        }],
                        flex: 1
                    }]
                }],buttons: [{
                        text: 'Submit',
                        handler: function () {
                            var form = this.up('form').getForm();
                            if (form.isValid()) {
                                form.submit({
                                    url: 'http://192.168.1.141/yii-1.1/DirectApp/index.php?r=Heroes/Create',
                                    //url: 'http://localhost/yii-1.1/DirectApp/index.php?r=Heroes/Create',
                                       success: function () {
                                            Ext.Msg.alert("Good", "All Mobile systems Go!!");
                                        },
                                        failure: function () {
                                            Ext.Msg.alert("Problem", "Major Mobile Problems");
                                        }
                                });
                            } else {
                                Ext.Msg.alert('Error', 'Fix the errors in the form')
                            }
                        }
                    }]
                        
});
