function show_mail(mail) {
    let domain = "tobiasmichael.de"
    let name = "me"

    mail.setAttribute('href', "mailto:" + name + "@" + domain);
}