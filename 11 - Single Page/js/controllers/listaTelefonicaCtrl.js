
        angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope,serialGenerator, contatos) {
            
            $scope.app = "Lista Telefonica";
            $scope.contatos = contatos.data;
            $scope.operadoras = [];
            
             
            
            

            

            $scope.apagarContatos = function (contatos) {
                $scope.contatos = contatos.filter(function (contato) {
                    if (!contato.selecionado) {
                        return contato;
                    }
                });
            }

            $scope.isContatosSelecionados = function (contatos) {
                return contatos.some(function (contato) {
                    return contato.selecionado;
                })
            };
            
            $scope.ordenarPor = function (campo){
                $scope.criterioDeOrdenacao = campo;
                $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao; 
            };
            
        });