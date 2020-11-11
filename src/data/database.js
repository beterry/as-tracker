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
        status: 10,
        proofs: 2,
        prints: 1,
        lineNumber: 2,
        scheduledTasks: [],
        lastActions: [
            {
                action: "System",
                who: "Finalize",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Job Completed",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "System",
                who: "Attach",
                what: "Mapping",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Map Attached",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Mapping",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Map Approved",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "System",
                who: "Approve",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Print Approved",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Upload Requested",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art Approved",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art to Client",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Change",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes to Artist",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes Requested",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art to Client",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Brief",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Brief to Artist",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Project Details",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Job Accepted",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "System",
                who: "Assign",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Assigned Order",
                completedBy: "TarrynH",
                note: ""
            },
            {
                action: "System",
                who: "Created",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Order Created",
                completedBy: "System",
                note: ""
            },
        ],
    },
    {
        id: 101,
        push: 0,
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
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: 9,
        proofs: 2,
        prints: 1,
        lineNumber: 2,
        scheduledTasks: [
            {
                action: "System",
                who: "Finalize",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "",
                completedBy: "",
                note: ""
            },
        ],
        lastActions: [
            {
                action: "System",
                who: "Attach",
                what: "Mapping",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Map Attached",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Mapping",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Map Approved",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "System",
                who: "Approve",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Print Approved",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Upload Requested",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art Approved",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art to Client",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Change",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes to Artist",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes Requested",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art to Client",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Brief",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Brief to Artist",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Project Details",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Job Accepted",
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "System",
                who: "Assign",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Assigned Order",
                completedBy: "TarrynH",
                note: ""
            },
            {
                action: "System",
                who: "Created",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Order Created",
                completedBy: "System",
                note: ""
            },
        ],
    },
];

export default database;