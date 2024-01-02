import React, { useRef } from 'react'
import { Container, Header, LogoImage } from './styles'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

import Input from '../../components/Input'

import logo from '../../assets/devdot256.png'


const Profile = () => {
    const formRef = useRef<FormHandles>(null);

    return (
        <Container style={{ flex: 1, backgroundColor: '#E1E1E1' }}>
            <Header>
                <LogoImage source={logo} />
                <Form ref={formRef} onSubmit={() => { }}>
                    <Input name="Search" icon="search" placeholder="Pesquisar" />
                </Form>
            </Header>
        </Container>
    )
}

export default Profile
