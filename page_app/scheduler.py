import frappe

@frappe.whitelist()
def task():
    schedules = frappe.get_all('scheduler',filters={})

    for schedule in schedules:
        doc = frappe.get_doc("scheduler",schedule.name)
        doc.counter = doc.counter+1
        doc.save()
        frappe.db.commit()
        return doc.counter
    print("hessssssssssssssssss")
    frappe.enqueue('scheduler.task', queue='long', timeout=1, is_async=True)