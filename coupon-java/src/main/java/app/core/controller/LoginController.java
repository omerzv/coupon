package app.core.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import app.core.entity.Customer;
import app.core.exception.CouponSystemException;
import app.core.login.LoginManager.ClientType;
import app.core.login.TokenLoginManager;
import app.core.service.AdminService;

@RestController
@CrossOrigin
public class LoginController {

	@Autowired
	private TokenLoginManager loginManager;
	@Autowired
	private AdminService ser;
	
	@PostMapping("/login")
	public String Login(@RequestParam String email, @RequestParam String password,
			@RequestParam ClientType clientType) {
		System.out.println(email+","+password+","+clientType);
		try {
			return loginManager.login(email, password, clientType);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, e.getMessage());
		}
	}
	@PostMapping("/g")
	public Customer g() {
		return ser.getCustomer(1);
	}
	
	
	
	

}
