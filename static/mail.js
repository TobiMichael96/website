function show_mail(mail) {
    let domain = "tobiasmichael.de"
    let name = "info"

    mail.setAttribute('href', "mailto:" + name + "@" + domain);
}