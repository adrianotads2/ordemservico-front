import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';

class CadastroServidor extends React.Component {
	render() {
		return (

			<Card title="Cadastro de Servidores">
				<div className="row">
					<div className="col-lg-12">
						<div className="bs-component">
							<FormGroup label="Nome: *" htmlFor="inputNome">
								<input type="text" id="inputNome" name="nome"
									className="form-control" />
							</FormGroup>
							<FormGroup label="Telefone: *" htmlFor="inputTelefone">
								<input type="text" id="inputTelefone" name="telefone"
									className="form-control" />
							</FormGroup>
							<FormGroup label="Email: *" htmlFor="inputEmail">
								<input type="text" id="inputEmail" name="email"
									className="form-control" />
							</FormGroup>
							<FormGroup label="Senha: *" htmlFor="inputSenha">
								<input type="password" id="inputSenha" name="senha"
									className="form-control" />
							</FormGroup>
							<FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
								<input type="password" id="inputRepitaSenha" name="senha"
									className="form-control" />
							</FormGroup>
							<button type="button" className="btn btn-success"
								style={{ margin: '4px 4px 0 0' }}>Salvar</button>
							<button type="button" className="btn btn-danger"
								style={{ margin: '4px 0 0 0' }}>Cancelar</button>
						</div>
					</div>
				</div>
			</Card>

		);
	}

}

export default CadastroServidor;

