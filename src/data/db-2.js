import moment from 'moment';

const database = [
    {
        id: 100,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client A",
        product: "POSTCARD",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 2,
        acctSpecialist: "LucasT",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: {
            changesAtArtist: null,
            proofUploaded: 0,
            artAtClient: null,
            proofApproved: false,
            mapApproved: false,
            mapAttached: false,
            printApproved: false,
            printUploaded: 0,
            complete: false,
        },
        lineNumber: 2,
        contacts: [
            {
                name: "John Doe",
                phone: "+1 (999)999-9999",
                email: "jdoe@companyname.com"
            }
        ],
        scheduledTasks: [
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment().add(1, 'day').startOf('day').add(9, 'hours'),
                actionTaken: "",
                completedBy: "",
                note: ""
            },
        ],
        lastActions: [
            {
                action: "System",
                who: "Pending",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Order Assigned",
                completedBy: "TarrynH",
                note: ""
            },
        ],
    },
];

export default database;