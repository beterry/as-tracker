const filterJobs = ({
    jobs,
    filterDateStart,
    filterDateEnd,
    filterSpecialist,
    filterClientType,
    filterProduct,
    hideCompleted,
    filterSearchWord
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
    if (hideCompleted){
        return filteredJobs.filter(job => job.status < 10);
    } else {
        return filteredJobs;
    }
}

export default filterJobs;