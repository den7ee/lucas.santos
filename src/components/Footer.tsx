import { useTranslation } from "react-i18next";
import cvEn from '../assets/downloads/Lucas Santos - Resume (EN).pdf'
import cvPT from '../assets/downloads/Lucas Santos - Resume (PT).pdf'

type Footer = {

}



export function Footer(props:Footer) {
    const { t } = useTranslation();
    return(
        <div className="flex justify-between bg-neutral-800 px-5 py-4">
            <div>
                <h2 className="text-lg">
                Lucas Santos
                </h2>
                <p className="text-neutral-400">
                {t("Developer Front end Junior.")}
                </p>
                <div className="flex mt-1">
                    <a href="https://www.linkedin.com/in/den7ee/"
                    target='_blank'>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width="2em" 
                            height="2em" 
                            preserveAspectRatio="xMidYMid meet" 
                            viewBox="0 0 256 256"
                            className="mr-1"
                            >
                                <path fill="#0A66C2" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009c-.002-12.157 9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"/>
                            </svg>
                        </p>
                    </a>
                </div>
            </div>

           
            <div>
                <h2 className="text-lg">
                {t("Currículo")}
                </h2>
                <div>
                    <a href={cvPT}
                    target='_blank'
                    >
                        <p className="text-base text-neutral-400">
                        - Português
                        </p>
                    </a>

                    <a href={cvEn}
                    target='_blank'
                    >
                        <p className="text-base text-neutral-400">
                        - English
                        </p>
                    </a>
                </div>
            </div>

            
        </div>      
    )
}