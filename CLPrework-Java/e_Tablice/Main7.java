
import java.util.Random;

public class Main7 {

	public static void main(String[] args) {
		Random generator = new Random();
	int[] randNumbers = new int[100];
		for(int i=0; i<randNumbers.length; i++){
		randNumbers[i]=generator.nextInt(21);;
		System.out.print(randNumbers[i]+",");		
		}
	

	}

}
