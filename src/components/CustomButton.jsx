import * as React from "react";

export const CustomButton = ({text}) => {
	return (
		<button type="button" className="btn btn-lg custom-button col-xs-4">
			<span className="bold">{text}</span>
			<span className="glyphicon glyphicon-menu-right glyphicon-position-manually pull-right"></span>
		</button>
	)
}