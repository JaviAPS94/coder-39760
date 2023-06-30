export default class ContactDto {
    // {
    //     name: "alex",
    //     lastname: "pinaida",
    //     phone: '45646'
    // }
    // {
    //     name: "alex pinaida",
    //     phone: '45646689'
    // }
    constructor(contact) {
        this.name = `${contact.name} ${contact.lastname}`
        this.phone =  contact.phone ? contact.phone.split('-').join('') : '';
    }
}