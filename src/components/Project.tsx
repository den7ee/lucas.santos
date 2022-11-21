import { Icon, IconifyIcon } from "@iconify/react";

type Project = {
    name: string;
    description: string;
    tech1: string;
    tech2: string;
    tech3: string;
    gitHubLink: string;
    link: string;
}

export function Project(props:Project) {
    return(
        <div className="
          bg-neutral-700
          rounded
          relative
          ">
            <div className="
            p-10
            ">
              <h2 className="
              text-white">
                {props.name}
                <div className="
                flex
                gap-1
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

              <p className="
              text-neutral-300
              my-2
              text-xs
              ">
                {props.description}
              </p>

              <div className="
              flex
              gap-2
              absolute 
              bottom-1 
              right-1
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