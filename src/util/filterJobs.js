const filterJobsMain = (filters, jobs) => {

    //get filters from props
    const {
        filterDateStart,
        filterDateEnd,
        filterSpecialist,
        filterProduct,
        hideCompleted,
        filterSearchWord,
    } = filters;

    let filteredJobs = jobs.filter((job) => {
        const companyName = job.company.toUpperCase();
        const word = filterSearchWord.toUpperCase();
        return (
            job.artDue.isBefore(filterDateEnd) &&
            job.artDue.isAfter(filterDateStart) &&
            (job.acctSpecialist === filterSpecialist || filterSpecialist === "all") &&
            (job.product === filterProduct || filterProduct === "all") &&
            companyName.includes(word)
        )
    })

    if (hideCompleted){
        return filteredJobs.filter(job => !job.status.complete);
    } else {
        return filteredJobs;
    }
}

const filterJobsTab = (filters, jobs) => {
    const {tab} = filters;
    let filteredJobs = jobs;

    if(tab === "Box Toppers"){
        filteredJobs = filteredJobs.filter(job => 
            job.product === "BOX TOPPERS"
        )
    } else if(tab === "Monthly"){
        filteredJobs = filteredJobs.filter(job => 
            job.product === "NEW MOVERS POSTCARD" ||
            job.product === "BirthdayPC" ||
            job.product === "NEW MOVERS PLASTIC"
        )
    } else {
        filteredJobs = filteredJobs.filter(job => 
            job.product !== "NEW MOVERS POSTCARD" &&
            job.product !== "BirthdayPC" &&
            job.product !== "NEW MOVERS PLASTIC" &&
            job.product !== "BOX TOPPERS"
        )
    }

    return filteredJobs;
}

const filterJobsLabel = (filters, jobs) => {
    const {filterClientLabel} = filters;
    let filteredJobs = jobs;

    filteredJobs = jobs.filter((job) => filterClientLabel.includes(job.label));

    return filteredJobs;
}

const filterJobsAll = (state) => {
    const filteredByTab = filterJobsTab(state, state.jobs);
    const filteredByMain = filterJobsMain(state, filteredByTab);
    const filteredByLabel = filterJobsLabel(state, filteredByMain);

    return filteredByLabel;
}

export {filterJobsMain, filterJobsTab, filterJobsLabel, filterJobsAll};