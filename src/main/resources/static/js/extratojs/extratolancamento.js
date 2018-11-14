/*
 * Javascript que acessa o serviço na porta 8083 e retorna
 *  a lista de lançamentos
 */

	var ext = angular.module('extrato', []);
	
	ext.controller('ExtratoController', function($scope, $http) {
	    $http.get('http://localhost:8083/extrato/lancamentos').
	        then(function(response) {
	        	
	        	//Se houve sucesso, retorna os dados do serviço
	            $scope.lancamentos = response.data;
	            
	        }, function(response) {
	        	//Se houve erro, direciona para a página de erro
	        	
	        	//Erro -1 - serviço indisponível
	        	if(response.status == -1){
	        		window.location.href = "erroservico";
	        	}
	        	//Erro 500-Erro no parse do json legado
	        	if(response.status == 500){
	        		window.location.href = "500";
	        	}
	        	//Erro 404 - arquivo json legado não encontrado
	        	if(response.status == 404){
	        		window.location.href = "404";
	        	}

	        });
	});
