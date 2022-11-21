import { useTranslation } from "react-i18next";
import { Rating } from "./Rating";

type Accordion = {
  icon: string;
  starRating: number;
  contentP1?: string | null;
  contentP2?: string | null;
  contentP3?: string | null;
  contentP4?: string | null;
}

export function Accordion(props:Accordion){
  const { t } = useTranslation();
  return (    
    <div className="
    relative
    mx-auto
    max-w-xs
    overflow-hidden
    mb-5
    ">
      <input type="checkbox"
      className="
      peer
      absolute
      top-0
      inset-x-0
      w-full
      h-full
      opacity-0
      z-10
      cursor-pointer"/>
      <div className="
      bg-neutral-600
      h-20
      flex
      items-center
      rounded-md
      m-1
      grayscale peer-checked:grayscale-0"
      >
        <Rating icon={props.icon} starRating={props.starRating}/>
      </div>

      <div className="
      bg-neutral-200
      overflow-hidden
      transition-all
      duration-700
      max-h-0 peer-checked:max-h-52
      -m-1
      mb-1
      rounded-md
      max-w-fit
      mx-auto
      p-0 peer-checked:p-4
      ">
        <div>
          <h3 className="
          text-black
          -mt-2
          mb-1
          ">{t("I know how")}:
          </h3>
          <p className="text-black p-1">{props.contentP1}</p>
          <p className="text-black p-1">{props.contentP2}</p>
          <p className="text-black p-1">{props.contentP3}</p>
          <p className="text-black p-1">{props.contentP4}</p>
        </div>
      </div>
    </div>
  );
};
