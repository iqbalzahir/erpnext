// Copyright (c) 2017, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

// make a field read-only after saving
frappe.ui.form.on("General Receipt", {
    refresh: function(frm) {
    	// make calculation on the fields
	    var a = frm.doc.payments;
		var b = frm.doc.total_need_to_pay - frm.doc.payment;
		frm.set_value("total", a);
		frm.set_value("balance_need_to_pay", b);
		frm.refresh_field("balance_need_to_pay", "total");
	        // use the __islocal value of doc, to check if the doc is saved or not
	    frm.set_df_property("balance_need_to_pay", "read_only", frm.doc.__islocal ? 1 : 1);
		frm.set_df_property("total", "read_only", frm.doc.__islocal ? 1 : 1);
    }
});

frappe.ui.form.on("General Receipt", "validate", function(frm) {
    if (frm.doc.status === "Received In") {
		if (frm.doc.total_need_to_pay < frm.doc.payment) {
			frappe.throw("<b>Payment</b> is more than <b>total need to pay.</b>");
		}
	}
    if (frm.doc.date < get_today()) {
        msgprint("You can not select past date in <b>Date</b>");
        validated = false;
    }
});

