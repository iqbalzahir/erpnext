from __future__ import unicode_literals
from frappe import _
from frappe.desk.moduleview import add_setup_section

def get_data():
	data = [
		{
			"label": _("Settings"),
			"icon": "fa fa-wrench",
			"items": [
				{
					"type": "doctype",
					"name": "Global Defaults",
					"label": _("Global Settings"),
					"description": _("Set Default Values like Company, Currency, Current Fiscal Year, etc."),
					"hide_count": True
				}
			]
		},
		{
			"label": _("Printing"),
			"icon": "fa fa-print",
			"items": [
				{
					"type": "doctype",
					"name": "Letter Head",
					"description": _("Letter Heads for print templates.")
				},
				{
					"type": "doctype",
					"name": "Print Heading",
					"description": _("Titles for print templates e.g. Proforma Invoice.")
				},
				{
					"type": "doctype",
					"name": "Address Template",
					"description": _("Country wise default Address Templates")
				},
				{
					"type": "doctype",
					"name": "Terms and Conditions",
					"description": _("Standard contract terms for Sales or Purchase.")
				},
			]
		},
		{
			"label": _("Customize"),
			"icon": "fa fa-glass",
			"items": [
				{
					"type": "doctype",
					"name": "Authorization Rule",
					"description": _("Create rules to restrict transactions based on values.")
				},
				{
					"type": "doctype",
					"name": "Notification Control",
					"label": _("Email Notifications"),
					"description": _("Automatically compose message on submission of transactions.")
				}
			]
		},
		{
			"label": _("Email"),
			"icon": "fa fa-envelope",
			"items": [
				{
					"type": "doctype",
					"name": "Feedback Trigger",
					"label": _("Feedback Trigger"),
					"description": _("Automatically triggers the feedback request based on conditions.")
				},
				{
					"type": "doctype",
					"name": "Email Digest",
					"description": _("Create and manage daily, weekly and monthly email digests.")
				},
				{
					"type": "doctype",
					"name": "SMS Settings",
					"description": _("Setup SMS gateway settings")
				},
			]
		}
	]

	for module, label, icon in (
		("accounts", _("Accounts"), "fa fa-money"),
		("stock", _("Stock"), "fa fa-truck"),
		("selling", _("Selling"), "fa fa-tag"),
		("buying", _("Buying"), "fa fa-shopping-cart"),
		("hr", _("Human Resources"), "fa fa-group"),
		("support", _("Support"), "fa fa-phone")):

		add_setup_section(data, "erpnext", module, label, icon)

	return data
