frappe.listview_settings['General Receipt'] = {
	add_fields: ["company", "date","payment_to", "payment_from", "total_need_to_pay", "payment","payments", "balance_need_to_pay"],
	get_indicator: function(doc) {
		if (doc.status=="Received In") {
			return [__("Received In"), "green"];
		} else if (doc.status=="Sending Out") {
			return [__("Sending Out"), "red"]
		}
	}
};