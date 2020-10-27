
public class Main3 {

	public static void main(String[] args) {
		int[] numbers = { 5, 14, 31, 78, 43, 56, 87, 34, 13, 99};
		int sum=0;
		for(int i=0; i<numbers.length; i++){
		sum+=numbers[i];
		}
		System.out.println("Suma elementów tablicy to: " + sum);
	}

}
