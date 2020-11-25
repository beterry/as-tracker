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
            changesAtArtist: undefined,
            proofUploaded: 0,
            artAtClient: undefined,
            proofApproved: true,
            mapApproved: false,
            mapAttached: true,
            printApproved: false,
            printUploaded: 2,
            complete: true,
        },
        lineNumber: 2,
        contacts: [
            {
                name: "John Doe",
                phone: "+1 (999)999-9999",
                email: "jdoe@companyname.com"
            }
        ],
        scheduledTasks: [],
        lastActions: [
            {
                action: "System",
                who: "Finalize",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Order Completed",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "System",
                who: "Attach",
                what: "Mapping",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "System",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Map Approved",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "System",
                who: "Artist",
                what: "Print Review",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "System",
                who: "Artist",
                what: "Print Pending",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "System",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Proof Approved",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "System",
                who: "Artist",
                what: "Proof Review",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "System",
                who: "Artist",
                what: "Proof Pending",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "System",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Changes to Artist",
                completedBy: "LucusT",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Order",
                date: moment().add(1, 'day').startOf('day').add(9, 'hours'),
                actionTaken: "Task Complete",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "System",
                who: "Artist",
                what: "Proof Review",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "System",
                who: "Artist",
                what: "Proof Pending",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "System",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Brief to Artist",
                completedBy: "LucusT",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "LucusT",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Email Client",
                completedBy: "LucusT",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Order Accepted",
                completedBy: "LucusT",
                note: ""
            },
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