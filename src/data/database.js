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
                actionTaken: "Print Posted",
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
        product: "Brochure 10.5x17",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 2,
        acctSpecialist: "LucasT",
        label: "Default",
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
                actionTaken: "Print Posted",
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
        id: 102,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client C",
        product: "POSTCARD",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 2,
        acctSpecialist: "NikieC",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: 8,
        proofs: 2,
        prints: 1,
        lineNumber: 2,
        scheduledTasks: [
            {
                action: "System",
                who: "Attach",
                what: "Mapping",
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
                what: "Mapping",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Map Approved",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "System",
                who: "Approve",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Print Approved",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Print Posted",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art Approved",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art to Client",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Change",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes to Artist",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes Requested",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art to Client",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Brief",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Brief to Artist",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Project Details",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Job Accepted",
                completedBy: "NikieC",
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
        id: 103,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client D",
        product: "POSTCARD",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 2,
        acctSpecialist: "NikieC",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: 6,
        proofs: 2,
        prints: 1,
        lineNumber: 2,
        scheduledTasks: [
            {
                action: "Email",
                who: "Client",
                what: "Mapping",
                date: moment().add(1, 'day').startOf('day').add(10, 'hours'),
                actionTaken: "",
                completedBy: "",
                note: ""
            },
        ],
        lastActions: [
            {
                action: "System",
                who: "Approve",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Print Approved",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Print Posted",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art Approved",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art to Client",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Change",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes to Artist",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes Requested",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art to Client",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Brief",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Brief to Artist",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Project Details",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Job Accepted",
                completedBy: "NikieC",
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
        id: 104,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client E",
        product: "SCRATCHOFF",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 2,
        acctSpecialist: "SaraP",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: 4,
        proofs: 2,
        prints: 1,
        lineNumber: 2,
        scheduledTasks: [
            {
                action: "System",
                who: "Approve",
                what: "Print",
                date: moment().add(1, 'day').startOf('day').add(14, 'hours'),
                actionTaken: "",
                completedBy: "",
                note: ""
            },
        ],
        lastActions: [
            {
                action: "Email",
                who: "Artist",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Print Posted",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art Approved",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art to Client",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Change",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes to Artist",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes Requested",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art to Client",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Brief",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Brief to Artist",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Project Details",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Job Accepted",
                completedBy: "SaraP",
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
        id: 105,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client F",
        product: "POSTCARD",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 2,
        acctSpecialist: "NikieC",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: 4,
        proofs: 2,
        prints: 1,
        lineNumber: 2,
        scheduledTasks: [
            {
                action: "Email",
                who: "Artist",
                what: "Print",
                date: moment().subtract(2, 'hours'),
                actionTaken: "",
                completedBy: "",
                note: ""
            },
        ],
        lastActions: [
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art Approved",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art to Client",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Change",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes to Artist",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes Requested",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art to Client",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Brief",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Brief to Artist",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Project Details",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Job Accepted",
                completedBy: "NikieC",
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
        id: 106,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client G",
        product: "MENU",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 2,
        acctSpecialist: "NikieC",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: 6,
        proofs: 2,
        prints: 1,
        lineNumber: 2,
        scheduledTasks: [
            {
                action: "Email",
                who: "Client",
                what: "Mapping",
                date: moment().add(1, 'hour'),
                actionTaken: "",
                completedBy: "",
                note: ""
            },
        ],
        lastActions: [
            {
                action: "System",
                who: "Approve",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Print Approved",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Print Posted",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art Approved",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art to Client",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Change",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes to Artist",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes Requested",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art to Client",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Brief",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Brief to Artist",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Project Details",
                completedBy: "NikieC",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Job Accepted",
                completedBy: "NikieC",
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
        id: 107,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client H",
        product: "Folded Magnet",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 2,
        acctSpecialist: "SaraP",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: 3,
        proofs: 2,
        prints: 0,
        lineNumber: 2,
        scheduledTasks: [
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment().add(1, 'day').startOf('day').add(8, 'hours'),
                actionTaken: "",
                completedBy: "",
                note: ""
            },
        ],
        lastActions: [
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art to Client",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Change",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes to Artist",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes Requested",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art to Client",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Brief",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Brief to Artist",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Project Details",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Job Accepted",
                completedBy: "SaraP",
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
        quantity: 5000,
        mailWeeks: 2,
        acctSpecialist: "SaraP",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: 2,
        proofs: 2,
        prints: 0,
        lineNumber: 2,
        scheduledTasks: [
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment().add(1, 'day').startOf('day').add(15, 'hours'),
                actionTaken: "",
                completedBy: "",
                note: ""
            },
        ],
        lastActions: [
            {
                action: "Quick Action",
                who: "",
                what: "Proof Uploaded",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Proof Uploaded",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Change",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes to Artist",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes Requested",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art to Client",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Brief",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Brief to Artist",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Project Details",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Job Accepted",
                completedBy: "SaraP",
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
        id: 109,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client J",
        product: "MENU",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 2,
        acctSpecialist: "SaraP",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: 1,
        proofs: 2,
        prints: 0,
        lineNumber: 2,
        scheduledTasks: [
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
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
                what: "Change",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes to Artist",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Changes Requested",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Art to Client",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Email",
                who: "Artist",
                what: "Brief",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Brief to Artist",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Project Details",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Job Accepted",
                completedBy: "SaraP",
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
        id: 110,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client K",
        product: "Plastic PC Sm - S",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 2,
        acctSpecialist: "SaraP",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: 1,
        proofs: 0,
        prints: 0,
        lineNumber: 2,
        scheduledTasks: [
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment().add(1, 'day').startOf('day').add(7, 'hours'),
                actionTaken: "",
                completedBy: "",
                note: ""
            },
        ],
        lastActions: [
            {
                action: "Email",
                who: "Artist",
                what: "Brief",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Brief to Artist",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Project Details",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Job Accepted",
                completedBy: "SaraP",
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
        id: 111,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client L",
        product: "POSTCARD",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 2,
        acctSpecialist: "SaraP",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: 0,
        proofs: 0,
        prints: 0,
        lineNumber: 2,
        scheduledTasks: [
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment().add(1, 'day').startOf('day').add(13, 'hours'),
                actionTaken: "",
                completedBy: "SaraP",
                note: ""
            },
        ],
        lastActions: [
                       
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Job Accepted",
                completedBy: "SaraP",
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
        id: 112,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client M",
        product: "SCRATCHOFF",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 2,
        acctSpecialist: "SaraP",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: 0,
        proofs: 0,
        prints: 0,
        lineNumber: 2,
        scheduledTasks: [
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment().add(1, 'day').startOf('day').add(10, 'hours'),
                actionTaken: "",
                completedBy: "",
                note: ""
            },
        ],
        lastActions: [                      
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
        id: 113,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client N",
        product: "POSTCARD",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 2,
        acctSpecialist: "TarrynH",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: 0,
        proofs: 0,
        prints: 0,
        lineNumber: 2,
        scheduledTasks: [
            {
                action: "System",
                who: "Assign",
                what: "Order",
                date: moment().add(1, 'day').startOf('day').add(8, 'hours'),
                actionTaken: "",
                completedBy: "TarrynH",
                note: ""
            },
        ],
        lastActions: [                      
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

    // --------------- MONTHLY ---------------

    {
        id: 114,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client O",
        product: "NEW MOVERS POSTCARD",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 2,
        acctSpecialist: "SaraP",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: 1,
        proofs: 0,
        prints: 0,
        lineNumber: 2,
        scheduledTasks: [
            {
                action: "Email",
                who: "Client",
                what: "Artwork",
                date: moment().subtract(1, "hours"),
                actionTaken: "",
                completedBy: "",
                note: ""
            },
        ],
        lastActions: [
            {
                action: "Email",
                who: "Artist",
                what: "Brief",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Brief to Artist",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Project Details",
                completedBy: "SaraP",
                note: ""
            },
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Job Accepted",
                completedBy: "SaraP",
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
        id: 115,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client P",
        product: "BirthdayPC",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 2,
        acctSpecialist: "SaraP",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: 0,
        proofs: 0,
        prints: 0,
        lineNumber: 2,
        scheduledTasks: [
            {
                action: "Call",
                who: "Client",
                what: "Artwork",
                date: moment().add(1, 'day').startOf('day').add(9, 'hours'),
                actionTaken: "",
                completedBy: "SaraP",
                note: ""
            },
        ],
        lastActions: [
                       
            {
                action: "System",
                who: "Accept",
                what: "Order",
                date: moment('2020-11-08 14:30'),
                actionTaken: "Job Accepted",
                completedBy: "SaraP",
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
        id: 116,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client Q",
        product: "NEW MOVERS PLASTIC",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 2,
        acctSpecialist: "LucasT",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: 0,
        proofs: 0,
        prints: 0,
        lineNumber: 2,
        scheduledTasks: [
            {
                action: "System",
                who: "Accept",
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
        id: 117,
        push: 0,
        group: "J",
        code: 28062,
        timezone: -2,
        company: "Client R",
        product: "NEW MOVERS POSTCARD",
        address: "19622 Middlebelt Rd, Livonia, MI 48152",
        version: undefined,
        options: [],
        quantity: 5000,
        mailWeeks: 2,
        acctSpecialist: "TarrynH",
        label: "Default",
        artDue: moment().add(10, 'days'),
        note: 'Do NOT call client on Mondays, he will shoot you!',
        status: 0,
        proofs: 0,
        prints: 0,
        lineNumber: 2,
        scheduledTasks: [
            {
                action: "System",
                who: "Assign",
                what: "Order",
                date: moment().add(1, 'day').startOf('day').add(10, 'hours'),
                actionTaken: "",
                completedBy: "TarrynH",
                note: ""
            },
        ],
        lastActions: [                      
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