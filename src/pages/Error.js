import React from 'react'
import "../css/Error.css"
import { Link } from 'react-router-dom'

export default function Error() {

	return (
		<main class="main bg-dark">
			<div className='container_error'>
				<div>
					<p className='huge_text_error'>404</p>
					<p className="text_error">Oups! La page que vous demandez n'existe pas.</p>
				</div>
				<Link to="/" className="link_error">Retourner sur la page d’accueil</Link>
			</div>
		</main>

	)
}
