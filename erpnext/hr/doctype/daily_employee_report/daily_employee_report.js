// Copyright (c) 2017, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt


frappe.ui.form.on("Daily Employee Report", {
    refresh: function(frm) {
        frm.set_df_property("description", "read_only", frm.doc.__islocal ? 0 : 1);
		frm.set_df_property("status", "read_only", frm.doc.__islocal ? 0 : 1);
	}
});

// additional validation on dates
frappe.ui.form.on("Daily Employee Report", "validate", function(frm) {
    if (frm.doc.date < get_today()) {
        msgprint("You can not select past date in Date");
        validated = false;
    }
});