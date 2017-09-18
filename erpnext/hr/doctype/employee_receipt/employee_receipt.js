// Copyright (c) 2017, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt


// additional validation on dates and status
frappe.ui.form.on("Employee Receipt", "validate", function(frm) {
    if (frm.doc.status === "Outstanding") {
		if (frm.doc.total_need_to_pay <= frm.doc.payment) {
			msgprint("total need to pay must more than payment");
		}
	}

    if (frm.doc.date < get_today()) {
        msgprint("You can not select past date in From Date");
        validated = false;
    }
});


frappe.ui.form.on("Employee Receipt", {
	refresh: function(frm) {
		var a = frm.doc.total_need_to_pay - frm.doc.payment
		frm.set_value("balance_need_to_pay", a);
		// use the __islocal value of doc, to check if the doc is saved or not
        frm.set_df_property("balance_need_to_pay", "read_only", frm.doc.__islocal ? 1 : 1);
	}
});