package app.core.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;

import app.core.entity.Coupon.Category;
import app.core.login.LoginManager;
import app.core.login.LoginManager.ClientType;
import app.core.service.CustomerService;

//@Component
@Order(3)
public class TestCustomer implements CommandLineRunner {
	@Autowired
	private LoginManager loginManager;

	/**
	 * Testing all the methods of the customer service
	 * First all the methods on one customer
	 * Then all the methods on the other one
	 */
	@Override
	public void run(String... args) throws Exception {
		System.out.println();
		System.out.println();
		System.out.println("================Customer Test Started==============");
		System.out.println("================Fist Customer-Noa==============");
		CustomerService customer = (CustomerService) loginManager.login("noa@", "nnooa", ClientType.Customer);
		int customerId = customer.getCustomerId();
		customer.purchaseCoupon(6, customerId);
		customer.purchaseCoupon(3, customerId);
		customer.purchaseCoupon(5, customerId);
		customer.purchaseCoupon(4, 1);
		customer.purchaseCoupon(9, 1);

		System.out.println("====All Coupons=====");
		System.out.println(customer.getAllCoupons(1));
		System.out.println("====All Same Category Coupons=====");
		System.out.println(customer.getAllCouponsByCategory(Category.Electricity, customerId));
		System.out.println("====All Under 7 Coupons=====");
		System.out.println(customer.getAllCouponsByPrice(7, customerId));
		System.out.println("====Customer Details====");
		System.out.println(customer.getDetails(customerId));

		System.out.println("================Second Customer-Ido==============");
		CustomerService customer2 = (CustomerService) loginManager.login("ido@", "ido11--", ClientType.Customer);
		int customerId2 = customer.getCustomerId();

		customer2.purchaseCoupon(4, customerId2);
		customer2.purchaseCoupon(9, customerId2);

		System.out.println("====All Coupons=====");
		System.out.println(customer2.getAllCoupons(customerId2));
		System.out.println("====All Same Category Coupons=====");
		System.out.println(customer2.getAllCouponsByCategory(Category.Electricity, customerId2));
		System.out.println("====All Under 7 Coupons=====");
		System.out.println(customer2.getAllCouponsByPrice(7, customerId2));
		System.out.println("====Customer Details====");
		System.out.println(customer2.getDetails(customerId2));

		System.out.println("================Customer Test Ended==============");

	}

}
