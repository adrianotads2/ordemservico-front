import React  from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';
import {withRouter} from 'react-router-dom';

class Login extends React.Component {

	preCadastro = () => {
		this.props.history.push('/cadastro-servidor')
	}

	render(){
		return (
				<div className="row">
					<div className="col-md-6"
						style={{position: 'relative', left: '300px'}}>
						<div className="bd-docs-section">
							{/** Card */}
							<Card title="Login">
                                <fieldset>
                                    <FormGroup label="Email: *" htmlFor="inputEmail">
                                    <input type="email" 
												  className="form-control" 
                                                  id="exampleInputEmail1" 
												  aria-describedby="emailHelp" 
												  placeholder="Enter email"/>
                                    </FormGroup>
                                    <FormGroup label="Senha: *" htmlFor="inputSenha">
                                    <input type="password" className="form-control" 
										   id="exampleInputPassword1" 
										   placeholder="Password"/>
                                    </FormGroup>
                                    <button type="button" 
                                            className="btn btn-primary"
                                            style={{margin: '4px 4px 0 0'}}>Acessar</button>
                                    <button type="button" 
                                            className="btn btn-info"
                                            style={{margin: '4px 4px 0 0'}}
											onClick={this.preCadastro}>Cadastrar</button>
                                    </fieldset>
							</Card>
						</div>
					</div>
				</div>
			);
	}
}

export default withRouter(Login);
