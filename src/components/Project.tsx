import { useTranslation } from "react-i18next";
import { Icon, IconifyIcon } from "@iconify/react";

type Project = {
    name: string;
    obs?: string | null;
    tech1: string;
    tech2: string;
    tech3: string;
    gitHubLink: string;
    link: string;
}

export function Project(props:Project) {
  const { t } = useTranslation();
    return(
        <div className="
          bg-neutral-700
          rounded
          relative
          p-1
          h-40
          w-40  
          mx-auto
          ">
            <div className="
            ">
              <h2 className="
              text-white
              m-2
              ">
                {props.name}
                <p className="absolute">
                  {props.obs}
                </p>
                <p className="mt-6">
                  {t("Feito com")}:
                </p>
                <div className="
                flex
                ">
                    <Icon 
                    width="1.5em" 
                    height="1.5em" 
                    icon={props.tech1}
                    />

                    <Icon 
                    width="1.5em" 
                    height="1.5em" 
                    icon={props.tech2}
                    />

                    <Icon 
                    width="1.5em" 
                    height="1.5em" 
                    icon={props.tech3}
                    className="rounded-md"
                    />
                </div>
              </h2>

              <div className="
              absolute 
              bottom-1 
              right-1
              flex
              ">
                <p>
                  <a 
                  href={props.link}
                  target='_blank'
                  >
                    <Icon 
                    width="2.5em" 
                    height="2.5em" 
                    icon="mdi:web" 
                    />
                  </a>
                </p>

                <p>
                  <a href={props.gitHubLink}
                  target='_blank'
                  >
                    <Icon 
                    width="2.3em" 
                    height="2.5em" 
                    icon="akar-icons:github-fill" 
                    />
                  </a>
                </p>
              </div>

              
            </div>
        </div>
    )
}