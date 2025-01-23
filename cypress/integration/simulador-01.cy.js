const files = [
    'challenge-qa-01.asm',
    'challenge-qa-02.asm',
    'challenge-qa-03.asm',
    'challenge-qa-04.asm',
    'challenge-qa-05.asm',
  ];
  
  files.forEach((file) => {
    describe(`Prueba de automatización de VonSim - ${file}`, () => {
      it(`Cargar y ejecutar ${file}`, () => {
        cy.visit('/');
  
        cy.fixture(file).then((codigo) => {
          cy.get('#codigo-panel').type(codigo);
        });
  
        // Simular entrada del teclado
        cy.get('#teclado').find('.tecla').contains('A').click();
        cy.get('#teclado').find('.tecla').contains('B').click();
        cy.get('#teclado').find('.tecla').contains('INTRO').click();
  
        // Verificar la salida
        cy.wait(1000);
        cy.get('#pantalla').should('contain.text', 'AB'); // Ajusta según el archivo
      });
    });
  });
  
