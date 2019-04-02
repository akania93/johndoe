import * as React from "react";
import { LatterCompositionListItem } from "./LatterCompositionListItem";

export const LatterCompositionList = ({compositionList}) => {
	return (
		<div className="container">
			{compositionList.length > 0
			?
			compositionList.map((item) =>
				<LatterCompositionListItem key={item.id} composition={item}></LatterCompositionListItem>
			)
			:
			<h2 className="text-center" style={{color: "teal"}}>Symulacja ładowania z API...</h2>
			}
		</div>
	)
}