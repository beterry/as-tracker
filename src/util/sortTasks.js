const sortTasks = (sortBy, tasks, sortDirection) => {
    const sortedTasks = tasks;

    if (tasks.length > 1){

        if (sortBy === "action"){
            if (sortDirection){
                sortedTasks.sort((a,b) => compareStringDesc(a.action, b.action))
            } else{
                sortedTasks.sort((a,b) => compareStringAsc(a.action, b.action))
            }
        } else if (sortBy === "who"){
            if (sortDirection){
                sortedTasks.sort((a,b) => compareStringDesc(a.who, b.who))
            } else{
                sortedTasks.sort((a,b) => compareStringAsc(a.who, b.who))
            }
        } else if (sortBy === "what"){
            if (sortDirection){
                sortedTasks.sort((a,b) => compareStringDesc(a.what, b.what))
            } else{
                sortedTasks.sort((a,b) => compareStringAsc(a.what, b.what))
            }
        } else if (sortBy === "actionTaken"){
            if (sortDirection){
                sortedTasks.sort((a,b) => compareStringDesc(a.actionTaken, b.actionTaken))
            } else{
                sortedTasks.sort((a,b) => compareStringAsc(a.actionTaken, b.actionTaken))
            }
        } else if (sortBy === "completedBy"){
            if (sortDirection){
                sortedTasks.sort((a,b) => compareStringDesc(a.completedBy, b.completedBy))
            } else{
                sortedTasks.sort((a,b) => compareStringAsc(a.completedBy, b.completedBy))
            }
        //default case
        } else {
            sortedTasks.sort((a,b) => {
                if (sortDirection){
                    return compareDatesAsc(a.date, b.date)
                } else {
                    return compareDatesDesc(a.date, b.date)
                }
            })
        }
    };

    return sortedTasks;
}

const compareStringDesc = (a, b) => {
    let stringA = a.toUpperCase();
    let stringB = b.toUpperCase();
    if (stringA < stringB) {
        return -1;
    } else if (stringA > stringB) {
        return 1;
    } else {
        return 0;
    }
}

const compareStringAsc = (a, b) => {
    let stringA = a.toUpperCase();
    let stringB = b.toUpperCase();
    if (stringA < stringB) {
        return 1;
    } else if (stringA > stringB) {
        return -1;
    } else {
        return 0;
    }
}

const compareDatesDesc = (a, b) => {
    if (a.isBefore(b)){
        return -1;
    } else if (b.isBefore(a)){
        return 1;
    } else {
        return 0;
    }
}

const compareDatesAsc = (a, b) => {
    if (a.isBefore(b)){
        return 1;
    } else if (b.isBefore(a)){
        return -1;
    } else {
        return 0;
    }
}

export default sortTasks;