package app.core.login;

import app.core.login.LoginManager.ClientType;


public class ServerClientType {

	private static ClientType CT=ClientType.Administrator;
	
	public static void setCt(ClientType CT) {
		ServerClientType.CT = CT;
	}
	
	public static ClientType getCT() {
		ClientType ct=ServerClientType.CT;
		return ct;
	}
	
}
