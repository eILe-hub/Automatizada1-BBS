describe('Search test case',function(){
    it ('Search with results',function(){
        
        //ingresa a la web Ebay
        cy.visit('https://www.ebay.com/');
        //limpia el campo el campo e ingresa la palabra pilas
        cy.get('#gh-ac').clear().type('Pilas');
        //espera entre accion y accion 1.5s
        cy.wait(1500);
        //Hace click en el botón Buscar
        cy.get('#gh-btn').click();
        //espera entre accion y accion 1.5s
        cy.wait(1500);
        //Imprime en consola el número de items encontrados en la busqueda
        cy.get('.srp-controls__count-heading > :nth-child(1)').invoke("text").then(texto=>cy.log('El número de items es: ' + texto));
        
    })
})




