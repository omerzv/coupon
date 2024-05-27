package app.core.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;

import app.core.entity.Company;
import app.core.entity.Customer;
import app.core.login.LoginManager;
import app.core.login.LoginManager.ClientType;
import app.core.service.AdminService;

//@Component
@Order(1)
public class TestAdmin implements CommandLineRunner {
	@Autowired
	private LoginManager loginManager;
	/**
	 *Testing all the methods of the admin service
	 *First all the methods related to the company
	 *Then all the methods related to the customer
	 */
	@Override
	public void run(String... args) throws Exception {

		System.out.println("================Admin Test Started==============");
		
		System.out.println("================Company==============");
		AdminService admin= (AdminService) this.loginManager.login("admin@admin.com", "admin", ClientType.Administrator);
		Company com= new Company(0, "amd", "amd@gmail.com", "rr", null);
		Company com2= new Company(0, "apple", "apple@gmail.com", "dtr", null);
		Company com3= new Company(0, "netflix", "netflix@gmail.com", "dom", null);
		admin.addCompany(com);//Check distinct email and name
		admin.addCompany(com2);
		admin.addCompany(com3);
		System.out.println(admin.getAllCompanies());
		admin.updateCompany(new Company(1, "AMD", "amd@gmail.com", "ommr", null));//Update by email
		System.out.println(admin.getCompany(1));
		admin.deleteCompany(2);
		
		System.out.println("=============Customer============");
		Customer cus= new Customer(0, "noa", "zv", "noa@", "nnooa", null);
		Customer cus2= new Customer(0, "IDO", "ZV", "ido@", "iiddo", null);
		Customer cus3= new Customer(0, "omer", "zv", "omer@", "oomm", null);
		admin.addCustomer(cus);
		admin.addCustomer(cus2);
		admin.addCustomer(cus3);
		System.out.println(admin.getAllCustomers());
		admin.updateCustomer(new Customer(2, "ido", "zv", "ido@", "ido11--", null));//Update by email
		System.out.println(admin.getCustomer(2));
		admin.deleteCustomer(3);
		
		System.out.println("================Admin Test Ended==============");
	}

}
