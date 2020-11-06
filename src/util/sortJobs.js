const sortJobs = (sortBy, jobs, sortDirection) => {
    const sortedJobs = jobs;
    if (sortBy === "lastAction"){
        if (sortDirection){
            sortedJobs.sort((a,b) => compareDatesDesc(a.lastActions[0].date, b.lastActions[0].date))
        } else{
            sortedJobs.sort((a,b) => compareDatesAsc(a.lastActions[0].date, b.lastActions[0].date))
        }
    } else if (sortBy === "company"){
        if (sortDirection){
            sortedJobs.sort((a,b) => compareStringDesc(a.company, b.company))
        } else{
            sortedJobs.sort((a,b) => compareStringAsc(a.company, b.company))
        }
    } else if (sortBy === "push"){
        if (sortDirection){
            sortedJobs.sort((a,b) => a.push - b.push)
        } else{
            sortedJobs.sort((a,b) => b.push - a.push)
        }
    } else if (sortBy === "group"){
        if (sortDirection){
            sortedJobs.sort((a,b) => compareStringDesc(a.group, b.group))
        } else{
            sortedJobs.sort((a,b) => compareStringAsc(a.group, b.group))
        }
    } else if (sortBy === "timezone"){
        if (sortDirection){
            sortedJobs.sort((a,b) => a.timezone - b.timezone)
        } else{
            sortedJobs.sort((a,b) => b.timezone - a.timezone)
        }
    } else if (sortBy === "code"){
        if (sortDirection){
            sortedJobs.sort((a,b) => a.code - b.code)
        } else{
            sortedJobs.sort((a,b) => b.code - a.code)
        }
    } else if (sortBy === "product"){
        if (sortDirection){
            sortedJobs.sort((a,b) => compareStringDesc(a.product, b.product))
        } else{
            sortedJobs.sort((a,b) => compareStringAsc(a.product, b.product))
        }
    } else if (sortBy === "quantity"){
        if (sortDirection){
            sortedJobs.sort((a,b) => a.quantity - b.quantity)
        } else{
            sortedJobs.sort((a,b) => b.quantity - a.quantity)
        }
    } else if (sortBy === "weeks"){
        if (sortDirection){
            sortedJobs.sort((a,b) => a.mailWeeks - b.mailWeeks)
        } else{
            sortedJobs.sort((a,b) => b.mailWeeks - a.mailWeeks)
        }
    } else if (sortBy === "specialist"){
        if (sortDirection){
            sortedJobs.sort((a,b) => compareStringDesc(a.acctSpecialist, b.acctSpecialist))
        } else{
            sortedJobs.sort((a,b) => compareStringAsc(a.acctSpecialist, b.acctSpecialist))
        }
    //default case
    } else {
        if (sortDirection){
            sortedJobs.sort((a,b) => compareDatesDesc(a.scheduledTasks[0].date, b.scheduledTasks[0].date))
        } else{
            sortedJobs.sort((a,b) => compareDatesAsc(a.scheduledTasks[0].date, b.scheduledTasks[0].date))
        }
    }
    return sortedJobs;
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

export default sortJobs;