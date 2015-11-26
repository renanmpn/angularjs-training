
        angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope,  contatosAPI,operadorasAPI,serialGenerator) {
            console.log(serialGenerator.generate());
            $scope.app = "Lista Telefonica";
            $scope.contatos = [];
            $scope.operadoras = [];
            
            var carregarContatos = function(){
                contatosAPI.getContatos().success(function(data,status){
                   $scope.contatos = data; 
                });
            }
            
            var carregarOperadoras = function(){
                operadorasAPI.getOperadoras().success(function(data,status){
                   $scope.operadoras = data; 
                });
            }

            $scope.adicionarContato = function (contato) {
               
                contato.serial = serialGenerator.generate();
                contato.data = new Date();
                contatosAPI.saveContato(contato).success(function(data){
                    delete $scope.contato;
                    $scope.contatoForm.$setPristine();
                    carregarContatos();                        
                });
                
            }

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
            carregarContatos();
            carregarOperadoras();
        });