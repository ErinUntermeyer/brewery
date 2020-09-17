import React from 'react'
import barSign from '../assets/bar-sign.png'
import './Filter.scss'

const Filter = ({ setStateByType, type }) => {

	return (
		<section className="Filter">
			<img src={barSign} alt="Bar sign with a beer on it" className="bar-sign"/>
			<p>filter by<br></br> brewery type</p>
			<div>
				<button onClick={(e) => setStateByType("micro")}>
					micro
				</button>
				<button onClick={(e) => setStateByType("brewpub")}>
					brewpub
				</button>
				<button onClick={(e) => setStateByType("regional")}>
					regional
				</button>
				<br></br>
				<button onClick={(e) => setStateByType("large")}>
					large
				</button>
				<button onClick={(e) => setStateByType("contract")}>
					contract
				</button>
				<button onClick={(e) => setStateByType("proprietor")}>
					proprietor
				</button>
				<button onClick={(e) => setStateByType("all")}>
					all
				</button>
			</div>
			{ type ? <p>current filter: {type}</p> : null }
		</section>
	)
}

export default Filter