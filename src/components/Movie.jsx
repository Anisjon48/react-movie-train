export function Movie(props) {
	const {
		Title: title,
		Year: year,
		imdbID: id,
		Type: type,
		Poster: poster
	} = props;

	return <div id={id} className="card movie">
		<div className="card-image">
			{
				poster === 'N/A' ? <img src={`https://via.placeholder.com/300x430?text=${title}`} alt={title} /> : <img src={poster} alt={title} />
			}

			<span className="card-title">{title}</span>
		</div>
		<div className="card-content">
			<p>{year} <span className="right">{type}</span></p>
		</div>
		<div className="card-action">
			<a href="!#">See...</a>
		</div>
	</div>
}