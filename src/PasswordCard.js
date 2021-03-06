import React from 'react';
import {NavLink} from 'react-router-dom';
import {Grid, Row, Col, Form, Image} from 'react-bootstrap';
import {Input, Button} from 'react-materialize';
import './PasswordCard.css';
import bcpCard from './images/bcpCard.png';

const PasswordCard = ({ model }) => {
  return (
    <Grid className="text-center">
			<Row className="show-grid">
				<Col xs={10} xsOffset={1}  sm={8} smOffset={2} md={6} mdOffset={3} lg={6} lgOffset={3}>
					<center><Image className="imgPasswordCard" src={bcpCard}/></center>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={6} lgOffset={3}>
					<h5 className="titlePasswordCard" >Ingresa la clave de tu tarjeta</h5>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={6} lgOffset={3}>
					<p>Tarjeta <b>{model.hidePartCard()}</b></p>
				</Col>
			</Row>
			<Form>
				<Row className="show-grid">
					<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={6} lgOffset={3}>
							<Input type="password" 
								placeholder="* * * *" 
								maxLength="4" 
								className="text-center lockPasswordCard" 
								value={model.user.passwordCard}
								onChange={e => model.validationPasswordCard(e)}/>
					</Col>							
				</Row>
				<Row className="show-grid">
					<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={6} lgOffset={3}>
						{
							model.user.passwordCard.length === 4 
							?
							<NavLink to={"/account"}><Button className="navPasswordCard" type="submit" 
							onClick={e => model.saveInfo(e)}>REGISTRAR</Button></NavLink>
							: 
							<Button className="btnPasswordCard" type="submit">REGISTRAR</Button>
						}
					</Col>
				</Row>	
			</Form>
		</Grid>
  );
};

export default PasswordCard;