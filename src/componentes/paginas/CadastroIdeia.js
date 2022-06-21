import React from "react";
import { Button, Card, Col, Container, DropdownItem, DropdownMenu, Form, FormGroup, Input, Label, NavLink } from "reactstrap";
import BarraDeTarefa from "../BarraDeTarefa";
function CadastroIdeia() {
    return (
        <div style={{ paddingTop: '6rem' }}>
            <Container>
                <BarraDeTarefa />
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Titulo da equipe :
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
                            Descrição :
                        </Label>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="Digite seu Sobrenome"
                            type="textarea"
                        />
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="exampleSelect"
                            sm={2}
                        >
                            Qual a area da ideia :
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                            >
                                <option>
                                    Cultura Cientifica e Sociedade
                                </option>
                                <option>
                                    Literatura, artes e comunicação
                                </option>
                                <option>
                                    Informação,COmunicação,Tecnologia e Saude
                                </option>
                                <option>
                                    Perpção publica da ciencia e tecnologia
                                </option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <Button>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
export default CadastroIdeia;