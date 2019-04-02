import * as React from "react";
import YoutubeEmbedVideo from "youtube-embed-video";
import { CustomButton } from "./CustomButton"

export const LatterCompositionListItem = ({composition}) => {

	let divLeft = (
		<div className="row lc-flex-container">
			<div className="lc-row col-lg-6 col-md-9 col-sm-11 col-xs-11 latter-desc">
				<h6 className="latter-date">{composition.date}</h6>
				<h6 className="latter-author-name">{composition.author}</h6>
				<h4 className="bold pt20">{composition.title}</h4>
				<p className="latter-description">{composition.description}</p>
				
				
				<div className="latter-button-and-social-div">
					<a href={composition.itunes_url} className="black" target="_blank" rel="noopener noreferrer">
						<CustomButton text="Visit the iTunes"></CustomButton>
					</a>
					<span className="latter-social"></span>
				</div>
			</div>
			<div className="lc-row col-lg-6 col-md-9 col-sm-11 col-xs-11 containIFrame">
				<YoutubeEmbedVideo videoId={composition.youtube_id} suggestions={false} />
			</div>
		</div>
	)

	let divRight = (
		<div className="row lc-flex-container">
			<div className="lc-row-reverse col-lg-6 col-md-9 col-sm-11 col-xs-11 containIFrame">
				<YoutubeEmbedVideo videoId={composition.youtube_id} suggestions={false} />
			</div>
			<div className="lc-row col-lg-6 col-md-9 col-sm-11 col-xs-11 latter-desc" >
				<h6 className="latter-date">{composition.date}</h6>
				<h6 className="latter-author-name">{composition.author}</h6>
				<h4 className="bold pt20">{composition.title}</h4>
				<p className="latter-description">{composition.description}</p>
				
				
				<div className="latter-button-and-social-div">
					<a href={composition.itunes_url} className="black" target="_blank" rel="noopener noreferrer">
						<CustomButton text="Visit the iTunes"></CustomButton>
					</a>
					<span className="latter-social"></span>
				</div>
			</div>			
		</div>
	)

	return (

		<div className="mt50">
			{composition.id % 2 === 0 ?
				divRight
			:
				divLeft
			}
		</div>
	);
};