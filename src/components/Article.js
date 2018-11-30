import React, {Component} from 'react'

class Article extends Component {
	/*state = {
		isOpen: false
	}*/

	/*constructor(props) {
		super(props) 

		this.handleClick = this.handleClick.bind(this)
	}*/

	componentWillMount() {
		console.log(123)
	}

	render() {
		const {article, isOpen, onButtonClick} = this.props
		const body = isOpen && <section>{article.text}</section>

		return (
			<div className="card">
				<div className="card-header">
					<h2>
						{article.title}

						<button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
							{isOpen ? "Close" : "Open"}
						</button>
					</h2>
				</div>
				
				<div className="card-body">
					{body}
				</div>
			</div>
		)
	}

	/*handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}*/
}



export default Article