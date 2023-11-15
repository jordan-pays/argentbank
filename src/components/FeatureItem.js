import React from 'react'
import '../css/FeatureItem.css'

function FeatureItem({ icon, title, children }) {
	return (
		<div className="feature-item">
			<img src={icon} alt="Chat Icon" className="feature-icon" />
			<h3 className="feature-item-title">{title}</h3>
			<p>
				{children}
			</p>
		</div>
	)
}

export default FeatureItem