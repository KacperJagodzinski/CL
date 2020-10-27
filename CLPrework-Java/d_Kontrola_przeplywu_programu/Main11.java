

public class Main11 {

    public static void main(String[] args) {
	int n=5;
		for(int i=1; i<=n; i++){
			for (int j=1; j<=n; j++){
				if(j<=i){
				System.out.print("* ");
				}else System.out.print(j + " ");
			}
		System.out.print("\n");
		}
		for(int i=n; i>0; i--){
			for (int j=1; j<=n; j++){
				if(j<=i){
				System.out.print("* ");
				}else System.out.print(j+ " ");
			}
		System.out.print("\n");
		}
		

    }

}
