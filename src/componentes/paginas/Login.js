import React from "react";
import { Button, Card, Container, Form, FormGroup, Input, Label } from "reactstrap";
import BarraDeTarefa from "../BarraDeTarefa";
function Login() {
    return (
        <div style={{paddingTop:'6rem'}}>
        <Container>
            <BarraDeTarefa/>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
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
export default Login;