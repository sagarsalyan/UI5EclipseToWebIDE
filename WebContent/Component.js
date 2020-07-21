jQuery.sap.declare("com.demopro.Component");

sap.ui.core.UIComponent.extend("com.demopro.Component", {
	metadata:{
		rootView:"com.demopro.view.App",
		
		routing:{
			config:{
				viewType:"XML",
				targetAggregation:"pages",
				viewPath:"com.demopro.view",
				targetControl:"appId"
			},
			routes:[
				{
					pattern:"",
					name:"Materials",
					view:"Materials"
				}
			]
		}
	},
		sys_als:"Sagar",
		
		init:function(){
			debugger;
			sys_als = "dfg";
			sap.ui.core.UIComponent.prototype.init.apply(this,arguments);
			var rootPath = jQuery.sap.getModulePath("com.demopro");
			
			var i18nModel = new sap.ui.model.resource.ResourceModel({
				bundleUrl : [rootPath,"i18n/i18n.properties"].join("/")
			});
			this.setModel(i18nModel,"i18n");
			
//			var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZTR_LOAN_DEBT_PAYEMENT_GW_SRV/",true);
//			this.setModel(oModel);
//			oModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
			
			this.getRouter().initialize();
		}
});