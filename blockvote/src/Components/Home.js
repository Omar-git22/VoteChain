import React, { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";

const Home = (props) => {
	// const promptList = [
	// 	"Who would win in smash bros?",
	// 	"who is the better actor",
	// ];
	const [promptList, changePromptList] = useState([]);

	useEffect(() => {
		const getPrompts = async () => {
			changePromptList(await window.contract.getAllPrompts());
			console.log(await window.contract.getAllPrompts());
		};
		getPrompts();
	}, []);

	return (
		<Container>
			<Table style={{ margin: "5vh" }} striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>List of Polls</th>
						<th>Go to Polls</th>
					</tr>
				</thead>
				<tbody>
					{promptList.map((el, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{el}</td>
								<td>
									{" "}
									<Button onClick={() => props.changeCandidates(el)}>
										Go to Poll
									</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</Container>
	);
};

export default Home;
