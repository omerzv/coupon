package app.core.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.core.service.AdminService;
import app.core.service.ClientService;
import app.core.service.CompanyService;
import app.core.service.CustomerService;
@Service
public class LoginManager {
	
		@Autowired
		private CompanyService companyService;
		@Autowired
		private CustomerService customerService;
		@Autowired
		private AdminService  adminService;
		
		public ClientService login(String email,String password,ClientType ct) {
			ClientService clientService=null;
			switch (ct) {
			case Administrator :
					if(adminService.login(email, password))clientService=this.adminService;
				break;
				
			case Company:
				if(companyService.login(email, password))clientService=this.companyService;
				break;

			case Customer:
				if(customerService.login(email, password))clientService=this.customerService;
				break;
			
			}
			return clientService;
		}
		
		public enum ClientType {
			Administrator,Company,Customer
		}
}
