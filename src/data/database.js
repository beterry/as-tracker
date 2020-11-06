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
        artDue: moment().add(10, 'days').calendar(),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        scheduledTasks: [
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "",
                note: ""
            },
        ],
        lastActions: [
            {
                action: "System",
                who: "Client",
                what: "New Order",
                date: moment('2020-11-05 09:30'),
                actionTaken: "Order Accepted",
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
        artDue: moment().add(10, 'days').calendar(),
        note: '',
        scheduledTasks: [
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-07 10:30'),
                actionTaken: "",
                note: ""
            },
        ],
        lastActions: [
            {
                action: "System",
                who: "Client",
                what: "New Order",
                date: moment('2020-11-07 08:30'),
                actionTaken: "Order Accepted",
                note: ""
            },
        ],
    },
];

export default database;