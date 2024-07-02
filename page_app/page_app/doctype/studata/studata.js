// Copyright (c) 2024, armaan and contributors
// For license information, please see license.txt

frappe.ui.form.on("studata", {
	refresh(frm) {
        frm.add_custom_button("Add Studies", () => {
            let d = new frappe.ui.Dialog({
                title: 'Enter details',
                "fields": [
                    {
                        "fieldname": "class",
                        "fieldtype": "Select",
                        "in_list_view": 1,
                        "label": "Class",
                        "options": "10th\n12th\ndegree"
                       },
                       {
                        "fieldname": "percentage",
                        "fieldtype": "Int",
                        "in_list_view": 1,
                        "label": "Percentage"
                       }
                ],
                size: 'small',
                primary_action_label: 'Add',
                primary_action(values) {
                    console.log(values);
                    var row = cur_frm.add_child('studies');
                    for (var key in values) {
                        if (values.hasOwnProperty(key)) {
                            row[key] = values[key];
                        }
                    }
                    cur_frm.refresh_field('studaies');
                    frm.save().then(() => { frappe.msgprint("added succesfully") }).catch((err)=>{frape.msgprint("an error while saving"+err)})
                    d.hide();
                }
            });

            d.show();

        })
	}
});
