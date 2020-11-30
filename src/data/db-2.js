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
            changesAtArtist: moment(),
            proofUploaded: true,
            artAtClient: moment(),
            proofApproved: true,
            mapApproved: true,
            mapAttached: true,
            printApproved: true,
            printUploaded: true,
            complete: true,
            proofNumber: 2,
            printNumber: 3,
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
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: {
            changesAtArtist: moment(),
            proofUploaded: true,
            artAtClient: moment(),
            proofApproved: true,
            mapApproved: true,
            mapAttached: true,
            printApproved: true,
            printUploaded: true,
            complete: false,
            proofNumber: 2,
            printNumber: 3,
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
                who: "Finalize",
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
                actionTaken: "Email Client",
                completedBy: "LucasT",
                note: "About mapping approval"
            },
            {
                action: "System",
                who: "Artist",
                what: "Print Review",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Print Approved",
                completedBy: "System",
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
    {
        id: 102,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client C",
        product: "SCRATCHOFF",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 24000,
        mailWeeks: 11,
        acctSpecialist: "LucasT",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: {
            changesAtArtist: moment(),
            proofUploaded: true,
            artAtClient: moment(),
            proofApproved: true,
            mapApproved: true,
            mapAttached: false,
            printApproved: true,
            printUploaded: true,
            complete: false,
            proofNumber: 2,
            printNumber: 3,
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
                who: "Attach",
                what: "Mapping",
                date: moment().add(1, 'day').startOf('day').add(10, 'hours'),
                actionTaken: "",
                completedBy: "",
                note: ""
            },
        ],
        lastActions: [
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
                actionTaken: "Email Client",
                completedBy: "LucasT",
                note: "About mapping approval"
            },
            {
                action: "System",
                who: "Artist",
                what: "Print Review",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Print Approved",
                completedBy: "System",
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
    {
        id: 103,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client D",
        product: "MENU",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 10000,
        mailWeeks: 4,
        acctSpecialist: "LucasT",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: {
            changesAtArtist: moment(),
            proofUploaded: true,
            artAtClient: moment(),
            proofApproved: true,
            mapApproved: false,
            mapAttached: false,
            printApproved: true,
            printUploaded: true,
            complete: false,
            proofNumber: 2,
            printNumber: 3,
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
                action: "Call",
                who: "Client",
                what: "Order",
                date: moment().add(1, 'day').startOf('day').add(11, 'hours'),
                actionTaken: "",
                completedBy: "",
                note: ""
            },
        ],
        lastActions: [
            {
                action: "Email",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Email Client",
                completedBy: "LucasT",
                note: "About mapping approval"
            },
            {
                action: "System",
                who: "Artist",
                what: "Print Review",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Print Approved",
                completedBy: "System",
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
    {
        id: 104,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client E",
        product: "Brochure 10.5x17",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 10000,
        mailWeeks: 4,
        acctSpecialist: "LucasT",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: {
            changesAtArtist: moment(),
            proofUploaded: true,
            artAtClient: moment(),
            proofApproved: true,
            mapApproved: false,
            mapAttached: false,
            printApproved: false,
            printUploaded: false,
            complete: false,
            proofNumber: 2,
            printNumber: 0,
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
                action: "Email",
                who: "Client",
                what: "Order",
                date: moment().add(1, 'day').startOf('day').add(11, 'hours'),
                actionTaken: "",
                completedBy: "",
                note: "About mapping approval"
            },
            {
                action: "System",
                who: "Artist",
                what: "Print Pending",
                date: moment().add(1, 'day').startOf('day').add(11, 'hours'),
                actionTaken: "",
                completedBy: "",
                note: ""
            },
        ],
        lastActions: [
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
    {
        id: 105,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client F",
        product: "Folded Magnet",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 15000,
        mailWeeks: 9,
        acctSpecialist: "LucasT",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: {
            changesAtArtist: moment(),
            proofUploaded: true,
            artAtClient: moment().subtract(1, 'day').startOf('day').add(11, 'hours'),
            proofApproved: false,
            mapApproved: false,
            mapAttached: false,
            printApproved: false,
            printUploaded: false,
            complete: false,
            proofNumber: 2,
            printNumber: 0,
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
                action: "Call",
                who: "Client",
                what: "Order",
                date: moment().add(1, 'day').startOf('day').add(11, 'hours'),
                actionTaken: "",
                completedBy: "",
                note: ""
            },
        ],
        lastActions: [
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
    {
        id: 106,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client G",
        product: "Plastic PC Sm - S",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 9,
        acctSpecialist: "LucasT",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: {
            changesAtArtist: moment(),
            proofUploaded: true,
            artAtClient: undefined,
            proofApproved: false,
            mapApproved: false,
            mapAttached: false,
            printApproved: false,
            printUploaded: false,
            complete: false,
            proofNumber: 2,
            printNumber: 0,
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
                action: "Email",
                who: "Client",
                what: "Order",
                date: moment().add(1, 'day').startOf('day').add(11, 'hours'),
                actionTaken: "",
                completedBy: "",
                note: ""
            },
        ],
        lastActions: [
            
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
    {
        id: 107,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client H",
        product: "MENU",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 10000,
        mailWeeks: 9,
        acctSpecialist: "LucasT",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: {
            changesAtArtist: moment().subtract(1, 'day').startOf('day').add(11, 'hours'),
            proofUploaded: false,
            artAtClient: undefined,
            proofApproved: false,
            mapApproved: false,
            mapAttached: false,
            printApproved: false,
            printUploaded: false,
            complete: false,
            proofNumber: 2,
            printNumber: 0,
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
                who: "Artist",
                what: "Proof Pending",
                date: moment().add(1, 'day').startOf('day').add(11, 'hours'),
                actionTaken: "",
                completedBy: "",
                note: ""
            },
        ],
        lastActions: [
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