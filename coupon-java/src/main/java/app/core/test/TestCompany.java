package app.core.test;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;

import app.core.entity.Coupon;
import app.core.entity.Coupon.Category;
import app.core.login.LoginManager;
import app.core.login.LoginManager.ClientType;
import app.core.service.CompanyService;
//@Component
@Order(2)
public class TestCompany implements CommandLineRunner {
	@Autowired
	private LoginManager loginManager;
	/**
	 *Testing all the methods of the company service
	 *First all the methods on one company
	 *Then all the methods on the other one
	 */
	@Override
	public void run(String... args) throws Exception {
		
		System.out.println("================Company Test Started==============");
		System.out.println("================First Company-Netflix==============");
		CompanyService company= (CompanyService) loginManager.login("netflix@gmail.com", "dom", ClientType.Company);
		int companyId= company.getCompanyId();
		Coupon coupon1 = new Coupon(0, null, Category.Electricity, "Bug", null, LocalDate.of(2020, 12, 12), 2, 6, "netflix", null);
		Coupon coupon2 = new Coupon(0, null, Category.Electricity, "Ivory", null, LocalDate.of(2023, 12, 12), 2, 3, "netflix", null);
		Coupon coupon3 = new Coupon(4, null, Category.Vaction, "NYC", null, LocalDate.of(2023, 12, 12), 2, 10, "netflix", null);
		Coupon coupon4 = new Coupon(0, null, Category.Restaurant, "Mcdonals", null, LocalDate.of(2023, 12, 12), 2, 8, "netflix", null);
		Coupon coupon5 = new Coupon(0, null, Category.Restaurant, "Dominos", null, LocalDate.of(2023, 12, 12), 2, 8, "netflix", null);
		Coupon coupon6 = new Coupon(0, null, Category.Vaction, "TLV", null, LocalDate.of(2023, 12, 12), 2, 8, "netflix", null);
		Coupon coupon7 = new Coupon(0, null, Category.Food, "Pizza", null, LocalDate.of(2023, 12, 12), 2, 8, "netflix", null);
		company.addCoupon(coupon1,companyId);
		company.addCoupon(coupon2,companyId);
		company.addCoupon(coupon3,companyId);
		company.addCoupon(coupon4,companyId);
		company.addCoupon(coupon5,companyId);
		company.addCoupon(coupon6,companyId);
		company.addCoupon(coupon7,companyId);
		System.out.println("====All Coupons=====");
		System.out.println(company.getAllCoupons(companyId));
		System.out.println("====All Same Category Coupons=====");
		System.out.println(company.getAllCouponsByCategory(Category.Food,companyId));
		System.out.println("====All Under 80 Coupons=====");
		System.out.println(company.getAllCouponsByPrice(8,companyId));
		coupon6=  new Coupon(6, null, Category.Restaurant, "Pizza Hat", null, LocalDate.of(2023, 12, 12), 2, 8, null, null);
		company.updateCoupon(coupon6,companyId);//Update by id
		company.deleteCoupon(7,companyId);
		System.out.println("====Company Details=====");
		System.out.println(company.getDetails(companyId));
		
		System.out.println("================Second Company-Amd==============");
		CompanyService company1= (CompanyService) loginManager.login( "amd@gmail.com", "ommr", ClientType.Company);
		int companyId1= company1.getCompanyId();
		Coupon coupon8 = new Coupon(0, null, Category.Electricity, "GoMoblie", null, LocalDate.of(2020, 12, 12), 2, 6, "netflix", null);
		Coupon coupon9 = new Coupon(0, null, Category.Electricity, "KSP", null, LocalDate.of(2023, 12, 12), 2, 3, "netflix", null);
		Coupon coupon11 = new Coupon(0, null, Category.Vaction, "TLV", null, LocalDate.of(2023, 12, 12), 2, 3, "netflix", null);
		Coupon coupon12 = new Coupon(0, null, Category.Food, "Pizza", null, LocalDate.of(2023, 12, 12), 2, 3, "netflix", null);
		Coupon coupon14 = new Coupon(0, null, Category.Restaurant, "KPC", null, LocalDate.of(2023, 12, 12), 2, 3, "netflix", null);
		Coupon coupon10 = new Coupon(0, null, Category.Vaction, "LA", null, LocalDate.of(2023, 12, 12), 2, 10, "netflix", null);
		company1.addCoupon(coupon8,companyId1);
		company1.addCoupon(coupon11,companyId1);
		company1.addCoupon(coupon12,companyId1);
		company1.addCoupon(coupon14,companyId1);
		company1.addCoupon(coupon9,companyId1);
		company1.addCoupon(coupon10,companyId1);
		System.out.println("====All Coupons=====");
		System.out.println(company1.getAllCoupons(companyId1));
		System.out.println("====All Same Category Coupons=====");
		System.out.println(company1.getAllCouponsByCategory(Category.Electricity,companyId1));
		System.out.println("====All Under 80 Coupons=====");
		System.out.println(company1.getAllCouponsByPrice(8,companyId1));
		System.out.println("====Company Details=====");
		
		System.out.println(company1.getDetails(companyId1));
		
		System.out.println("================Company Test Ended==============");
	}

}
