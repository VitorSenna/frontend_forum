import React from "react";
import { Button, Card, Container, Form, FormGroup, Input, Label } from "reactstrap";
import BarraDeTarefa from "../BarraDeTarefa";
function CadastroEquipe() {
    return (
        <div style={{paddingTop:'6rem'}}>
        <Container>
            <BarraDeTarefa/>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">
                        Nome : 
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Digite seu nome:"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        Sobrenome :
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Digite seu Sobrenome"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        E-mail :
                    </Label>
                    <Input
                        id="examplePassword"
                        name="email"
                        placeholder="Digite seu Email"
                        type="password"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        Usuario :
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Digite seu Usuario"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        Senha :
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Digite sua Senha"
                        type="password"
                    />
                </FormGroup>
                <Button>
                    Submit
                </Button>
            </Form>
        </Container>
        </div>
    )
}
export default CadastroEquipe;