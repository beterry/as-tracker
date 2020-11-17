const filterJobs = ({
    jobs,
    filterDateStart,
    filterDateEnd,
    filterSpecialist,
    filterClientType,
    filterProduct,
    hideCompleted,
    filterSearchWord,
    tab,
}) => {
    let filteredJobs = jobs.filter((job) => {
        const companyName = job.company.toUpperCase();
        const word = filterSearchWord.toUpperCase();
        return (
            job.artDue.isBefore(filterDateEnd) &&
            job.artDue.isAfter(filterDateStart) &&
            (job.acctSpecialist === filterSpecialist || filterSpecialist === "all") &&
            (job.label === filterClientType || filterClientType === "all") &&
            (job.product === filterProduct || filterProduct === "all") &&
            companyName.includes(word)
        )
    })

    if(tab === "Monthly"){
        filteredJobs = filteredJobs.filter(job => 
            job.product === "NEW MOVERS POSTCARD" ||
            job.product === "BirthdayPC" ||
            job.product === "NEW MOVERS PLASTIC"
        )
    } else {
        filteredJobs = filteredJobs.filter(job => 
            job.product !== "NEW MOVERS POSTCARD" &&
            job.product !== "BirthdayPC" &&
            job.product !== "NEW MOVERS PLASTIC"
        )
    }

    if (hideCompleted){
        return filteredJobs.filter(job => job.status < 10);
    } else {
        return filteredJobs;
    }
}

export default filterJobs;