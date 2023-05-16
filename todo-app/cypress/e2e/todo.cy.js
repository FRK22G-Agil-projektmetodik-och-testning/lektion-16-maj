describe('Todo spec', () => {
  beforeEach(() => {
    // Denna funktion körs varje gång innan varje test
    cy.visit('http://127.0.0.1:5173/');
  });

  it('should display todos from API', () => {
    // Set up
    
    // Take action

    // Assert - Kontrollera faktiskt värde mot kontrollerat värde
    cy.get('.todo-item').should('have.length.greaterThan', 1);
  })

  it('should add a todo in todo list', () => {
    // Set up
    
    const todo = 'Ta lunch snart';
    cy.wait(1000);

    // Take action
    cy.get('.add-todo__input').type(todo);
    cy.get('.add-todo__button').click();

    // Assert
    cy.get('.todo-item').last().should('have.text', todo + ' - Ej klar');
  })
})