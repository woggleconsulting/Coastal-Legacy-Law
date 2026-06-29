function checkIntakeButton()
{
    var maritalStatus = ZDK.Page.getField("Marital_Status").getValue();
    var spousePartner = ZDK.Page.getField("Spouse_Partner").getValue();

    if (
        (maritalStatus === "Married" || maritalStatus === "Domestic Partnership/Civil Union") &&
        (!spousePartner || !spousePartner.id)
    )
    {
        var kiosk_btn = ZDK.Page.getButtonByID("6994809000005180787");
        if(kiosk_btn){
            kiosk_btn.click();
        }
    }
}

checkIntakeButton();
