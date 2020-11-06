import moment from 'moment';

const database = [
    {
        id: 100,
        push: 2,
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
                date: moment(),
                actionTaken: "",
                note: ""
            },
        ],
        lastActions: [
            {
                action: "System",
                who: "Client",
                what: "New Order",
                date: moment(),
                actionTaken: "Order Accepted",
                note: ""
            },
        ],
    },
    {
        id: 101,
        push: 2,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client B",
        product: "POSTCARD",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 2,
        acctSpecialist: "LucasT",
        label: undefined,
        artDue: moment().add(10, 'days').calendar(),
        note: '',
        scheduledTasks: [
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment(),
                actionTaken: "",
                note: ""
            },
        ],
        lastActions: [
            {
                action: "System",
                who: "Client",
                what: "New Order",
                date: moment(),
                actionTaken: "Order Accepted",
                note: ""
            },
        ],
    },
];

export default database;