import { Icon } from "@iconify/react";
import { Star } from "./Star";

type Rating = {
  icon: string;
  starRating: number;
}

export function Rating(props:Rating) {
  return (
    <div className="flex mx-auto">
      <div>
        <Icon 
        width="3.5em" 
        height="3.5em" 
        icon={props.icon} />
      </div>
      
      {(() => {

        if (props.starRating == 1) {

          return (

            <div>
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
            </div>

          )
        } else if (props.starRating == 2){
          return (

            <div>
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
            </div>
          )
        } else if (props.starRating == 3) {

          return (

            <div>
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
            </div>

          )

        } else if (props.starRating == 4) {

          return (

            <div>
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
            </div>

          )

        } if (props.starRating == 5) {

          return (

            <div>
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
            </div>

          )

        } if (props.starRating == 6) {

          return (

            <div>
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
            </div>

          )

        } if (props.starRating == 7) {

          return (

            <div>
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
            </div>

          )

        } if (props.starRating == 8) {

          return (

            <div>
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
            </div>

          )

        } if (props.starRating == 9) {

          return (

            <div>
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
            </div>

          )

        } if (props.starRating == 10) {

          return (

            <div>
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="yellow" strokeColor="yellow" strokeWidth="1.0" />
            </div>

          )

        } else {
          return (

            <div>
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
              <Star fill="white" strokeColor="yellow" strokeWidth="1.0" />
            </div>
          )
        }
      })()}
    </div>
  )
}












