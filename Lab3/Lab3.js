
        (function(){
            const Pali = {
                htmlElements: {
                    form: document.querySelector('.Palindromo__form__js'),
                    input: document.querySelector('.Palindromo__input__js'),
                },
                init: function(){
                    Pali.bindEvents();
                },
                bindEvents: function(){
                    Pali.htmlElements.form.addEventListener('submit', Pali.events.onFormSubmit)
                },
                events: {
                    onFormSubmit: function(e){
                        e.preventDefault();
                                var resp;
                                var respBi;   
                                const num= Pali.htmlElements.input.value;
                                const numBinario = (+num).toString(2);

                                function PalindromoNum(){
                            
                                    for(var i=0; i<num.length; i++){
                                        if(num [i] != num[num.length-i-1]){
                                            return false;

                                        }

                                    }
                                    return true;

                                };

                                function PalindromoBinario (){

                                    for(var i=0; i<numBinario.length; i++){
                                            
                                            if(numBinario [i] != numBinario[numBinario.length-i-1]){
                                                
                                                return false;
                                            
                                            }
                
                                    }
                                            return true;
                                };
                                if(PalindromoNum() == true){

                                    resp = "El numero " +num+" 'SI' es un Palindromo en Base 10";
                                }else{

                                    resp = "El numero " +num+" 'NO' es un Palindromo en Base 10";
                                }


                                if(PalindromoBinario() == true){

                                    respBi = "El numero " +numBinario.toString(2)+" 'SI' es un Palindromo en Base 2";
                                }else{

                                    respBi = "El numero " +numBinario.toString(2)+" 'NO' es un Palindromo en Base 2";
                                }

                                alert( resp +"\n"+ "y "+ respBi); 
                                console.log( resp +"\n"+ "y "+ respBi); 
                                    }
                                }
            }  ;
            Pali.init();
        })();
        

        /*(function(){

            function ValidarPalindromo(event){
                event.preventDefault();

                var resp;
                var respBi;   
                var num= document.getElementById("P-input").value;
                var numBinario = (+num).toString(2);

                function PalindromoNum(){
            
                    for(var i=0; i<num.length; i++){
                        if(num [i] != num[num.length-i-1]){
                            return false;

                        }

                    }
                    return true;

                };

                function PalindromoBinario (){

                    for(var i=0; i<numBinario.length; i++){
                            
                            if(numBinario [i] != numBinario[numBinario.length-i-1]){
                                
                                return false;
                            
                            }
  
                    }
                            return true;
                };
                if(PalindromoNum() == true){

                    resp = "El numero " +num+" 'SI' es un Palindromo en Base 10";
                }else{

                    resp = "El numero " +num+" 'NO' es un Palindromo en Base 10";
                }


                if(PalindromoBinario() == true){

                    respBi = "El numero " +numBinario.toString(2)+" 'SI' es un Palindromo en Base 2";
                }else{

                    respBi = "El numero " +numBinario.toString(2)+" 'NO' es un Palindromo en Base 2";
                }

                alert( resp +"\n"+ "y "+ respBi); 
                console.log( resp +"\n"+ "y "+ respBi); 

            }

            form_palindromo.addEventListener("submit", ValidarPalindromo );
            
        })(); */



        

        /*document.getElementById("Pali-Btn").addEventListener('click', function() {
            var resp;
            var respBi;   
            var num= document.getElementById("P-input").value;
            var numBinario = (+num).toString(2);

            function PalindromoNum(){
        
                for(var i=0; i<num.length; i++){
                    if(num [i] != num[num.length-i-1]){
                        return false;

                    }

                }
                return true;

            };

            function PalindromoBinario (){
            
                
                for(var i=0; i<numBinario.length; i++){
                        
                        if(numBinario [i] != numBinario[numBinario.length-i-1]){
                            
                            return false;
                           
                        }
                        

                }
                        return true;
            };
                if(PalindromoNum() == true){

                    resp = "El numero " +num+" 'SI' es un Palindromo en Base 10";
                }else{

                    resp = "El numero " +num+" 'NO' es un Palindromo en Base 10";
                }


                if(PalindromoBinario() == true){

                    respBi = "El numero " +numBinario.toString(2)+" 'SI' es un Palindromo en Base 2";
                }else{

                    respBi = "El numero " +numBinario.toString(2)+" 'NO' es un Palindromo en Base 2";
                }

                alert( resp +"\n"+ "y "+ respBi);

            //alert(cadena+ "\n"+"Suma de la Diagonal Principal es: " +SumaDiagonal);
            })*/  