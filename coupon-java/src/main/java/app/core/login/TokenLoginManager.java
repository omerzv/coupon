package app.core.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import app.core.exception.CouponSystemException;
import app.core.login.LoginManager.ClientType;
import app.core.service.AdminService;
import app.core.service.CompanyService;
import app.core.service.CustomerService;
import app.core.utilities.JwtUtil;

@Component
public class TokenLoginManager{

	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
	private ApplicationContext ctx;
	
	
	public String login(String email, String password, ClientType client) throws CouponSystemException {
		if (client.equals(ClientType.Administrator)) {
			AdminService service = ctx.getBean(AdminService.class);
			if (service.login(email, password) ) {
				return jwtUtil.generateToken(0, email, ClientType.Administrator);
			}
		}
		if (client.equals(ClientType.Company)) {
			CompanyService service = ctx.getBean(CompanyService.class);
			if (service.login(email, password)) {
				ServerClientType.setCt(client);
				int id = service.getCompanyId();
				return jwtUtil.generateToken(id, email, ClientType.Company);
			}
		}
		if (client.equals(ClientType.Customer)) {
			CustomerService service = ctx.getBean(CustomerService.class);
			if (service.login(email, password) ) {
				ServerClientType.setCt(client);
				int id = service.getCustomerId();
				return jwtUtil.generateToken(id, email, ClientType.Customer);
			}
		}
		throw new CouponSystemException("incorrect email or password");
	}

}
