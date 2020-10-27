
public class Main5 {

	public static void main(String[] args) {
	int[] numbers = {-6, -12, -5, -1144, -231, -57, -98, -13, -88, -22};
	int max=numbers[0];
		for(int i=0; i<numbers.length; i++){
		 	if(numbers[i]>max){
			max=numbers[i];
			}
		}
	System.out.println(max);	
	}

}
