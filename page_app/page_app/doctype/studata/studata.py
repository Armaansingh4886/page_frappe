# Copyright (c) 2024, armaan and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class studata(Document):
	def after_insert(self):
		frappe.sendmail(recipients={self.email},subject="new account created ",message=f"new account created {self.name1}",delayed=False)
