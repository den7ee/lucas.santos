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
          description={t("Projeto (Em Construção) para compreender o básico em Angular.")}
          tech1="vscode-icons:file-type-angular"
          tech2="logos:sass"
          tech3="vscode-icons:file-type-typescript-official"
          gitHubLink={underConstructionImage}
          link={underConstructionImage}
          />

          <Project 
          name={t("Portfólio 3.0")} 
          description={t("Versão atual do meu portfólio.")}
          tech1="logos:react"
          tech2="vscode-icons:file-type-tailwind"
          tech3="vscode-icons:file-type-typescript-official"
          gitHubLink="https://github.com/den7ee/den7ee.github.io"
          link="https://den7ee.github.io/"
          />

          <Project 
          name={t("Portfólio 2.0")} 
          description={t("Segunda versão do meu portfólio.")}
          tech1="vscode-icons:file-type-html"
          tech2="vscode-icons:file-type-css"
          tech3="logos:javascript"
          gitHubLink="https://github.com/den7ee/tic-tac-toe"
          link="/projects/portfolio-v2.0/index.html"
          />

          <Project 
          name={t("Portfólio 1.0")} 
          description={t("Primeira versão do meu portfólio.")}
          tech1="vscode-icons:file-type-html"
          tech2="vscode-icons:file-type-css"
          tech3=""
          gitHubLink="https://github.com/den7ee/tic-tac-toe"
          link="/projects/portfolio-v1.0/index.html"
          />

        </div>
    </div>
  )
}