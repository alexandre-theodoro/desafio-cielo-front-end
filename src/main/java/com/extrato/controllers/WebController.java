package com.extrato.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {
	
	//Retorna a página do extrato
	 @RequestMapping("/extrato")
	 public String extrato() {
		 return "extrato";
	 }
	 
	 //Erro: Arquivo json não encontrado
	 @RequestMapping("/404")
	 public String erro404() {
		 return "404";
	 }
	 
	 //Erro: Erro no parse do arquivo json
	 @RequestMapping("/500")
	 public String erro500() {
		 return "500";
	 }
	 
	 //Serviço indisponível
	 @RequestMapping("/erroservico")
	 public String erroservico() {
		 return "erroservico";
	 }
}
