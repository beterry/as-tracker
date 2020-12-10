const filterJobs = ({
    jobs,
    filterDateStart,
    filterDateEnd,
    filterSpecialist,
    filterClientLabel,
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
            (filterClientLabel.includes(job.label)) &&
            (job.product === filterProduct || filterProduct === "all") &&
            companyName.includes(word)
        )
    })

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

    if (hideCompleted){
        return filteredJobs.filter(job => !job.status.complete);
    } else {
        return filteredJobs;
    }
}

export default filterJobs;