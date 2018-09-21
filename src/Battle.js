import React, { Component } from 'react';
import './Battle.css';

class Battle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			factions: [Faction]
		};
	}

	renderFaction(i) {
		return <Faction />;
	}

	newFaction() {
		return (
			<button className="newFaction">
				New Faction
			</button>
		);
	}

	render() {
		return (
			<div className="battle">
				{this.renderFaction(0)}
				{this.newFaction()}
			</div>
		);
	}
}

class Faction extends Component {
	constructor(props) {
		super(props);
		const char0 = [this.newChar('Name')];
		this.state = {
			name: "New Faction",
			init: 0,
			characters: [char0]
		};
	}

	newCharBut() {
		return (
			<button className="newChar" onClick={() => this.createChar()}>
				New Character
			</button>
		);
	}

	newChar(name) {
		return (
			<Character name={name} init={0}/>
		);
	}

	createChar() {
		const chars = this.state.characters.slice(0).concat([this.newChar('Name')]);
		this.setState({characters: chars});
	}

	render() {
		const init = this.state.init;
		const characters = this.state.characters;
		// const chars = [this.newChar('Orf'), this.newChar('Maven')];
		// this.state.characters = chars;
		// const characters = this.state.characters;
		// const chars = characters.concat(this.newChar('Name'));
		// const chars = characters.map((char, disp) => {
		// 	return (
		// 		<Character name={char.state.name} init = {char.state.name}/>
		// 	);
		// });

		return (
			<div>
				<div className="init">
					{init}
				</div>
				<div className="faction">
					{characters}
					{this.newCharBut()}
				</div>
			</div>
		);
	}
}

class Character extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Name',
			init: 0,
			editMode: false
		};
	}

	startEdit() {
		const newBool = !this.state.editMode;
		this.setState({editMode: newBool});
		console.log("Start Editing");
		console.log("Edit Mode: " + this.state.editMode)

	}

	handleNameChange(event) {
		const newName = event.target.name;
		console.log(newName);
		this.setState({name: event.target.value});
	}

	render() {
		let display;

		// Edit mode
		if (this.state.editMode) {
			display = (
				<div className="character">
						<label>
							Name:
							<input type="text" value={this.state.name} onChange={(event) => this.handleNameChange(event)} />
						</label>
					<button onClick={() => this.startEdit()}>
						Save
					</button>
				</div>
			);
		}
		// Display mode
		else {
			display = (
				<div className="character">
					<div>
						{this.state.name}
					</div>
					<div>
						Initiative:
						<input type="number" />
					</div>
					<button onClick={() => this.startEdit()}>
						Edit
					</button>
				</div>
			);
		}

		// console.log("Edit Mode: " + this.state.editMode);

		return (
			<div>
			{display}
			</div>
		);
	}
}



export default Battle;