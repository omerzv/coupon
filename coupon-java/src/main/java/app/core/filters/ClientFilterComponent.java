package app.core.filters;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import app.core.login.LoginManager.ClientType;
import app.core.utilities.JwtUtil;

@Component
public class ClientFilterComponent {

	@Bean(name = "companyFilter")
	public FilterRegistrationBean<CompanyFilter> companyFilter(JwtUtil jwtUtil) {
		FilterRegistrationBean<CompanyFilter> filterRegistrationBean = new FilterRegistrationBean<>();
		filterRegistrationBean.setFilter(new CompanyFilter(jwtUtil,ClientType.Company));
		filterRegistrationBean.addUrlPatterns("/company/*");
		System.out.println("company");
		
		return filterRegistrationBean;
	}
	

	@Bean(name = "adminFilter")
	public FilterRegistrationBean<AdminFilter> adminFilter(JwtUtil jwtUtil) {
		FilterRegistrationBean<AdminFilter> filterRegistrationBean = new FilterRegistrationBean<>();
		filterRegistrationBean.setFilter(new AdminFilter(jwtUtil, ClientType.Administrator));
		filterRegistrationBean.addUrlPatterns("/admin/*");
		
		System.out.println("admin");
		return filterRegistrationBean;
	
	}
	@Bean(name = "customerFilter")
	public FilterRegistrationBean<CustomerFilter> customerFilter(JwtUtil jwtUtil) {
		FilterRegistrationBean<CustomerFilter> filterRegistrationBean = new FilterRegistrationBean<>();
		filterRegistrationBean.setFilter(new CustomerFilter(jwtUtil,ClientType.Customer));
		filterRegistrationBean.addUrlPatterns("/customer/*");
		
		System.out.println("customer");
		return filterRegistrationBean;
	}
}
