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
        label: "No Label",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: {
            changesAtArtist: moment(), //1
            proofUploaded: true, //2
            artAtClient: moment(), //3
            proofApproved: true, //4
            mapApproved: true, //7
            mapAttached: true, //8
            printApproved: true, //5
            printUploaded: true, //6
            complete: true, //9
            proofNumber: 2,
            printNumber: 3,
            code: 9,
        },
        printOnly: false,
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
                completedBy: "LucasT",
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
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
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
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Order Accepted",
                completedBy: "LucasT",
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
        acctSpecialist: "Sara P",
        label: "No Label",
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
            code: 8,
        },
        printOnly: false,
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
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Email Client",
                completedBy: "SaraP",
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
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "System",
                who: "Artist",
                what: "Proof Review",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "SaraP",
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
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Email Client",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Order Accepted",
                completedBy: "SaraP",
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
        company: "Joe's Pizza - Main St",
        product: "SCRATCHOFF",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 24000,
        mailWeeks: 11,
        acctSpecialist: "NikieC",
        label: "Joe's Pizza",
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
            code: 7,
        },
        printOnly: false,
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
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Email Client",
                completedBy: "NikieC",
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
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "System",
                who: "Artist",
                what: "Proof Review",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "NikieC",
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
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Email Client",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Order Accepted",
                completedBy: "NikieC",
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
        acctSpecialist: "SaraP",
        label: "No Label",
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
            code: 6,
        },
        printOnly: false,
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
                completedBy: "SaraP",
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
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "System",
                who: "Artist",
                what: "Proof Review",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "SaraP",
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
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Email Client",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Order Accepted",
                completedBy: "SaraP",
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
        label: "No Label",
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
            code: 4,
        },
        printOnly: false,
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
                date: moment().add(1, 'day').startOf('day').add(13, 'hours'),
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
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
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
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Order Accepted",
                completedBy: "LucasT",
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
        acctSpecialist: "NikieC",
        label: "No Label",
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
            code: 3,
        },
        printOnly: false,
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
                date: moment().subtract(1, 'hours'),
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
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "System",
                who: "Artist",
                what: "Proof Review",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "NikieC",
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
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Email Client",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Order Accepted",
                completedBy: "NikieC",
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
        id: 115,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client F-a",
        product: "Folded Magnet",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 15000,
        mailWeeks: 9,
        acctSpecialist: "NikieC",
        label: "No Label",
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
            code: 3,
        },
        printOnly: true,
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
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "System",
                who: "Artist",
                what: "Proof Review",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "NikieC",
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
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Email Client",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Order Accepted",
                completedBy: "NikieC",
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
        label: "No Label",
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
            code: 2,
        },
        printOnly: false,
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
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
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
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Order Accepted",
                completedBy: "LucasT",
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
        company: "Joe's Pizza - Oak St",
        product: "MENU",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 10000,
        mailWeeks: 9,
        acctSpecialist: "LucasT",
        label: "Joe's Pizza",
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
            code: 1,
        },
        printOnly: false,
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
                completedBy: "LucasT",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Task Complete",
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
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Order Accepted",
                completedBy: "LucasT",
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
        id: 108,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client I",
        product: "POSTCARD",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 10000,
        mailWeeks: 9,
        acctSpecialist: "SaraP",
        label: "No Label",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: {
            changesAtArtist: undefined,
            proofUploaded: false,
            artAtClient: undefined,
            proofApproved: false,
            mapApproved: false,
            mapAttached: false,
            printApproved: false,
            printUploaded: false,
            complete: false,
            proofNumber: 0,
            printNumber: 0,
            code: 0,
        },
        printOnly: false,
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
                who: "Artist",
                what: "Order",
                date: moment().add(1, 'day').startOf('day').add(13, 'hours'),
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
                actionTaken: "Task Complete",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Email Client",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Order Accepted",
                completedBy: "SaraP",
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
        id: 109,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client J",
        product: "SCRATCHOFF",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 10000,
        mailWeeks: 9,
        acctSpecialist: "SaraP",
        label: "No Label",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: {
            changesAtArtist: undefined,
            proofUploaded: false,
            artAtClient: undefined,
            proofApproved: false,
            mapApproved: false,
            mapAttached: false,
            printApproved: false,
            printUploaded: false,
            complete: false,
            proofNumber: 0,
            printNumber: 0,
            code: 0,
        },
        printOnly: false,
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
                date: moment().add(1, 'day').startOf('day').add(14, 'hours'),
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
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Order Accepted",
                completedBy: "SaraP",
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
        id: 110,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client K",
        product: "POSTCARD",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 15000,
        mailWeeks: 11,
        acctSpecialist: "LucasT",
        label: "No Label",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: {
            changesAtArtist: undefined,
            proofUploaded: false,
            artAtClient: undefined,
            proofApproved: false,
            mapApproved: false,
            mapAttached: false,
            printApproved: false,
            printUploaded: false,
            complete: false,
            proofNumber: 0,
            printNumber: 0,
            code: 0,
        },
        printOnly: false,
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
                date: moment().add(1, 'day').startOf('day').add(14, 'hours'),
                actionTaken: "",
                completedBy: "",
                note: ""
            },
        ],
        lastActions: [
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Order Accepted",
                completedBy: "LucasT",
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
        id: 111,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Joe's Pizza - Shillington",
        product: "Plastic PC Sm - S",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 11,
        acctSpecialist: "LucasT",
        label: "Joe's Pizza",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: {
            changesAtArtist: undefined,
            proofUploaded: false,
            artAtClient: undefined,
            proofApproved: false,
            mapApproved: false,
            mapAttached: false,
            printApproved: false,
            printUploaded: false,
            complete: false,
            proofNumber: 0,
            printNumber: 0,
            code: 0,
        },
        printOnly: false,
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
                date: moment().add(1, 'day').startOf('day').add(14, 'hours'),
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

// ------------------------- MONTHLY -----------------------------

    {
        id: 112,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client M",
        product: "NEW MOVERS POSTCARD",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 10000,
        mailWeeks: 9,
        acctSpecialist: "NikieC",
        label: "No Label",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: {
            changesAtArtist: undefined,
            proofUploaded: false,
            artAtClient: undefined,
            proofApproved: false,
            mapApproved: false,
            mapAttached: false,
            printApproved: false,
            printUploaded: false,
            complete: false,
            proofNumber: 0,
            printNumber: 0,
            code: 0,
        },
        printOnly: false,
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
                date: moment().add(1, 'day').startOf('day').add(14, 'hours'),
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
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Order Accepted",
                completedBy: "NikieC",
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
        id: 113,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client N",
        product: "BirthdayPC",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 4,
        acctSpecialist: "LucasT",
        label: "No Label",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: {
            changesAtArtist: undefined,
            proofUploaded: false,
            artAtClient: undefined,
            proofApproved: false,
            mapApproved: false,
            mapAttached: false,
            printApproved: false,
            printUploaded: false,
            complete: false,
            proofNumber: 0,
            printNumber: 0,
            code: 0,
        },
        printOnly: false,
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
                date: moment().add(1, 'day').startOf('day').add(14, 'hours'),
                actionTaken: "",
                completedBy: "",
                note: ""
            },
        ],
        lastActions: [
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-24T08:30'),
                actionTaken: "Order Accepted",
                completedBy: "LucasT",
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
        id: 114,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client P",
        product: "NEW MOVERS PLASTIC",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 4,
        acctSpecialist: "LucasT",
        label: "No Label",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: {
            changesAtArtist: undefined,
            proofUploaded: false,
            artAtClient: undefined,
            proofApproved: false,
            mapApproved: false,
            mapAttached: false,
            printApproved: false,
            printUploaded: false,
            complete: false,
            proofNumber: 0,
            printNumber: 0,
            code: 0,
        },
        printOnly: false,
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
                date: moment().add(1, 'day').startOf('day').add(14, 'hours'),
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

    //----------------- BOX TOPPERS --------------------

    {
        id: 116,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client Q",
        product: "BOX TOPPERS",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 4,
        acctSpecialist: "LucasT",
        label: "No Label",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: {
            changesAtArtist: undefined,
            proofUploaded: false,
            artAtClient: undefined,
            proofApproved: false,
            mapApproved: false,
            mapAttached: false,
            printApproved: false,
            printUploaded: false,
            complete: false,
            proofNumber: 0,
            printNumber: 0,
            code: 0,
        },
        printOnly: false,
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
                date: moment().add(1, 'day').startOf('day').add(14, 'hours'),
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