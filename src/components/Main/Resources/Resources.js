 import React, {useState} from 'react';
import style from "./Resources.module.css";
import Resource from "./Resource/Resource";

const Resources = () => {
    let [resourses] = useState([
        {
            name: "ACLU",
            url: "https://www.aclu.org/",
            message: "\"The ACLU dares to create a more perfect union — beyond one person, party, or side.\""
        },
        {
            name: "USCIS",
            url: "https://www.uscis.gov/",
            message: "U.S. Citizenship and Immigration Services (USCIS) is the federal agency that oversees lawful immigration to the United States."
        },
        {
            name: "NATIONAL VISA CENTER",
            url: "https://travel.state.gov/",
            message: "U.S. Department of STATE - BUREAU of CONSULAR AFFAIRS"
        },
        {
            name: "BOUNDLESS",
            url: "https://www.boundless.com/",
            message: "\"Our service gives you an immigration lawyer, lets you file online — all while saving you thousands in fees.\""
        },
        {
            name: "NATIONAL IMMIGRATION FORUM",
            url: "https://immigrationforum.org/",
            message: "\"Founded in 1982, the National Immigration Forum advocates for the value of immigrants and immigration to our nation.\""
        },
        {
            name: "REGISTER TO VOTE",
            url: "https://vote.gov/",
            message: "As a citizen, it is your to vote."
        }
    ]);
    return (
        <div className={style.ResourcesContainer}>
            <h1 className={style.Header}>Resources</h1>
            <hr className={style.Divider}/>
            {resourses.map(resource => (
                <Resource
                    key={resource.name}
                    url={resource.url}
                    name={resource.name}
                    message={resource.message}/>
            ))}
        </div>
    )
}

export default Resources;