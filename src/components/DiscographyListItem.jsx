import * as React from "react";

export const DiscographyListItem = ({data}) => {

	let buttonAction= ()=>(
		setTimeout(function(){ alert('Play CD: ' + data.disc_name); }, 200)
	) 

	return (
		<div className="row discography mt70">
			<div className="col-md-1" />
			<div className="col-md-4">
				<p className="discography-year">{data.year}</p>
				<p className="discography-disc-name">{data.disc_name}</p>
			</div>
			<div className="col-md-7">
				<h4 className="discography-article-name">{data.article_name}</h4>
				<p className="discography-description">{data.description}</p>
				<br />
				<button className="discography-btn">
				<img src={require('../images/'+data.button_image)} width="150" alt="button" onClick={buttonAction} />
				</button>
			</div>
		</div>
	);
};