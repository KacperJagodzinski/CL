
public class Main16 {

    public static void main(String[] args) {
	int x=4530;
	int y=168;
	int gdc=0;
	for(int i=1; i<=x && i<=y; i++){
		if(x%i==0 && y%i==0){
		gdc=i;		
		}	
	}
	System.out.println("Dla liczb " + x + " i " + y + " GDC to: " + gdc);

    }

}
