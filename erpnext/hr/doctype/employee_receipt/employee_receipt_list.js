//change color indicator / status

frappe.listview_settings['Employee Receipt'] = {
	add_fields: ["company", "date","employee", "total_need_to_pay", "payment", "balance_need_to_pay"],
	get_indicator: function(doc) {
		if (doc.status=="Full Paid") {
			return [__("Full Paid"), "green"];
		} else if (doc.status=="Outstanding") {
			return [__("Outstanding"), "red"]
		}
	}
};