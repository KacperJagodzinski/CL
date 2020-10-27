

public class Main6 {

	public static void main(String[] args) {
		int n=12, modulo, modulo2, a=1;
		for(int i=1; i<=n; i++){
			System.out.print(i);
			if (i%2==0){
			System.out.println(" - parzysta");
			}else{
			System.out.println(" - nieparzysta");
			}
		}
		while(a<=n){
		System.out.print(a);
		modulo2=a%2;
		a++;
		if (modulo2==0){
			System.out.println(" - parzysta");
			}else{
			System.out.println(" - nieparzysta");
			}
		}
		

	}

}
