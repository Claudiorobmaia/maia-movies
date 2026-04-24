export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  position: relative;
  z-index: 100;   /* ← garante que fique acima de tudo */

  /* Tablet */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    padding: 10px 16px;
    text-align: center;
  }

  /* Celular */
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
    padding: 8px 12px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;

  /* Tablet */
  @media (max-width: 768px) {
    gap: 14px;
  }

  /* Celular */
  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

    a {
      font-size: 0.85rem;
    }
  }
`;