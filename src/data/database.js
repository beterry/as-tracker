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
        label: undefined,
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: 1,
        proofs: 1,
        prints: 1,
        lineNumber: 2,
        scheduledTasks: [
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "",
                note: ""
            },
        ],
        lastActions: [
            
            {
                action: "Email",
                who: "Artist",
                what: "Change",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes to Artist",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes Requested",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art to Client",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Brief",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Brief to Artist",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "New Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Complete",
                note: ""
            },
            {
                action: "System",
                who: "",
                what: "Accept Order",
                date: moment('2020-11-08 14:30'),
                //what should this action be when completed
                actionTaken: "Complete",
                note: ""
            },
            {
                action: "System",
                who: "",
                what: "New Order",
                date: moment('2020-11-08 14:30'),
                //what should this action be
                actionTaken: "Complete",
                note: ""
            },
        ],
    },
    {
        id: 101,
        push: 2,
        group: "G",
        code: 28062,
        timezone: -2,
        company: "Client B",
        product: "POSTCARD",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 10000,
        mailWeeks: 2,
        acctSpecialist: "TarrynH",
        label: undefined,
        artDue: moment().add(10, 'days'),
        note: '',
        status: 0,
        proofs: 1,
        prints: 1,
        lineNumber: 1,
        scheduledTasks: [
            {
                action: "System",
                who: "",
                what: "Accept Order",
                date: moment('2020-11-08 14:30'),
                //what should this action be when completed
                actionTaken: "",
                note: ""
            },
        ],
        lastActions: [
            {
                action: "System",
                who: "",
                what: "New Order",
                date: moment('2020-11-08 14:30'),
                //what should this action be when completed
                actionTaken: "Order Created",
                note: ""
            },
        ],
    },
];

export default database;