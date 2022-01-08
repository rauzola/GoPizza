import React from 'react';

import { Input } from '@components/input';
import { Button } from '@components/button';
import { Container } from './styles';

export function SignIn() {
  return (
    <Container>
      <Input
        placeholder="E-mail"
        type="secondary"
        autoCorrect={false}
        autoCapitalize="none"
      />

      <Input
        placeholder="Senha"
        type="secondary"
        secureTextEntry
      />

      <Button
        title="Entrar"
        type="secondary"

      />
    </Container>
  );
} 