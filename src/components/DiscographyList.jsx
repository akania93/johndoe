import * as React from "react";
import { DiscographyListItem } from "./DiscographyListItem";

export const DiscographyList = ({data}) => {

  return (
      <div className="container">
          {data.map((d) =>
            <DiscographyListItem key={d.id} data={d}></DiscographyListItem>
          )}
      </div>
  )
}