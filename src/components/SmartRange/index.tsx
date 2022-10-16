import React, { useState, useCallback } from 'react';

import { ICorners, IVariant } from './types';

import { Container, Arrow } from './styles';

export interface ISmartRangeProps {
  corners?: ICorners;
  variant?: IVariant;
}

const SmartRange: React.FC<ISmartRangeProps> = ({
  corners = 'rounded',
  variant = 'standard',
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = useCallback(() => setIsFocused(true), []);

  return (
    <Container corners={corners} variant={variant} isFocused={isFocused}>
      <input
        onFocus={handleFocus}
        onBlur={() => setIsFocused(false)}
        placeholder="Filtrar"
        readOnly
      />

      <Arrow isFocused={isFocused} />
    </Container>
  );
};

export { SmartRange };
