import { useTranslation } from "react-i18next";
import { Project } from "./Project"
import underConstructionImage from '../assets/images/jogo-do-galo.png'

type Projects = {

}

export function Projects(props:Projects) {
    const { t } = useTranslation();
    return(
    <div className='bg-white rounded-md max-w-xl mx-auto p-4 m-6'>
        <div className='text-black text-center p-2'>
            <h2 className=' text-black text-2xl'>Projects</h2>
        </div>

        <div className="grid grid-cols-2 p-10 gap-10">
          <Project 
          name={t("Jogo do Galo")}
          obs={t("(Em construção)")}
          tech1="vscode-icons:file-type-angular"
          tech2="logos:sass"
          tech3="vscode-icons:file-type-typescript-official"
          gitHubLink={underConstructionImage}
          link={underConstructionImage}
          />

          <Project 
          name={t("Portfólio 3.0")}
          tech1="logos:react"
          tech2="vscode-icons:file-type-tailwind"
          tech3="vscode-icons:file-type-typescript-official"
          gitHubLink="https://github.com/den7ee/lucas.santos"
          link="https://den7ee.github.io/lucas.santos/"
          />

          <Project 
          name={t("Portfólio 2.0")} 
          tech1="vscode-icons:file-type-html"
          tech2="vscode-icons:file-type-css"
          tech3="logos:javascript"
          gitHubLink="https://github.com/den7ee/portfolio-2.0"
          link="https://den7ee.github.io/portfolio-2.0/"
          />

          <Project 
          name={t("Portfólio 1.0")} 
          tech1="vscode-icons:file-type-html"
          tech2="vscode-icons:file-type-css"
          tech3=""
          gitHubLink="https://github.com/den7ee/portfolio-1.0"
          link="https://den7ee.github.io/portfolio-1.0/"
          />

        </div>
    </div>
  )
}